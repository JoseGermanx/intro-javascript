# Solution for HTML Demo.

## index.html
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>replit</title>
    <link href="style.css" rel="stylesheet" type="text/css" />
  </head>

  <body>
    <h1 id="hello">Hello world!</h1>
    <h2>Hello world!</h2>
    <img src="./Burger4.svg" />

    <script src="script.js"></script>

    <!--
  This script places a badge on your repl's full-browser view back to your repl's cover
  page. Try various colors for the theme: dark, light, red, orange, yellow, lime, green,
  teal, blue, blurple, magenta, pink!
  -->
    <script
      src="https://replit.com/public/js/replit-badge-v2.js"
      theme="dark"
      position="bottom-right"
    ></script>
  </body>
</html>
```

# Solution for CSS Demo

## index.html
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>replit</title>
    <link href="style.css" rel="stylesheet" type="text/css" />
  </head>

  <body>
    <h1 id="hello">Hello world!</h1>
    <h1 class="hi">Hello world!</h1>
    <h1 class="hi">Hello world!</h1>
    <h1>Hello world!</h1>
    <h1>Hello world!</h1>
    <h2>Hello world!</h2>
    <img src="./Burger4.svg" />

    <script src="script.js"></script>

    <!--
  This script places a badge on your repl's full-browser view back to your repl's cover
  page. Try various colors for the theme: dark, light, red, orange, yellow, lime, green,
  teal, blue, blurple, magenta, pink!
  -->
    <script
      src="https://replit.com/public/js/replit-badge-v2.js"
      theme="dark"
      position="bottom-right"
    ></script>
  </body>
</html>
```

## Style.css
```
html {
  height: 100%;
  width: 100%;
}

h1 {
  color: blue;
}

.hi {
  color: green;
}

#hello {
  color: red;
}

```

# Solution for JavaScript Demo

## index.html
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>replit</title>
    <link href="style.css" rel="stylesheet" type="text/css" />
  </head>

  <body>
    <h1 id="hello">Hello world!</h1>
    <h1 class="hi">Hello world!</h1>
    <h1 class="hi">Hello world!</h1>
    <h1>Hello world!</h1>
    <h1>Hello world!</h1>
    <h2>Hello world!</h2>
    <img src="./Burger4.svg" />

    <script src="script.js"></script>

    <!--
  This script places a badge on your repl's full-browser view back to your repl's cover
  page. Try various colors for the theme: dark, light, red, orange, yellow, lime, green,
  teal, blue, blurple, magenta, pink!
  -->
    <script
      src="https://replit.com/public/js/replit-badge-v2.js"
      theme="dark"
      position="bottom-right"
    ></script>
  </body>
</html>
```
## style.css
```
html {
  height: 100%;
  width: 100%;
}

.hi {
  color: green;
}

#hello {
  color: red;
}

```
## script.js
```
document.getElementById("hello").innerHTML = "bye";
document.getElementById("hello").innerHTML = "goodbye";
document.getElementById("hello").style.color = "blue";
document.body.style.backgroundColor = "pink";

```