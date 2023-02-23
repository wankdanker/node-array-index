var index = require('./');

var data = [
	{ id: 1, name: 'Dan', sex: 'male', child: { a: 1 }, colors: ['red', 'green'] }
	, { id: 2, name: 'Sam', sex: 'female', child: { a: 2 }, colors: ['brown', 'orange'] }
	, { id: 3, name: 'Pat', sex: 'female', child: { a: 3 }, colors: ['yellow', 'blue'] }
	, { id: 4, name: 'Jon', sex: 'male', child: { a: 1 }, colors: ['black', 'orange'] }
	, { id: 5, name: 'Dug', sex: 'male', child: { a: 2 }, colors: ['blue', 'brown'] }
];

module.exports = {
	"test data array with field list array ": function (test) {
		test.deepEqual(
			index(data, ['sex'])
			, {
				sex: {
					male: [
						{ id: 1, name: 'Dan', sex: 'male', child: { a: 1 }, colors: ['red', 'green'] }
						, { id: 4, name: 'Jon', sex: 'male', child: { a: 1 }, colors: ['black', 'orange'] }
						, { id: 5, name: 'Dug', sex: 'male', child: { a: 2 }, colors: ['blue', 'brown'] }
					]
					, female: [
						{ id: 2, name: 'Sam', sex: 'female', child: { a: 2 }, colors: ['brown', 'orange'] }
						, { id: 3, name: 'Pat', sex: 'female', child: { a: 3 }, colors: ['yellow', 'blue'] }
					]
				}
			}
		);

		test.done();
	}
	, "test data array with field string ": function (test) {
		test.deepEqual(
			index(data, 'sex')
			, {
				sex: {
					male: [
						{ id: 1, name: 'Dan', sex: 'male', child: { a: 1 }, colors: ['red', 'green'] }
						, { id: 4, name: 'Jon', sex: 'male', child: { a: 1 }, colors: ['black', 'orange'] }
						, { id: 5, name: 'Dug', sex: 'male', child: { a: 2 }, colors: ['blue', 'brown'] }
					]
					, female: [
						{ id: 2, name: 'Sam', sex: 'female', child: { a: 2 }, colors: ['brown', 'orange'] }
						, { id: 3, name: 'Pat', sex: 'female', child: { a: 3 }, colors: ['yellow', 'blue'] }
					]
				}
			}
		);

		test.done();
	}
	, "test data array, index all fields": function (test) {
		test.deepEqual(
			index(data)
			, {
				id: {
					'1': [{ id: 1, name: 'Dan', sex: 'male', child: { a: 1 }, colors: ['red', 'green'] }]
					, '2': [{ id: 2, name: 'Sam', sex: 'female', child: { a: 2 }, colors: ['brown', 'orange'] }]
					, '3': [{ id: 3, name: 'Pat', sex: 'female', child: { a: 3 }, colors: ['yellow', 'blue'] }]
					, '4': [{ id: 4, name: 'Jon', sex: 'male', child: { a: 1 }, colors: ['black', 'orange'] }]
					, '5': [{ id: 5, name: 'Dug', sex: 'male', child: { a: 2 }, colors: ['blue', 'brown'] }]
				}
				, name: {
					Dan: [{ id: 1, name: 'Dan', sex: 'male', child: { a: 1 }, colors: ['red', 'green'] }]
					, Sam: [{ id: 2, name: 'Sam', sex: 'female', child: { a: 2 }, colors: ['brown', 'orange'] }]
					, Pat: [{ id: 3, name: 'Pat', sex: 'female', child: { a: 3 }, colors: ['yellow', 'blue'] }]
					, Jon: [{ id: 4, name: 'Jon', sex: 'male', child: { a: 1 }, colors: ['black', 'orange'] }]
					, Dug: [{ id: 5, name: 'Dug', sex: 'male', child: { a: 2 }, colors: ['blue', 'brown'] }]
				}
				, sex: {
					male: [
						{ id: 1, name: 'Dan', sex: 'male', child: { a: 1 }, colors: ['red', 'green'] }
						, { id: 4, name: 'Jon', sex: 'male', child: { a: 1 }, colors: ['black', 'orange'] }
						, { id: 5, name: 'Dug', sex: 'male', child: { a: 2 }, colors: ['blue', 'brown'] }
					]
					, female: [
						{ id: 2, name: 'Sam', sex: 'female', child: { a: 2 }, colors: ['brown', 'orange'] }
						, { id: 3, name: 'Pat', sex: 'female', child: { a: 3 }, colors: ['yellow', 'blue'] }
					]
				}
				, colors: {
					"red": [
						{ "id": 1, "name": "Dan", "sex": "male", "child": { "a": 1 }, "colors": ["red", "green"] }
					]
					, "green": [
						{ "id": 1, "name": "Dan", "sex": "male", "child": { "a": 1 }, "colors": ["red", "green"] }
					]
					, "brown": [
						{ "id": 2, "name": "Sam", "sex": "female", "child": { "a": 2 }, "colors": ["brown", "orange"] }
						, { "id": 5, "name": "Dug", "sex": "male", "child": { "a": 2 }, "colors": ["blue", "brown"] }
					]
					, "orange": [
						{ "id": 2, "name": "Sam", "sex": "female", "child": { "a": 2 }, "colors": ["brown", "orange"] }
						, { "id": 4, "name": "Jon", "sex": "male", "child": { "a": 1 }, "colors": ["black", "orange"] }
					]
					, "yellow": [
						{ "id": 3, "name": "Pat", "sex": "female", "child": { "a": 3 }, "colors": ["yellow", "blue"] }
					]
					, "blue": [
						{ "id": 3, "name": "Pat", "sex": "female", "child": { "a": 3 }, "colors": ["yellow", "blue"] }
						, { "id": 5, "name": "Dug", "sex": "male", "child": { "a": 2 }, "colors": ["blue", "brown"] }
					]
					, "black": [
						{ "id": 4, "name": "Jon", "sex": "male", "child": { "a": 1 }, "colors": ["black", "orange"] }
					]
				}
			}
		);

		test.done();
	}
	, "test data array, index single deep field": function (test) {
		test.deepEqual(
			index(data, 'child.a')
			, {
				'child.a':
				{
					1: [
						{ id: 1, name: 'Dan', sex: 'male', child: { a: 1 }, colors: ['red', 'green'] }
						, { id: 4, name: 'Jon', sex: 'male', child: { a: 1 }, colors: ['black', 'orange'] }
					]
					, 2: [
						{ id: 2, name: 'Sam', sex: 'female', child: { a: 2 }, colors: ['brown', 'orange'] }
						, { id: 5, name: 'Dug', sex: 'male', child: { a: 2 }, colors: ['blue', 'brown'] }
					]
					, 3: [
						{ id: 3, name: 'Pat', sex: 'female', child: { a: 3 }, colors: ['yellow', 'blue'] }
					]
				}
			}
		);

		test.done();
	}
};
