module.exports = index;

function index (array, fieldList) {
	var idx = {}
		, val
		;
	
	if (this.constructor.name == 'Array') {
		fieldList = array;
		array = this;
	}
	else if (arguments.length === 0) {
		array = [];
	}
	
	if (fieldList && fieldList.length) {
		if (!Array.isArray(fieldList)) {
			fieldList = [fieldList];
		}
		
		//pre-seed all of the idx fields so we don't
		//have to check when processing each record
		fieldList.forEach(function (field) {
			idx[field] = {};
		});
		
		array.forEach(function (obj) {
			fieldList.forEach(function (field) {
				val = obj[field];
				
				if (!idx[field].hasOwnProperty(val)) {
					idx[field][val] = [];
				}
				
				idx[field][val].push(obj);
			});
		});
	}
	else {
		//index every field
		
		array.forEach(function (obj) {
			Object.keys(obj).forEach(function (field) {
				if (!idx.hasOwnProperty(field)) {
					idx[field] = {};
				}
				
				val = obj[field];
				
				if (!idx[field].hasOwnProperty(val)) {
					idx[field][val] = [];
				}
				
				idx[field][val].push(obj);
			});
		});
	}
	
	return idx;
}

module.exports.enableArrayIndexPrototype = function () {
	Array.prototype.index = index;
};