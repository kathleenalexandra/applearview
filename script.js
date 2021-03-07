/* check for support solution and link append from https://alexandermonachino.com/ar-quick-look/ */ 

function enhanceWithARQuickLook() {

	const a = document.createElement('a'),
		  supportsAR = a.relList.supports('ar') ? true : false;
	

	if ( supportsAR ) {
		const attr = 'data-ar-fp',
			  elements = document.querySelectorAll('['+attr+']');
		if ( elements.length > 0 ) {
			for ( var i in elements ) {
				const instance = elements[i],
				a = document.createElement('a');
				a.setAttribute('href', instance.getAttribute(attr));
				a.setAttribute('rel', 'ar');
				instance.removeAttribute(attr);
				instance.parentNode.insertBefore(a, instance);
				a.appendChild(instance);
			}
		}
		
	} else {
		 var div = document.getElementById('desktop-message');
		 div.innerHTML += 'Please view on a mobile device!';
	}	
}

enhanceWithARQuickLook();