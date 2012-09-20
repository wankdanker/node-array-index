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
				val = getKeyValue(obj, field);
				
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
				//avoid indexing fields whose values are
				//objects
				if (typeof obj[field] === 'object') {
					return;
				}
				
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

function getKeyValue(obj, key, undefined) {
  var reg = /\./gi
    , subKey
    , keys
    , context
    , x
    ;
  
  if (reg.test(key)) {
    keys = key.split(reg);
    context = obj;
    
    for (x = 0; x < keys.length; x++) {
      subKey = keys[x];
      
      //the values of all keys except for
      //the last one should be objects
      if (x < keys.length -1) {
        if (!context.hasOwnProperty(subKey)) {
          return undefined;
        }
        
        context = context[subKey];
      }
      else {
        return context[subKey];
      }
    }
  }
  else {
    return obj[key];
  }
};

module.exports.enableArrayIndexPrototype = function () {
	Array.prototype.index = index;
};