node-array-index
----------------

Create indexes based on arrays of objects. 


example
-------

Given the following array of objects:

```javascript
var ary = [
	  { id : 1, company_id : 2, name : "Steve" }
	, { id : 2, company_id : 1, name : "Mary" }
	, { id : 3, company_id : 3, name : "James" }
	, { id : 4, company_id : 2, name : "Bob" }
	, { id : 5, company_id : 1, name : "Dave" }
	, { id : 6, company_id : 1, name : "Sue" }
	, { id : 7, company_id : 3, name : "Larin" }
	, { id : 8, company_id : 1, name : "Lisa" }
	, { id : 9, company_id : 1, name : "Gina" }
]
```

We can create an index for a specific 'column', in this case, 'company_id':

```javascript
var idx = index(ary, 'company_id');
```

and idx will be:

```javascript
{
	company_id: {
		'1':[
			{ id: 2, company_id: 1, name: 'Mary' },
			{ id: 5, company_id: 1, name: 'Dave' },
			{ id: 6, company_id: 1, name: 'Sue' },
			{ id: 8, company_id: 1, name: 'Lisa' },
			{ id: 9, company_id: 1, name: 'Gina' }
		],
		'2': [
			{ id: 1, company_id: 2, name: 'Steve' },
			{ id: 4, company_id: 2, name: 'Bob' }
		],
		'3':[
			{ id: 3, company_id: 3, name: 'James' },
			{ id: 7, company_id: 3, name: 'Larin' }
		]
	}
}

```

We can also specify multiple columns to index by passing an array:

```javascript
var idx = index(ary, ['company_id', 'name']);
```

Or if we don't specify any 'column' list, every field encountered will be indexed:

```javascript
var idx = index(ary);
```


license
----------

### The MIT License (MIT)


Copyright (c) 2012 Daniel L. VerWeire

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
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.