prediction_1 = "";

Webcam.set({
    width: 350,
    height: 300, 
    image_format: 'png',
    png_quality: 90 
});

camera = document.getElementById("camera");
Webcam.attach('#camera')

function take_snapshot() 
{
    Webcam.snap(function(data_uri) {
        document.getElementById("camera1").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:',ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/5mxzZHkpx/model.json',modelLoaded);

function modelLoaded() {
    console.log('modelLoaded!')
}

function check() 
{
    img = document.getElementById('camera1');
    classifier.classify(img,gotResult);
}

function gotResult(error, results) {
    if(error) {
        console.error(error);
    } else {
       console.log(results);
       document.getElementById(result_hand_name).innerHTML = results[0].label;
       prediction_1 = results[0].label;

        speak();
        if(results[0].label=="Indicating luck")
        {
            document.getElementById("update_hand").innerHTML = "&#129310;";
        }
        if(results[0].label=="victory")
        {
            document.getElementById("update_hand").innerHTML = "&#9996;";
        }
        if(results[0].label=="Best")
        {
            document.getElementById("update_hand").innerHTML = "&#128077;";
        }
        if(results[0].label=="stop")
        {
            document.getElementById("update_hand").innerHTML = "&#9995;";
        }
        if(results[0].label=="Nice")
        {
            document.getElementById("update_hand").innerHTML = "&#128076;";
        }
    }
}
function speak() {
    var synth = window.speechSynthesis;
    if(result_hand_name = 'Nice') {
        speak_data_1 = "the prediction is"+ prediction_1;
    synth.speak(speak_data_1);
    } else if(result_hand_name = 'Victory') {
        speak_data_2 = "the prediction is"+ prediction_1;
    synth.speak(speak_data_2);
    } else if(result_hand_name = 'Best') {
        speak_data_3 = "the prediction is"+ prediction_1;
    synth.speak(speak_data_3);
    } else if(result_hand_name = 'Stop') {
        speak_data_4 = "the prediction is"+ prediction_1;
    synth.speak(speak_data_4);
    } else if(result_hand_name = 'Indicating luck') {
        speak_data_5 = "the prediction is"+ prediction_1;
    synth.speak(speak_data_5);
    }
}
