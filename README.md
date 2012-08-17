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

We can create an index for a specific 'column', in this case, 'name':

```javascript
var idx = index(ary, 'name');

/*
idx = {

}
*/

```
