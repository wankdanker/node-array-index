var index = require('./');
var start, end, iterations;
var data = [
	  { id : 1, name : 'Dan', sex : 'male' }
	, { id : 2, name : 'Sam', sex : 'female' }
	, { id : 3, name : 'Pat', sex : 'female' }
	, { id : 4, name : 'Jon', sex : 'male' }
	, { id : 5, name : 'Dug', sex : 'male' }
	, { id : 2, name : 'Sam', sex : 'female' }
	, { id : 3, name : 'Pat', sex : 'female' }
	, { id : 4, name : 'Jon', sex : 'male' }
	, { id : 5, name : 'Dug', sex : 'male' }
	, { id : 2, name : 'Sam', sex : 'female' }
	, { id : 3, name : 'Pat', sex : 'female' }
	, { id : 4, name : 'Jon', sex : 'male' }
	, { id : 5, name : 'Dug', sex : 'male' }
	, { id : 2, name : 'Sam', sex : 'female' }
	, { id : 3, name : 'Pat', sex : 'female' }
	, { id : 4, name : 'Jon', sex : 'male' }
	, { id : 5, name : 'Dug', sex : 'male' }
];

iterations = 1000;

start = +new Date();
for (var x = 0; x < iterations; x ++) {
	index(data, ['id', 'name', 'sex']);
}
end = +new Date();

console.log("index with list \t: %sms, %d indexes / sec", end - start, Math.round((iterations / (end - start)) * 1000));

start = +new Date();
for (var x = 0; x < iterations; x ++) {
	index(data);
}
end = +new Date();

console.log("index without list \t: %sms, %d indexes / sec", end - start, Math.round((iterations / (end - start)) * 1000));