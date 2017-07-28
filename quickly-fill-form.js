/**
 * Populate all form fields with junk so we can quickly test the form.
 * Tested in Chrome 59.0.3071.115, Firefox 54.0.1, Edge 40.15063.0.0, and IE 11.483.15063.0
 */
function debug(){
	var inputs = document.getElementsByTagName('input');
	for (var i=0, max=inputs.length; i < max; i++) {
		switch(inputs[i].type)
		{
			case 'date':
			case 'text':
				//set the value of each input to it's ID
				inputs[i].value = ( '' != inputs[i].id ? inputs[i].id : inputs[i].name );

				//make sure we do not violate the maxlength attribute
				if( -1 < inputs[i].maxLength && inputs[i].value.length > inputs[i].maxLength ){
					inputs[i].value = inputs[i].value.substring(0, inputs[i].maxLength);
				}
				break;

			case 'checkbox':
			case 'radio':
				//check it
				inputs[i].checked = true;

				//fire change event
				if ("createEvent" in document) {
					var evt = document.createEvent("HTMLEvents");
					evt.initEvent("change", false, true);
					inputs[i].dispatchEvent(evt);
				} else {
					inputs[i].fireEvent("onchange");
				}

				break;

			case 'hidden':
			case 'submit':
				break;

			default:
				console.log( 'Trouble debugging this input type: ' + inputs[i].type );
		}
	}
	var selects = document.getElementsByTagName('select');
	for (var i=0, max=selects.length; i < max; i++ ){
		//select the last item in each select list
		selects[i].selectedIndex = selects[i].length-1;
	}
	var textareas = document.getElementsByTagName('textarea');
	for (var i=0, max=textareas.length; i < max; i++ ){
		textareas[i].value = ( '' != textareas[i].id ? textareas[i].id : textareas[i].name );
	}
}