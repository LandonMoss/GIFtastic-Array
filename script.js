//Create an array forward and backward :)
function createArrayForwardAndBackward() {
    const arraySize = 5;
    const arrayForward = [];
    const arrayBackward = [];

    //Fill array going forward
    for (let i = 0; i < arraySize; i++) {
        arrayForward.push(i);
    }

    //Fill array going backward
    for (let i = arraySize - 1; i >= 0; i--) {
        arrayBackward.push(i);
    }

    return { arrayForward, arrayBackward };
}

//GIFFFFFFFFFFFFFFFF
function createGIF() {
    console.log("createGIF function called");
    const gifContainer = document.getElementById('content');
    if (!gifContainer) return;
    const { arrayForward, arrayBackward } = createArrayForwardAndBackward();
    const delay = 1000; //Delay frames

    //Rendererererere  array as text
    function renderArrayAsText(array) {
        return array.join(' ');
    }

    //renenenenrnernern Gifey framesssssssssssss
    function renderFrames() {
        const frames = [];

        //forward frames
        for (let i = 0; i < arrayForward.length; i++) {
            frames.push(renderArrayAsText(arrayForward.slice(0, i + 1)));
        }

        // Backward frames
        for (let i = 0; i < arrayBackward.length; i++) {
            frames.push(renderArrayAsText(arrayBackward.slice(0, i + 1)));
        }

        return frames;
    }

    // Call renderFrames() here to access arrayForward and arrayBackward
    const frames = renderFrames();

    //gif themessssssssssss
    let gifHTML = '';
    frames.forEach((frame, index) => {
        gifHTML += `<div data-index="${index}" style="display:none;">${frame}</div>`;
    });
    gifContainer.innerHTML = gifHTML;

    //Show me the gif frames with some delay i guess
    frames.forEach((frame, index) => {
        setTimeout(() => {
            const div = gifContainer.querySelector(`[data-index="${index}"]`);
            div.style.display = 'block';
        }, index * delay);
    });
}

//Give me my GIFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF
window.onload = createGIF;
