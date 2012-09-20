var index = require('./');

var data = [
	  { id : 1, name : 'Dan', sex : 'male', child : { a : 1 } }
	, { id : 2, name : 'Sam', sex : 'female', child : { a : 2 } }
	, { id : 3, name : 'Pat', sex : 'female', child : { a : 3 } }
	, { id : 4, name : 'Jon', sex : 'male', child : { a : 1 } }
	, { id : 5, name : 'Dug', sex : 'male', child : { a : 2 } }
];

module.exports = {
	"test data array with field list array " : function (test) {
		test.deepEqual(
			index(data, ['sex'])
			, { 
				sex: {
					male: [ 
						{ id: 1, name: 'Dan', sex: 'male', child : { a : 1 } }
						, { id: 4, name: 'Jon', sex: 'male', child : { a : 1 } }
						, { id: 5, name: 'Dug', sex: 'male', child : { a : 2 } }
					]
					, female: [ 
						{ id: 2, name: 'Sam', sex: 'female', child : { a : 2 } }
						, { id: 3, name: 'Pat', sex: 'female', child : { a : 3 } } 
					] 
				} 
			}
		);
		
		test.done();
	}
	, "test data array with field string " : function (test) {
		test.deepEqual(
			index(data, 'sex')
			, { 
				sex : {
					male: [ 
						{ id: 1, name: 'Dan', sex: 'male', child : { a : 1 } }
						, { id: 4, name: 'Jon', sex: 'male', child : { a : 1 } }
						, { id: 5, name: 'Dug', sex: 'male', child : { a : 2 } }
					]
					, female: [ 
						{ id: 2, name: 'Sam', sex: 'female', child : { a : 2 } }
						, { id: 3, name: 'Pat', sex: 'female', child : { a : 3 } } 
					] 
				} 
			}
		);
		
		test.done();
	}
	, "test data array, index all fields" : function (test) {
		test.deepEqual(
			index(data)
			, { id: { 
					'1': [ { id: 1, name: 'Dan', sex: 'male', child : { a : 1 } } ]
					, '2': [ { id: 2, name: 'Sam', sex: 'female', child : { a : 2 } } ]
					, '3': [ { id: 3, name: 'Pat', sex: 'female', child : { a : 3 } } ]
					, '4': [ { id: 4, name: 'Jon', sex: 'male', child : { a : 1 } } ]
					, '5': [ { id: 5, name: 'Dug', sex: 'male', child : { a : 2 } } ] 
				}
				, name: { 
					Dan: [ { id: 1, name: 'Dan', sex: 'male', child : { a : 1 } } ]
					, Sam: [ { id: 2, name: 'Sam', sex: 'female', child : { a : 2 } } ]
					, Pat: [ { id: 3, name: 'Pat', sex: 'female', child : { a : 3 } } ]
					, Jon: [ { id: 4, name: 'Jon', sex: 'male', child : { a : 1 } } ]
					, Dug: [ { id: 5, name: 'Dug', sex: 'male', child : { a : 2 } } ] 
				}
				, sex: {
					male: [ 
						{ id: 1, name: 'Dan', sex: 'male', child : { a : 1 } }
						, { id: 4, name: 'Jon', sex: 'male', child : { a : 1 } }
						, { id: 5, name: 'Dug', sex: 'male', child : { a : 2 } }
					]
					, female: [ 
						{ id: 2, name: 'Sam', sex: 'female', child : { a : 2 } }
						, { id: 3, name: 'Pat', sex: 'female', child : { a : 3 } } 
					] 
				}
			}
		);
		
		test.done();
	}
	, "test data array, index single deep field" : function (test) {
		test.deepEqual(
			index(data, 'child.a')
			, { 'child.a' : 
				{ 
					1: [ 
						{ id: 1, name: 'Dan', sex: 'male', child : { a : 1 } }
						, { id: 4, name: 'Jon', sex: 'male', child : { a : 1 } }
					]
					, 2 : [
						{ id: 2, name: 'Sam', sex: 'female', child : { a : 2 } }
						, { id: 5, name: 'Dug', sex: 'male', child : { a : 2 } } 
					]
					, 3 : [
						{ id: 3, name: 'Pat', sex: 'female', child : { a : 3 } } 
					] 
				}
			}
		);
		
		test.done();
	}
};
