/**
 * Adds a 'Typewriter' effect on a text element
 * 
 * @param {string} text text to apply effect to
 * @param {HTMLElement} element Element on which the effect is supposed to be applied
 * @param {number} pause pause between each char (default 50) 
 */
effect_typewriter = (text, element, pause = 50) => {
	for(var i=0; i < text.length; i++) {
		element.innerHTML += text.charAt(i); 
		setTimeout(pause);
	}
}