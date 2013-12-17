# [jQuery-ObjectValidate](http://danmmx.github.io/jQuery-ObjectValidate/) #
jQuery plugin for custom validation.

## Usage ##

### Script ###
```
$("form").objectValidate()
```

Returns an array object cointaining the element failing the validation on the first position, and a message on the second position.

### HTML ###
```
<form>
  <label for="name">User Name</label>
  <input id="name" data-object-validate="textEmpty"/>
</form>
```

## Requirements ##

### Label ###
If provided, the label's element attribute `for` should be the same as the input's element attribute `id`.

### Input ###
Can be any form input tag like `input`, `textarea`, etc... 
Should have the `data-object-validate` attribute mentioning the kind of validation that must match (just one).
If more than one validation provided, it'll execute just the first found.

Available validations:
* empty
* data
* text
* phrase
* num
* float
* weight

Should I explain all of them?
Weight is a personal purpose validation, checks that the element value matches ddd.ddd.

Any of them but empty, checks if the element value is "". For that purpose, append Empty to the wished validation, like `textEmpty`, `numEmpty`, etc.


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/DanMMX/jquery-objectvalidate/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

