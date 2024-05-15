/*https://teachablemachine.withgoogle.com/models/VdMnaOQtm/*/


Webcam.set(
    {
        width:350,
        height: 300,
        image_format:"png",
        png_quality:90
    }
);

camera=document.getElementById("camera");

Webcam.attach("#camera");

function takesnapshot(){

    Webcam.snap(function(data_uri){
      
        document.getElementById("result").innerHTML="<img id='captureimage' src=" + data_uri + ">";  
    });
}

classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/VdMnaOQtm/model.json", modelloaded);

function modelloaded(){

    console.log("model loaded");
}

function predictemotion(){
    
    img= document.getElementById("captureimage");
    classifier.classify(img,gotresults);
}

function gotresults(error, results){
    console.log(results);
    document.getElementById("result_emotion_name").innerHTML= results[0].label;
    document.getElementById("result_emotion_name2").innerHTML= results[1].label;
    speak();
}

function speak(){

    synth= window.speechSynthesis;
    speak1= document.getElementById("result_emotion_name").innerHTML;
    speak2= document.getElementById("result_emotion_name2").innerHTML;
    utterthis=new SpeechSynthesisUtterance("The first prediction is" + speak1 + "The second prediction is" + speak2);
    synth.speak(utterthis);
}




