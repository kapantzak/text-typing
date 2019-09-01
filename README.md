[![npm version](https://badge.fury.io/js/text-typing.svg)](https://badge.fury.io/js/text-typing)

# text-typing
A tool for creating typwriter effect, with a simple, promise based api.

![text-typing gif](img/text-typing.gif?raw=true "text-typing")

## Installation

Install npm package

#### npm

    npm install text-typing

#### yarn

    yarn add text-typing

And then import the package

    import {textTyping} from "text-typing";

## Usage

All you need to do is to initialize the tool, passing a reference to an existing DOM element, and start typing!

#### HTML

    <h1 id="myHeading"></h1>

#### JS

    (async () => {      
      const txt = textTyping(document.getElementById("myHeading"));
      await txt.typeText("Hello");
    })();    

## Options

### - speed

The typing speed that is going to be used by called methods, if no specific speed is provided to the specific method.

If provided with a single number, the speed is going to be constant. An array of two numbers can be provided as the minimum (first number) and the maximum (second number) speed. In case of an array provided, the speed is going to be random in the specified range. 

##### type
`<number> | <number[]>`

##### optional
`true`

##### default
`[100, 500]`

### - cursor

The cursor that is going to be displayed.

##### type
`<string>`

##### optional
`true`

##### default
`|`

## Methods

### typeText()
Start typing the specified text in the given speed (if speed is not provided, the options speed will be used)

##### Syntax
    txt.typeText(text[, speed])

##### Parameters
- ***text*** `<string>`: The text to be typed
- ***speed*** *optional* `<number> | <number[]>`: The typing speed

##### Return value
- `Promise` 

## Events

## Changelog
Checkout the **[CHANGELOG](https://github.com/kapantzak/text-typing/blob/master/CHANGELOG.md "CHANGELOG")** file