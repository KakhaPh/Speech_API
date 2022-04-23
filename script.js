var voiceList = document.querySelector('#voiceList');
var btnSpeak = document.querySelector('#btnSpeak');
var synth = window.speechSynthesis;
var voices = [];

PopulateVoices();
if(speechSynthesis !== undefined){
    speechSynthesis.onvoiceschanged = PopulateVoices;
}

btnSpeak.addEventListener('click', ()=> {
    if(document.getSelection){
        var text = document.getSelection().toString();
    }
    var toSpeak = new SpeechSynthesisUtterance(text);
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice)=>{
        if(voice.name === selectedVoiceName){
            toSpeak.voice = voice;
        }
    });
    synth.speak(toSpeak);
});

setInterval(()=>{
    
    if(document.getSelection().toString().length > 0){
        document.getElementById('btnSpeak').style.display = 'block';
        // get text coords
        const textCoords = document.getSelection().getRangeAt(0).getBoundingClientRect();
        const textX = textCoords.x;
        const textY = textCoords.y;
        // show btn at text coords
        document.getElementById('btnSpeak').style.left = textX + 'px';
        document.getElementById('btnSpeak').style.top = textY + 25 + 'px';
        
    }else{
        document.getElementById('btnSpeak').style.display = 'none';
    }

}, 800);

function PopulateVoices(){
    voices = synth.getVoices();
    var selectedIndex = voiceList.selectedIndex < 0 ? 0 : voiceList.selectedIndex;
    voiceList.innerHTML = '';
    voices.forEach((voice)=>{
        var listItem = document.createElement('option');
        listItem.textContent = voice.name;
        listItem.setAttribute('data-lang', voice.lang);
        listItem.setAttribute('data-name', voice.name);
        voiceList.appendChild(listItem);
    });

    voiceList.selectedIndex = selectedIndex;
}