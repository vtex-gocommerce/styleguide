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
            if (isFontClass(value)) value = replaceFontClass(value)
            else if (isSizeClass(value)) value = replaceSizeClass(value)

            if (value.startsWith('g-')) value = cl.replace('g-', '')

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
            if (isFontClass(value)) value = replaceFontClass(value)
            else if (isSizeClass(value)) value = replaceSizeClass(value)

            if (value.startsWith('g-')) value = cl.replace('g-', '')

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
  'g-f1': 'f7',
  'g-f2': 'f6',
  'g-f3': 'f5',
  'g-f4': 'f4',
  'g-f5': 'f3',
  'g-f6': 'f2',
  'g-f7': 'f1',
}

const heightClassMap = {
  'g-h1': 'h1',
  'g-h2': 'h1',
  'g-h3': 'h1',
  'g-h4': 'h1',
  'g-h5': 'h1',
  'g-h6': 'h2',
  'g-h7': 'h2',
  'g-h8': 'h-small',
  'g-h9': 'h-small',
  'g-h10': 'h-regular',
  'g-h11': 'h-large',
  'g-h12': 'h3',
  'g-h13': 'h3',
  'g-h14': 'h4',
  'g-h15': 'h5',
  'g-h16': 'h5',
}

const widthClassMap = {
  'g-w1': 'w1',
  'g-w2': 'w1',
  'g-w3': 'w1',
  'g-w4': 'w1',
  'g-w5': 'w1',
  'g-w6': 'w2',
  'g-w7': 'w2',
  'g-w8': 'w2',
  'g-w9': 'w2',
  'g-w10': 'w2',
  'g-w11': 'w2',
  'g-w12': 'w3',
  'g-w13': 'w3',
  'g-w14': 'w4',
  'g-w15': 'w5',
  'g-w16': 'w5',
}

const isFontClass = (cl) => {
  return Object.keys(fontClassMap).findIndex(c => cl.startsWith(c)) > -1
}

const isSizeClass = cl => {
  return [
    ...Object.keys(heightClassMap),
    ...Object.keys(widthClassMap),
  ].findIndex(c => cl.startsWith(c)) > -1
}

const replaceSizeClass = cl => {
  const [preffix, classname, ...rest] = cl.split('-')
  const toReplace = `${preffix}-${classname}`
  const newClass = heightClassMap[toReplace] || widthClassMap[toReplace]
  return rest.length > 0 ? `${newClass}-${rest.join('-')}` : newClass
}

const replaceFontClass = cl => {
  const [preffix, classname, ...rest] = cl.split('-')
  const toReplace = `${preffix}-${classname}`
  const newClass = fontClassMap[toReplace]
  return rest.length > 0 ? `${newClass}-${rest.join('-')}` : newClass
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
