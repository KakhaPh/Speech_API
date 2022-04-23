function speak(){
    const text = document.getSelection().toString();
    responsiveVoice.speak(text);
}

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