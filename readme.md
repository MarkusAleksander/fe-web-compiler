#Front End Web Compiler

For compiling front end web assets

## Usage

Standard compile (using webpack.config.js):
```npm run build```
```npx webpack```
With a named config:
```npm run build --config webpack.config.js```
```npx webpack --config webpack.config.js```

Configs:
Development: webpack.dev.config.js
Production: webpack.config.js

Commands:
Development: npm run dev
Development watch: npm run start
Production: npm run build

## Details

Entry: src/index.js
Output: dist/[name].js

## Includes

### Banner
Production output includes text from ./banner

### HTML
Base HTML template /template.html

### JS
Development has ESLinting
Production uses terser

### CSS
CSS is compiled in JS and JS handles inserting onto page
CSS/SCSS compiling
SCSS -> postCSS

PostCSS
- hocus (compiles to :hover,:focus)
- autoprefixer
- ordering
- aspect-ratio
Adds new property for creating ratio boxes:
```CSS
aspect-ratio: '16:9';
```
Example:
```CSS
/* Input. */
.aspect-box {
  position: relative;
  background: lime;
  aspect-ratio: '16:9';
}

/* Output. */
.aspect-box {
  position: relative;
  background: lime;
  box-sizing: border-box;
}

.aspect-box > * /* This targets .aspect-box__content */ {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0; 
  left: 0; 
  box-sizing: border-box;
}

.aspect-box:before /* This pseudo element uses the padding trick to set the height. */ {
  position: relative;
  display: block;
  content: "";
  padding-top: 56.25%;
  box-sizing: border-box;
}
```