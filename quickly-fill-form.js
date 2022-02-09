/**
 * Populate all form fields with junk so we can quickly test the form.
 * Tested in Chrome 59.0.3071.115, Firefox 54.0.1, Edge 40.15063.0.0, and IE 11.483.15063.0
 */
function debug(){
	var inputs = document.getElementsByTagName('input');
	for (var i=0, max=inputs.length; i < max; i++) {

		if( '_validate_email' == inputs[i].id )
		{
			//Do not populate the Advanced Custom Fields spam honey pot
			continue;
		}

		var changed = true; //was this control's value changed?

		switch(inputs[i].type)
		{
			case 'date':
			case 'password':
			case 'text':
				//ignore this input if it already has a value
				if( '' != inputs[i].value )
				{
					continue;
				}

				//set the value of each input to it's ID, name, some letters, and some numbers
				inputs[i].value = ( '' != inputs[i].id ? inputs[i].id : inputs[i].name ) + '0123456789abcdefghij';

				//fire the input event for the control
				if ("createEvent" in document) {
					var evt = document.createEvent("HTMLEvents");
					evt.initEvent("input", false, true);
					inputs[i].dispatchEvent(evt);
				} else {
					inputs[i].fireEvent("oninput");
				}

				//make sure we do not violate the maxlength attribute
				if( -1 < inputs[i].maxLength && inputs[i].value.length > inputs[i].maxLength ){
					inputs[i].value = inputs[i].value.substring(0, inputs[i].maxLength);
				}
				break;

			case 'checkbox':
			case 'radio':
				//check it
				inputs[i].checked = true;
				break;

			case 'number':
			case 'tel':
				//ignore this input if it already has a value
				if( '' != inputs[i].value )
				{
					continue;
				}

				inputs[i].value = '11111111111';
				
				//fire the input event for the control
				if ("createEvent" in document) {
					var evt = document.createEvent("HTMLEvents");
					evt.initEvent("input", false, true);
					inputs[i].dispatchEvent(evt);
				} else {
					inputs[i].fireEvent("oninput");
				}
				break;

			case 'email':
				//ignore this input if it already has a value
				if( '' != inputs[i].value )
				{
					continue;
				}

				inputs[i].value = 'foo@example.com';
				
				//fire the input event for the control
				if ("createEvent" in document) {
					var evt = document.createEvent("HTMLEvents");
					evt.initEvent("input", false, true);
					inputs[i].dispatchEvent(evt);
				} else {
					inputs[i].fireEvent("oninput");
				}			
				break;

			case 'url':
				//ignore this input if it already has a value
				if( '' != inputs[i].value )
				{
					continue;
				}

				inputs[i].value = 'https://example.com';
				break;

			case 'hidden':
			case 'submit':
				break;

			default:
				console.log( 'Trouble debugging this input type: ' + inputs[i].type );
				//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input#Form_<input>_types
				changed = false;
		}

		if( changed ) {
			//fire the change event for the control
			if ("createEvent" in document) {
				var evt = document.createEvent("HTMLEvents");
				evt.initEvent("change", false, true);
				inputs[i].dispatchEvent(evt);
			} else {
				inputs[i].fireEvent("onchange");
			}
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
