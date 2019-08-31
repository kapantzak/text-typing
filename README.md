[![npm version](https://badge.fury.io/js/text-typing.svg)](https://badge.fury.io/js/text-typing)

# text-typing
A tool for creating typwriter effect, with a simple, promise based api.

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

## Methods

## Events

## Changelog
