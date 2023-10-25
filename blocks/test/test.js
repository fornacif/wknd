/**
 * @param {HTMLElement} $block
 */
export default function decorate(block) {
	const subDiv = document.createElement('button');
	subDiv.textContent = 'Button';
	subDiv.addEventListener('click', (e) => {
		console.info("sd");
	});

	const sleep = async (milliseconds) => {
    await new Promise(resolve => {
        return setTimeout(resolve, milliseconds)
	    });
	};

	const testSleep = async () => {
	    console.log('Step 1 - Called');
	    await sleep(5000);
	    block.appendChild(subDiv);	
	    console.log('Step 2 - Called');
	}

	testSleep();
	
}	




