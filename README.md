[![Build Status](https://travis-ci.org/stevelacy/duh.png?branch=master)](https://travis-ci.org/stevelacy/duh)

[![NPM version](https://badge.fury.io/js/duh.png)](http://badge.fury.io/js/duh)

#duh

<table>
<tr> 
<td>Package</td><td>duh</td>
</tr>
<tr>
<td>Description</td>
<td>What were you thinking?</td>
</tr>
<tr>
<td>Node Version</td>
<td>>= 0.9</td>
</tr>
</table>

## Usage

` npm i duh --save`

## Example

```js

var me = 'human';

if(me == 'human'){
  duh();
}


var test = function(){
  if(1 != 2){
    console.log(duh());
  }
};


// With arguments
var check = function(){
  if(me != 'cat'){
    console.log(duh('doge'));
  }
};


```

You can view more examples in the [example folder.](https://github.com/stevelacy/duh/tree/master/examples)



## API

### Options

`duh(String argument)`

`type: String`

`returns: String + argument`

```js

duh('doge');

```

##### Returns `duh doge`


## Testing

` npm test`

^^ Epic testing there :)


## LICENSE

(MIT License)

Copyright (c) 2013 Steve Lacy - slacy.me <me@slacy.me>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
