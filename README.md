[![npm version](https://badge.fury.io/js/text-typing.svg)](https://badge.fury.io/js/text-typing)

# text-typing
A tool for creating typewriter effect, with a simple, promise based api.

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

#### Chaining methods
You can call multiple methods on the same instance, either by using `await` (inside an `async` function), or by using `then` after a method call

##### await

    (async () => {      
      const txt = textTyping(elem);
      await txt.typeText("Hello");
	  await txt.backspace(2);
    })();

##### then

    (() => {
      const txt = textTyping(elem);
      txt.typeText("Hello").then(resp => {
        resp.backspace(2);
      });
    })();

## Options

### speed

The typing speed that is going to be used by called methods, if no specific speed is provided to the specific method.

If provided with a single number, the speed is going to be constant. An array of two numbers can be provided as the minimum (first number) and the maximum (second number) speed. In case of an array provided, the speed is going to be random in the specified range. 

* **type** `<number> | <number[]>`

* **optional** `true`

* **default** `[100, 500]`

### cursor

The cursor that is going to be displayed.

* **type** `<string>`

* **optional** `true`

* **default** `|`

## Methods

### typeText()
Start typing the specified text in the given speed (if speed is not provided, the options speed will be used)

##### Syntax
    txt.typeText(text[, className][, speed])

##### Parameters
- ***text*** `<string>`: The text to be typed
- ***className*** `<string>`: An optional class or set of classes to be applied (If you want to add multiple classes, separate them with space)
- ***speed*** *optional* `<number> | <number[]>`: The typing speed

##### Return value
- `Promise` 


### lineBreak()
Insert a line break

##### Syntax
    txt.lineBreak()

##### Parameters
`none`

##### Return value
- `Promise` 


### injectHTML()
Insert HTML element

##### Syntax
    txt.injectHTML(htmlElement[, speed])

##### Parameters
- ***htmlElement*** `<HTMLElement>`: The HTML element to be injected
- ***speed*** *optional* `<number> | <number[]>`: The delay of the element injection

##### Return value
- `Promise`


### delete()
Delete the specified amount of letters from the begining of the text

##### Syntax
    txt.delete(iterations[, speed])

##### Parameters
- ***iterations*** `<number>`: The amount of letters to be deleted
- ***speed*** *optional* `<number> | <number[]>`: The deletion speed

##### Return value
- `Promise`


### backspace()
Remove the specified amount of letters, starting from the end of the text

##### Syntax
    txt.backspace(iterations[, speed])

##### Parameters
- ***iterations*** `<number>`: The amount of letters to be removed
- ***speed*** *optional* `<number> | <number[]>`: The deletion speed

##### Return value
- `Promise`


### moveCursor()
Place the cursor either at the begining or at the end of the text

##### Syntax
    txt.moveCursor(point)

##### Parameters
- ***point*** `<string>`: The point at which the cursor will be placed. Possible values: `start` / `end` (*If any value other than `start` is provided, the cursor will be moved at the end of the text*)

##### Return value
- `Promise`


### sleep()
Stop the execution for the given time

##### Syntax
    txt.sleep(speed)

##### Parameters
- ***speed*** *optional* `<number> | <number[]>`: The time of pause in milliseconds

##### Return value
- `Promise`

## Changelog
Checkout the **[CHANGELOG](https://github.com/kapantzak/text-typing/blob/master/CHANGELOG.md "CHANGELOG")** file