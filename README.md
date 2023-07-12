# js-color-gradient

js-color-gradient helps you get gradient colors for your web application.Like in table , list etc.It gives result in an array of colors.
It allows you to configure options like color, fromColor, toColor, style.
Currently it takes gradient steps based on the range provided.Like for range '0-20' gradient steps will be 20.

To build the examples locally with npm, run:

`npm install`
`npm start`

Then `localhost:3000` should open in a browser. If not you can go to that directly.

## Installation
To use js-color-gardient, install it from NPM with npm using the command:

`npm install --save js-color-gradient`

To use js-color-gradient, install it from yarn using the command:

`yarn add js-color-gradient`

[Demo link](https://kumarisoni.github.io/js-color-gradient/)

### Usage
To use this component, first import js-color-gradient:

`import {getColors} from 'js-color-gradient';`
and then provide it the options.

### ReactJS Example (Assuming Node and ReactJS app is already setup) :

```function App() {
  let options = [{
    style: 'gradient',
    range: '0-20',
    fromColor: '#8B0000',
    toColor: '#FFCCCB'
},
{
    style: 'gradient',
    range: '21-40',
    fromColor: '#8B8000',
    toColor: '#FFFFE0'
},
{
    style: 'gradient',
    range: '41-100',
    fromColor: '#0000ff',
    toColor: '#ADD8E6'
}];
let data = [{
        item: 'item1',
        count: 1,
        percentage: 1
    },
    {
        item: 'item2',
        count: 2,
        percentage: 2 
    },
    {
        item: 'item3',
        count: 3,
        percentage: 3
    },
    {
        item: 'item4',
        count: 4,
        percentage: 4
    },
    {
        item: 'item5',
        count: 5,
        percentage: 5
    },
    {
        item: 'item6',
        count: 6,
        percentage: 6
    },
    {
        item: 'item7',
        count: 7,
        percentage: 7
    },
    {
        item: 'item8',
        count: 8,
        percentage: 8
    },
    {
        item: 'item9',
        count: 9,
        percentage: 9
    },
    {
        item: 'item10',
        count: 10,
        percentage: 10
    }];
let gradientColorForTable = getColors(options);
let tableData = data;
  return (
    <div>
            <table>
                <thead>
                    <tr>
                        <td><h4>Item</h4></td>
                        <td><h4>Count</h4></td>
                        <td><h4>Percentage</h4></td>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((data, i) => (
                        <tr key={i+1}>
                            <td>
                                {data.item}
                            </td>
                            <td>
                                {data.count}
                            </td>
                            <td style={{ backgroundColor: gradientColorForTable[data.percentage]}}>
                                {data.percentage}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
  );
}

export default App;
```

## Options:

- style: 'gradient'->If you want gradient for the given range, 'constant'->If you don't want
gradient for the given range.
- range: range of the values .Ex '0-20','20-100' etc.
- color: if style is 'constant' the provide color.
- fromColor: if style is 'gradient' provide fromColor
- toColor: if style is 'gradient' provide toColor

### Example for options:
If style is 'gradient':

```options object should be in below format
{
    style: 'gradient',
    range: '0-20',
    fromColor: '#8B0000',
    toColor: '#FFCCCB'
}
```

If style is 'constant':

```options object should be in below format
{
    style: 'constant',
    range: '0-20',
    color: '#8B0000'
}
```

You can provide as many range as you want and style also can be given same or different as per the requirement.

You can take a look at the example given in [example folder](/example/). To run the React Example use `npm i` then `npm start`

### Contributing
Fork this repo, add your proposed features and make a pull request. I will review as soon as possible.

### License
This project is licensed under the terms of the MIT license. Check LICENSE.txt for more information.

### Keywords
[Javascript color gradient](/(https://www.npmjs.com/search?q=js-color-gradient)/)
