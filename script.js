const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// 1. prompt to select media stream 
// 2. pass to video element
// 3. play video

async function selectMediaStream() {
    try {
        // screen capture API is a web API, documentation: https://developer.mozilla.org/en-US/docs/Web/API/Screen_Capture_API

        // wait for user to select which screen they are using as media 
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();

        // that media = the source of media screen
        videoElement.srcObject = mediaStream;

        // then, when the metadata gets loaded, play the video
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }

    } catch(e) {
        console.log(e);
    }
}

button.addEventListener('click', async () => {
    // disable button
    button.disabled = true;
    // start picture in picture
    await videoElement.requestPictureInPicture();
    // reset button
    button.disabled = false;
});

selectMediaStream();
