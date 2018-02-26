### Styleguide

https://vtex-gocommerce.github.io/styleguide

### Setup

```sh
npm install
```

### Developing using Styleguidist

```sh
npm styleguide
```

### Developing using another project

Run this in this repo:

```sh
npm develop
```

In your project run:

```
npm link @gocommerce/styleguide
```

Import (case a `<Button>` component in lib):

```js
import { Button } from '@gocommerce/styleguide'
```

### Publishing Styleguide page

```sh
npm deploy
```

#### Known issues

Your project has to run with webpack >= 2. Here's a [guide](https://webpack.js.org/guides/migrating/) for upgrading Webpack to v2.
