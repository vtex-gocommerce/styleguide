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

### Publish new version with Releasy

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
