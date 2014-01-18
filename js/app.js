navigator.getUserMedia = navigator.getUserMedia ||
                         navigator.webkitGetUserMedia ||
                         navigator.mozGetUserMedia ||
                         navigator.msGetUserMedia;
window.AudioContext = window.AudioContext ||
                      window.webkitAudioContext;

var audioContext = new AudioContext();
var mediaStreamSource;

var handleStreamError = function(e) {
  console.log('streamError', e);
};

var handleBufferError = function(e) {
  console.log('bufferError', e);
};

var handleStream = function(stream) {
  console.log('handling stream...');
  mediaStreamSource = audioContext.createMediaStreamSource(stream);
  mediaStreamSource.connect(audioContext.destination);
};

navigator.getUserMedia({audio: true, video:false}, handleStream, handleStreamError);
