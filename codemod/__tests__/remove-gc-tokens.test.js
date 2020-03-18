const defineInlineTest = require('jscodeshift/dist/testUtils').defineInlineTest
const RemoveGCTokens = require('../remove-gc-tokens')

describe('Remove gc tokens', () => {
  defineInlineTest(
    RemoveGCTokens,
    {},
    '<div className="g-ml4 mr4 g-ph2 bg-muted-1" />',
    '<div className="ml4 mr4 ph2 bg-muted-1" />',
    'from classname attr'
  )

  defineInlineTest(
    RemoveGCTokens,
    {},
    '<div className="g-f2 mr4 g-ph2 bg-muted-1" />',
    '<div className="f6 mr4 ph2 bg-muted-1" />',
    'and substitute font tokens'
  )

  defineInlineTest(
    RemoveGCTokens,
    {},
    'const classes = "g-f2 mr4 g-ph2 bg-muted-1"',
    'const classes = "f6 mr4 ph2 bg-muted-1"',
    'from variables'
  )

  defineInlineTest(
    RemoveGCTokens,
    {},
    'const classes = 42',
    'const classes = 42',
    'and ignore integers'
  )

  defineInlineTest(
    RemoveGCTokens,
    {},
    'classes += "g-f2 mr4 g-ph2 bg-muted-1"',
    'classes += "f6 mr4 ph2 bg-muted-1"',
    'from interpolations'
  )

  defineInlineTest(
    RemoveGCTokens,
    {},
    'const classes = cond ? "g-f2 mr4 g-ph2 bg-muted-1" : "g-ph2"',
    'const classes = cond ? "f6 mr4 ph2 bg-muted-1" : "ph2"',
    'from conditional'
  )

  defineInlineTest(
    RemoveGCTokens,
    {},
    'const classes = `g-ph2 ${foo}`',
    'const classes = `ph2 ${foo}`',
    'from dynamic string'
  )
})
