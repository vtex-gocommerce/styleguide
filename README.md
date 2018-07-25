### Styleguide

https://vtex-gocommerce.github.io/styleguide

### Setup

```sh
git clone https://github.com/vtex-gocommerce/styleguide.git
cd styleguide
npm install
```

### Developing using Styleguidist

Start the server with:

```sh
npm run styleguide
```

### Publish new version at Render APP

Run the command below if you created a new component

```sh
npm run entrypoints
```

Link to see results

```sh
vtex link
```

Publish when finished

```sh
vtex switch gocommerce
vtex publish
```

### Publish new version at NPM with Releasy

```sh
npm run compile
git commit -a
releasy --stable
npm publish
```

### Publishing Styleguide page on Github

```sh
npm run styleguide:build
npm run github
```
