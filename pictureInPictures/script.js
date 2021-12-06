const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream
async function selectMediaStream() {

    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.onplay();
        }
    } catch (error) {
        // Catch error 
        console.log('Error here', error);
    }
}

button.addEventListener('click', async () => {
    // Disable Button
    button.disabled = true;

    // Start Picture in pictur 
    await videoElement.requestPictureInPicture();

    //Reset the button
    button.disabled = false
})

// On Load
selectMediaStream();