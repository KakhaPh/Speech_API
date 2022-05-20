function textToSpeech()
{
   const speech = new SpeechSynthesisUtterance();
    let voices = speechSynthesis.getVoices();
    let convert = document.getElementById("text").innerHTML;

    speech.text = convert;
   
    speech.volume = 12;
    speech.rate = 1;
    speech.pitch = 1;
   
    speech.voice = voices[1];
   
    speechSynthesis.speak(speech);
}


function pause()
{
    speechSynthesis.pause();
}


function stop()
{
    speechSynthesis.cancel();
}

speakBtn.addEventListener('click', textToSpeech);
pauseBtn.addEventListener('click', pause);
cancelBtn.addEventListener('click', stop);