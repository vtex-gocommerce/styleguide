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

### Generating React icons by svg files

All svg icons should to be at 'icons-svg' folder.
The components will be generated with the name of this svg.

eg. svg with the name eye.svg and eye-flash.svg will be converted to IconEye and IconEyeFlash.
The Icons will be created at folder react/icons.
To generate, run the following command:

```sh
npm run gen-icons
```

This command will also will run "npm run entrypoints".

Warning: There is files at react/icons thats not automatically generated. They can not be removed:

- colors.js
- icons.md
- \*.style.css

The pattern of react component can be found at /scripts/utils/iconComponentLayout.js

The script generator is based in the svg pattern bellow. If the svg file is different of this pattern, the script will be need edited:

```
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><defs><style>.cls-1{fill:#fff;}.cls-2{fill:#1e2535;}</style></defs><title>align-center</title><g id="BG"><rect class="cls-1" width="18" height="18"/></g><g id="Icons"><path class="cls-2" d="M12,4H6V2h6Zm4.5,2H1.5V8h15ZM13,10H5v2h8Zm2,4H3v2H15Z"/></g></svg>
```

**_What the script does:_**

Get the content of svg, wich is all elements inside \<g id="Icons">;

Then remove class attribute and put fill attribute;
Generate react component based in the svg name;

### Publish new version at Render APP

First of all, increase the version at Manifest.json.
Run the command below if you created a new component.

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
