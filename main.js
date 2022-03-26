Webcam.set({
    width: 250,
    height: 200,
    image_format: 'png',
    png_quality: 90});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function takeSnapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("preview").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'
    });
}

console.log('ml5 version', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/tqSPKbFWw/model.json', modelLoaded);

function modelLoaded() {
    console.log('Model loaded!');
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data1 = "It's a " + prediction1;
    speak_data2 = "Or maybe a " + prediction2 + "gesture.";
    var utterThis = new SpeechSynthesisUtterance(speak_data1 + speak_data2);
    synth.speak(utterThis);
}

function checkImage() {
    console.log("---");
    console.log("Results will be displayed in the next project.");
}