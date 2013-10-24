# Color Namer

> Give me a color and I'll name it.

Color Namer is a node module that calculates color distance using the
[Delta-E](http://www.colorwiki.com/wiki/Delta_E%3a_The_Color_Difference) color difference technique. Given a color
in [some format](https://github.com/gka/chroma.js/blob/master/doc/api.md#chromaa-b-c-a-mode) like RGB, HSL, or HSV, it uses the awesome [chroma-js](https://npmjs.org/package/chroma-js)
node module to convert the color to the [L*a*b* color space](http://en.wikipedia.org/wiki/Lab_color_space),
then calculates the color's
[Euclidean distance](https://npmjs.org/package/euclidean-distance) from a set of colors with
known names.

## Installation

```
npm install color-namer --save
```

## Usage

Easy peasy:

```js
var namer = require('color-namer');
var names = namer("#FF0000");
```

The function returns an array of colors, sorted by proximity:

```js
[
  { name: 'red',
    hex: '#FF0000',
    distance: 0 },
  { name: 'orangered',
    hex: '#FF4500',
    distance: 13.170205025755513 },
  { name: 'tomato',
    hex: '#FF6347',
    distance: 31.733444038510665 },
  { name: 'crimson',
    hex: '#DC143C',
    distance: 35.38084849496472 },
  { name: 'firebrick',
    hex: '#B22222',
    distance: 40.71076805218006 },
  { name: 'coral',
    hex: '#FF7F50',
    distance: 42.340752375722616 },
  { name: 'chocolate',
    hex: '#D2691E',
    distance: 44.378454180212145 },
  { name: 'darkred',
    hex: '#8B0000',
    distance: 46.37258642138143 },
  { name: 'darkorange',
    hex: '#FF8C00',
    distance: 46.9522874117045 },
  { name: 'brown',
    hex: '#A52A2A',
    distance: 50.15162168414592 },
  { name: 'maroon',
    hex: '#800000',
    distance: 51.42076545740547 },
  { name: 'salmon',
    hex: '#FA8072',
    distance: 53.52177627659905 },
  "... et cetera"
]
```

## Tests

```
npm test

✓ is a function
✓ returns an array of candidates with distance values
✓ defaults to HTML color candidates
✓ accepts custom color candidates
✓ validates format of custom candidates
✓ matches inexact colors
✓ matches exact colors
✓ accepts hex strings that include a hash symbol
✓ accepts non-hex input formats
```

## License

[WTFPL](http://wtfpl.org/)