class Serialize{
	
	encode(object, encodetype, uriencode){
		var value, s = [];
		if(encodetype === 'json'){
			if(uriencode){
				for (var k in object){
    			if (object.hasOwnProperty(k)) {
         		object[k] = encodeURIComponent(object[k]);
    			}
				}
			}
			console.log(object);
			return object;
		}
		for (var k in object){
    	if (object.hasOwnProperty(k)) {
    		value = uriencode ? encodeURIComponent(object[k]) : object[k];
     		s.push(`${object[k]}=${value}`);
    	}
		}
		return uriencode ? s.join('&').replace(/%20/g, '+') : s.join('&');
		//return object;
	}

	serialize(element, encodetype = 'form', uriencode = null) {
		var field, s = [];
		var obj={};
		if(encodetype !== 'form' && encodetype !== 'json'){
			console.log('invalid encode type');
			return '';
		}
		if(encodetype === 'form' && uriencode === null) uriencode = true;
		if(encodetype === 'json' && uriencode === null) uriencode = false;
		if (typeof element == 'object' && (element.nodeName == "FORM" || element.nodeName == "DIV")) {
			var len = element.elements.length;
			for (var i=0; i<len; i++) {
				field = element.elements[i];
				if (field.name && !field.disabled && field.type != 'file' && field.type != 'reset' && field.type != 'submit' && field.type != 'button') {
					if (field.type == 'select-multiple') {
						for (var j=element.elements[i].options.length-1; j>=0; j--) {
							if(field.options[j].selected){
								s[s.length] = encodeURIComponent(field.name) + "=" + encodeURIComponent(field.options[j].value);
								obj[field.name] = field.options[j].value;}
						}
					} else if ((field.type != 'checkbox' && field.type != 'radio') || field.checked) {
						s[s.length] = encodeURIComponent(field.name) + "=" + encodeURIComponent(field.value);
						obj[field.name] = field.value;
					}
				}
			}
		}
		//console.log(s,obj);
		return this.encode(obj, encodetype, uriencode);
		//return s.join('&').replace(/%20/g, '+');
	}

	serialize2(form) {
		var field, s = [];
		if (typeof form == 'object' && form.nodeName == "FORM") {
			var len = form.elements.length;
			for (var i=0; i<len; i++) {
				field = form.elements[i];
				if (field.name && !field.disabled && field.type != 'file' && field.type != 'reset' && field.type != 'submit' && field.type != 'button') {
					if (field.type == 'select-multiple') {
						for (var j=form.elements[i].options.length-1; j>=0; j--) {
							if(field.options[j].selected)
								s[s.length] = encodeURIComponent(field.name) + "=" + encodeURIComponent(field.options[j].value);
						}
					} else if ((field.type != 'checkbox' && field.type != 'radio') || field.checked) {
						s[s.length] = encodeURIComponent(field.name) + "=" + encodeURIComponent(field.value);
					}
				}
			}
		}
		return s.join('&').replace(/%20/g, '+');
	}
	
	serialize_div(form) {
		var field, s = [];
		if (typeof form == 'object' && form.nodeName == "DIV") {
			var len = form.elements.length;
			for (var i=0; i<len; i++) {
				field = form.elements[i];
				if (field.name && !field.disabled && field.type != 'file' && field.type != 'reset' && field.type != 'submit' && field.type != 'button') {
					if (field.type == 'select-multiple') {
						for (var j=form.elements[i].options.length-1; j>=0; j--) {
							if(field.options[j].selected)
								s[s.length] = encodeURIComponent(field.name) + "=" + encodeURIComponent(field.options[j].value);
						}
					} else if ((field.type != 'checkbox' && field.type != 'radio') || field.checked) {
						s[s.length] = encodeURIComponent(field.name) + "=" + encodeURIComponent(field.value);
					}
				}
			}
		}
		return s.join('&').replace(/%20/g, '+');
	}
}


