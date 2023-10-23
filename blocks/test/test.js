/**
 * @param {HTMLElement} $block
 */
export default function decorate(block) {
	const subDiv = document.createElement('div');
	subDiv.textContent = 'Sub Div';
	block.appendChild(subDiv);
}	
