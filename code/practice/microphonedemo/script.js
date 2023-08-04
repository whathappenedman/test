const startMicrophoneButton = document.querySelector('#startMicrophoneButton');
const stopMicrophoneButton = document.querySelector('#stopMicrophoneButton');
const startRecordButton = document.querySelector('#startRecordButton');
const stopRecordButton = document.querySelector('#stopRecordButton');

let stream;
let recorder;
let recordedChunks = [];

startMicrophoneButton.addEventListener("click", async () => {
  // Prompt the user to use their microphone.
  stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  recorder = new MediaRecorder(stream);

  stopMicrophoneButton.disabled = false;
  startRecordButton.disabled = false;
});

stopMicrophoneButton.addEventListener("click", () => {
  // Stop the stream.
  stream.getTracks().forEach(track => track.stop());

  startRecordButton.disabled = true;
  stopRecordButton.disabled = true;
  log("Your microphone audio is not used anymore.");
});

startRecordButton.addEventListener("click", async () => {
  // For the sake of more legible code, this sample only uses the
  // `showSaveFilePicker()` method. In production, you need to
  // cater for browsers that don't support this method, as
  // outlined in https://web.dev/patterns/files/save-a-file/.

  // Prompt the user to choose where to save the recording file.


  // Start recording.
  recorder.start();
  recorder.addEventListener("dataavailable", async (event) => {
    // Write chunks to the file.
     if (event.data.size > 0) {
    recordedChunks.push(event.data);
    console.log(recordedChunks);
    download();
    }
  });

  stopRecordButton.disabled = false;
});

stopRecordButton.addEventListener("click", () => {
  // Stop the recording.
  recorder.stop();

  stopRecordButton.disabled = true;
  console.log("Your microphone audio has been successfully recorded locally.");
});

function download() {
  const blob = new Blob(recordedChunks, {
    type: "video/webm",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  document.body.appendChild(a);
  a.style = "display: none";
  a.href = url;
  a.download = "test.webm";
  a.click();
  window.URL.revokeObjectURL(url);
  recordedChunks = []
}