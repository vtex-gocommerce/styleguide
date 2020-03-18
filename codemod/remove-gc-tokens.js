function replaceFromLiteral(source, j) {
  return j(source)
    .find(j.Literal)
    .forEach(el => {
      const { value: { value } } = el
      if (value && typeof value === 'string') {
        const parsedClassNames = value
          .split(' ')
          .map(cl => {
            let value = cl
            if (value.startsWith('g-')) value = cl.replace('g-', '')
            if (isFontClass(value)) value = fontClassMap[value]

            return value
          })
          .join(' ')

        if (value !== parsedClassNames) {
          const parsedLiteral = j.stringLiteral(parsedClassNames)

          j(el).replaceWith(parsedLiteral)  
        }
      }
    })
    .toSource()
}

function replaceFromTemplate(source, j) {
  return j(source)
    .find(j.TemplateLiteral)
    .forEach(el => {
      const { value: { quasis, expressions } } = el
      const parsedQuasis = quasis.map(q => {
        const { value: { raw }, tail } = q
        const parsedClassNames = raw
          .split(' ')
          .map(cl => {
            let value = cl
            if (value.startsWith('g-')) value = cl.replace('g-', '')
            if (isFontClass(value)) value = fontClassMap[value]

            return value
          })
          .join(' ')

          return j.templateElement({ cooked: parsedClassNames, raw: parsedClassNames }, tail)
      })

      const parsedLiteral = j.templateLiteral(parsedQuasis, expressions)

      j(el).replaceWith(parsedLiteral)
    })
    .toSource()
}

const fontClassMap = {
  'f1': 'f7',
  'f2': 'f6',
  'f3': 'f5',
  'f4': 'f4',
}

const isFontClass = (cl) => {
  return Object.keys(fontClassMap).includes(cl)
}

module.exports = function(file, { jscodeshift: j }) {
  let { source } = file
  source = replaceFromLiteral(source, j)
  source = replaceFromTemplate(source, j)

  return source
}

// function replaceFromClassAttr(source, j) {
//   return j(source)
//     .find(j.JSXAttribute, { name: { name: 'className' } })
//     .forEach(el => {
//       const { value: { value: { value } } } = el
//       if (value) {
//         const parsedClassNames = value
//           .split(' ')
//           .map(cl => {
//             let value = cl
//             if (value.startsWith('g-')) value = cl.replace('g-', '')
//             if (isFontClass(value)) value = fontClassMap[value]

//             return value
//           })
//           .join(' ')

//         const parsedAttr = j.jsxAttribute(
//           j.jsxIdentifier("className"),
//           j.literal(parsedClassNames)
//         )

//         j(el).replaceWith(parsedAttr)
//       }
//     })
//     .toSource()
// }

// function replaceFromVariables(source, j) {
//   return j(source)
//     .find(j.VariableDeclaration)
//     .forEach(el => {
//       const { value: { declarations, kind } } = el
//       const { id, init: { value } } = declarations[0]

//       if (value) {
//         const parsedClassNames = value
//           .split(' ')
//           .map(cl => {
//             let value = cl
//             if (value.startsWith('g-')) value = cl.replace('g-', '')
//             if (isFontClass(value)) value = fontClassMap[value]

//             return value
//           })
//           .join(' ')

//         const parsedVariable = j.variableDeclaration(
//           kind,
//           [j.variableDeclarator(id, j.literal(parsedClassNames))],
//         )
//         j(el).replaceWith(parsedVariable)
//       }
//     })
//     .toSource()
// }
