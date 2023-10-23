/**
 * @param {HTMLElement} $block
 */
export default function decorate(block) {
	const subDiv = document.createElement('button');
	subDiv.textContent = 'Button';
	subDiv.addEventListener('click', (e) => {
		console.info("sd");
	});
	block.appendChild(subDiv);
}	
