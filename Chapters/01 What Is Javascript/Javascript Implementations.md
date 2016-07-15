# Javascript Implementations #

* JavaScript != ECMAScript
* JavaScript is made up of:
  * ECMAScript
  * DOM (Document Object Model)
  * BOM (Browser Object Model)

## ECMAScript ##

* The ECMA-262 Standard
* Not tied to web browsers, can be hosted in other environments
* Extensions (e.g. DOM and BOM) use ECMAScript core types and syntax that's environment-specific
* Other environments, e.g. NodeJS (server), React Native


* ECMAScript specifies:
  * Syntax
  * Types
  * Statements
  * Keywords
  * Reserved Words
  * Operators
  * Objects

ECMAScript 3.1 became ECMA-262, fifth edition. Published Dec 2009. AKA "ES5"

## The Document Object Model (DOM) ##

* The DOM is an API. It maps out the entire HTML page as a hierarchy of nodes, and provides methods to manipulate these nodes

e.g. this:
```
<html>
    <head>
        <title>Sample Page</title>
    </head>
    <body>
        <p>Hello World!</p>
    </body>
</html>
```
becomes

```
-html
 -head
  -title
   -Sample Page
 -body
  -p
   -Hello World!
```

### DOM Levels ###

* DOM Level 0
  * Not a true standard
  * Refers to DHTML (Dynamic HTML) supported in IE4 and Netscape Navigator 4.0
* DOM Level 1
  * DOM Core - Map structure of an XML document for easy access and manipulation
  * DOM HTML - Extended DOM Core by adding HTML-specific objects and methods
* DOM Level 2
  * DOM Views - views of the document before and after styling
  * DOM Events - mouse and UI event
  * DOM Style - CSS
  * DOM Traversal and Range - traverse/manipulate document tree
* DOM Level 3
  * DOM Load and Save - standardized load and save
  * DOM Validation - document validation
  * Also extend DOM Core to support all of XML 1.0 (e.g. XML Infoset, XPath, and XML Base)

### Other DOMs ###

* SVG (Scalable Vector Graphics)
* MathML (Mathematical Markup Language)
* SMIL (Synchronized Multimedia Integration Language)

## The Browser Object Model (BOM) ##

* Access and manipulation of the browser window
* HTML5 brought standards to the BOM\

Examples
* New browser window
* Move/resize/close browser window
* `navigator` object to provide browser info
* `location` object to provide page info
* `screen` object to provide display info
* Cookies
* Custom objects, e.g. XMLHttpRequest, ActiveXObject
