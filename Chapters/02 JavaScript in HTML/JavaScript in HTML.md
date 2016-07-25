# JavaScript in HTML #

## The \<script> Element ##

Attributes (the useful ones)

* async - see below
* defer - see below 
* src -  the URL or path of the external script file, e.g. `src='MyScripts/myscript.js'`
* type - usually set like `type='text/javascript'` but can just be omitted, as this is the default

[A useful link for explaining defer and async](http://peter.sh/experiments/asynchronous-and-deferred-javascript-execution-explained/)

## Inline Script ##

```
<html>
...
<body>
    <script>
        alert("I'm a script!");
    </script>
</body>
</html>

```

## External Script ##

```
<html>
<head>
    ...
    <script src="externalscript.js"></script>
</head>
<body>
    ...
</body>
</html>
```

## Tag Placement ##

### In the Head Element (Not Recommended) ###

Scripts placed in the head element must be downloaded, parsed, and interpreted before 

```
<html>
<head>
    ...
    <script src="script1.js"></script>
    <script src="script2.js"></script>
</head>
<body>
    ...
</body>
</html>
```

### End of the Body (Recommended) ###

Page completely renders before the scripts are processed

```
<html>
...
<body>
    ...
    <script src="script1.js"></script>
    <script src="script2.js"></script>
</body>
</html>
```

## Deferred Scripts ##

 * defer - set like `<script src='...' defer></script>`
 * Indicate that the script won't change page structure as it executes
 * Safe to run script after entire page is parsed
 * Downloaded immediately
 * HTML 5 specifies that they should be executed in order, before DOMContentLoaded (older browsers might not)
 * External scripts only
 

## Asynchronous Scripts ##

* async - set like `<script src='...' async></script>`. 
 * Causes script to download immediately without blocking other 
page loading activities. However, load order is not guaranteed.
* Refers to asynchronous EXECUTION
* Execution order is not guaranteed (so be careful with dependencies)

## Document Modes ##

* Use `<!DOCTYPE html>` for HTML 5

```
<!DOCTYPE html>
<html>
...
</html>
```

## `<noscript>` Element ##

Wrap elements to be displayed if JavaScript is disabled/unavailable

```
<html>
...
<body>
    <noscript>You ain't got no javascript</noscript>
    <script>alert("You've got Javascript!");</script>
</body>
</html>
```