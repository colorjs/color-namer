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
var namer = require('color-namer')
var names = namer("#FF0000")
```

The function returns an array of colors objects, sorted by proximity in the [L*a*b* color space](http://en.wikipedia.org/wiki/Lab_color_space):

```js
[
  { name: 'red',
    hex: '#FF0000',
    distance: 0
  },{
    name: 'orangered',
    hex: '#FF4500',
    distance: 13.170205025755513
  },{
    name: 'tomato',
    hex: '#FF6347',
    distance: 31.733444038510665
  },{
    name: 'crimson',
    hex: '#DC143C',
    distance: 35.38084849496472
  },{
    name: 'firebrick',
    hex: '#B22222',
    distance: 40.71076805218006
  },{
    name: 'coral',
    hex: '#FF7F50',
    distance: 42.340752375722616
  },{
    name: 'chocolate',
    hex: '#D2691E',
    distance: 44.378454180212145
  }
]
```

## Sets

By default, names are chosen from a small set of [basic colors](/lib/basic-colors.js).

```js
// These are equivalent:
namer("#FF0000")
namer("#FF0000", 'basic')
```

To use the [HTML color names](/lib/html-colors.js):

```js
namer("#FF0000", 'html')
```

Or good ol' [ROYGBIV](http://en.wikipedia.org/wiki/Roy_G._Biv):

```js
namer("#FF0000", 'roygbiv')
```

Or bring your own name data:

```js
namer("#FF0000", [
  { name: 'black', hex: '#000' },
  { name: 'white', hex: '#FFF' }
])
```

## Tests

```
npm install
npm test
```

## License

[WTFPL](http://wtfpl.org/)
