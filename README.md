![](https://user-images.githubusercontent.com/970858/63474771-d6734700-c469-11e9-83bb-9429da563909.png)

# JS INTRODUCTION

## Introduction

> ***Note:*** _This can be a pair programming activity or done independently._

Welcome to your first JavaScript lab. This lab will help you practice some of the fundamentals of JavaScript, such as numbers, strings, conditionals & loops!

## Initial Setup

#### Local Setup
- Create a `~/code` folder (inside your home folder)
- Inside that folder, create a `labs` folder  (ie. `~/code/labs`)

#### Fork The Repository
- Now go to github and click the `fork button` to create a copy of this repository in your personal account

#### Clone To Local
- Go to your fork: `https://github.com/<your_github_id>/LAB-JS_Introduction`
- Click the `clone or download` button and copy the git link into your clipboard
- In iterm under the directory `~/code/labs` enter:
```
$ git clone https://github.com/<your_github_id>/LAB-JS_Introduction.git
```

- Then enter the repository you cloned: `$ cd LAB-JS_Introduction`
- Open the current folder in Visual Studio: `$ code .`

## Exercise

You have 3 iterations to do today. Each iteration is within a folder `iterations` that contains two files: `index.html` and `script.js`.

The HTML file simply loads the JavaScript file where you will code your solution code.

```html
<!DOCTYPE html>
<html>
  <body>
    <script src="script.js"></script>
  </body>
</html>
```

Your `script.js` Javascript file contains a sample code that you will have to modify. It showcases the use of the [prompt](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt) method, that allows you to read a value from a window.

```js
// Your Solution code goes here

var test = window.prompt("type something here")
console.log(test)
```

To test that it works, you will have to open your `index.html` in a browser. A very handy way of doing it is by typing in iterm, inside the `iterations` folder:

```
$ open index.html
```

And then open your [Google Chrome Developer Tools](https://developers.google.com/web/tools/chrome-devtools/) to see the `console.log` output.

Try it out and when you have checked that it works, you can delete the provided code in `script.js`

#### Iteration 1: Basic Input/Output & Conditionals

1. Read the name of `driver`
1. Read the name of `navigator`
1. Print `The driver's name is XXXX`
1. Print `The navigator's name is YYYY`
1. Depending on which name is longer, print:
  - `The Driver has the longest name, it has XX characters` or
  - `Yo, navigator got the longest name, it has XX characters` or
  - `Wow, you both got equally long names, XX characters!`

#### Iteration 2: String Loops
1. Print all the characters of the driver's name, separated by a space.
```
"m i c h a e l"
```

2. Print all the characters of the driver's name, separated by a dash and ending with an exclamation mark!
```
"m-i-c-h-a-e-l!"
```

3. Print all the characters of the navigator's name, in reverse order and [UpperCase](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
```
"L E A H C I M"
```

#### Iteration 3: Number Conditionals & Loops

1. Write a loop that will print all the numbers from 1-20
1. Write a loop that will print all ODD the numbers smaller than 128 that are divisible by 3, but not divisible by 5.
1. Write a loop that will write all the [powers of 2](https://www.varsitytutors.com/hotmath/hotmath_help/topics/exponent-tables-and-patterns) from 2^1 (2) to 2^10 (1024)
```
2 ^ 1 = 1
2 ^ 2 = 4
...
2 ^ 10 = 1024
```

#### Iteration 4: Bonus Time!
Go to [lorem ipsum generator](https://loremipsum.io) and:

1. Generate 3 paragraphs. Store the text in a `lorem` variable
1. Make your program count the number of words in the `lorem`
1. Make your program count the number of times the Latin word `et` appears in `lorem`


## How to Submit
In iTerm under `~/code/labs/LAB-JS_Introduction` enter the following commands

```
git add .
git commit -m "done"
git push origin master
```

Send the link of your github repository through Slack