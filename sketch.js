let videoTrack;
let flashlightOn = false;
let button;

function setup() {
  noCanvas();
  let constraints = { video: { facingMode: 'environment' } };
  navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
    videoTrack = stream.getVideoTracks()[0];
  });
  button = createButton('Toggle Flashlight');
  button.position(10, 10); // Adjust position as needed
  button.mousePressed(toggleFlashlight);
}

function toggleFlashlight() {
  if (videoTrack) {
    flashlightOn = !flashlightOn;
    videoTrack.applyConstraints({
      advanced: [{ torch: flashlightOn }],
    });
  }
}