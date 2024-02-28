## Name

Helperror


## Author

@mkagh


## Installation

npm install helperror


## Get Started

```javascript
const express = require('express');
const helperror = require('helperror');

// Use Helperror!
helperror()

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(5000);
```

## Description

This module is used for logging errors in order not to make the same error next time or to know how to solve it if you make it.

First you need to download it in your project by npm install helperror command.
Then you place it as soon as you can in your main file( see Get Started section).

When some uncaught error happens in your code you will be asked in the console 
"Would you like to write down this error:yes/no".
If you write "yes" you will be asked to enter you observation about that and then that goes to myError.txt file that will be created for you. If you write "no" or anything else error will not be logged.

 ADVICE:
  When you make an error first time you probably won't know anything about it so maybe you should make the same error on purpose later(when you find out how to solve it) in order to log it.