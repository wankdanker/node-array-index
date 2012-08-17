var index = require('./');

var data = [
	  { id : 1, name : 'Dan', sex : 'male' }
	, { id : 2, name : 'Sam', sex : 'female' }
	, { id : 3, name : 'Pat', sex : 'female' }
	, { id : 4, name : 'Jon', sex : 'male' }
	, { id : 5, name : 'Dug', sex : 'male' }
];

module.exports = {
	"test data array with field list array " : function (test) {
		test.deepEqual(
			index(data, ['sex'])
			, { sex: 
				{ male: 
					[ { id: 1, name: 'Dan', sex: 'male' },
						{ id: 4, name: 'Jon', sex: 'male' },
						{ id: 5, name: 'Dug', sex: 'male' } ],
					female: 
					[ { id: 2, name: 'Sam', sex: 'female' },
						{ id: 3, name: 'Pat', sex: 'female' } ] } }
		);
		
		test.done();
	}
	, "test data array with field string " : function (test) {
		test.deepEqual(
			index(data, 'sex')
			, { sex: 
				{ male: 
					[ { id: 1, name: 'Dan', sex: 'male' },
						{ id: 4, name: 'Jon', sex: 'male' },
						{ id: 5, name: 'Dug', sex: 'male' } ],
					female: 
					[ { id: 2, name: 'Sam', sex: 'female' },
						{ id: 3, name: 'Pat', sex: 'female' } ] } }
		);
		
		test.done();
	}
	, "test data array, index all fields" : function (test) {
		test.deepEqual(
			index(data)
			, { id: 
				{ '1': [ { id: 1, name: 'Dan', sex: 'male' } ],
					'2': [ { id: 2, name: 'Sam', sex: 'female' } ],
					'3': [ { id: 3, name: 'Pat', sex: 'female' } ],
					'4': [ { id: 4, name: 'Jon', sex: 'male' } ],
					'5': [ { id: 5, name: 'Dug', sex: 'male' } ] },
				name: 
				{ Dan: [ { id: 1, name: 'Dan', sex: 'male' } ],
					Sam: [ { id: 2, name: 'Sam', sex: 'female' } ],
					Pat: [ { id: 3, name: 'Pat', sex: 'female' } ],
					Jon: [ { id: 4, name: 'Jon', sex: 'male' } ],
					Dug: [ { id: 5, name: 'Dug', sex: 'male' } ] },
				sex: 
				{ male: 
					[ { id: 1, name: 'Dan', sex: 'male' },
						{ id: 4, name: 'Jon', sex: 'male' },
						{ id: 5, name: 'Dug', sex: 'male' } ],
					female: 
					[ { id: 2, name: 'Sam', sex: 'female' },
						{ id: 3, name: 'Pat', sex: 'female' } ] } }
		);
		
		test.done();
	}
};
