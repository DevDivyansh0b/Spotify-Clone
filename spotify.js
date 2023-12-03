let songIndex=0;
let audioElement=new Audio('Dance.mp3');
let masterPlay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('myprogessbar');
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();;
    }
    else{
        audioElement.pause();
    }
})
audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    document.getElementById("myprogressbar").value=progress;
})
myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressbar.value*audioElement.duration/100;
})
function playdance() {
    stop();
    document.getElementById("myprogressbar").value=0;
    audioElement=new Audio('Dance.mp3');
    masterPlay=document.getElementById('recentlyplayedsongs1img');
    myprogressbar=document.getElementById('myprogessbar');
    masterPlay.addEventListener('click',()=>{
        if(audioElement.paused || audioElement.currentTime<=0){
           audioElement.play();;
        }
        else{
            audioElement.pause();
        }
    })
    audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    document.getElementById("myprogressbar").value=progress;
    })
    myprogressbar.addEventListener('change',()=>{
        audioElement.currentTime=myprogressbar.value*audioElement.duration/100;
    })
}
function playdeva() {
    stop();
    document.getElementById("myprogressbar").value=0;
    audioElement=new Audio('Deva.mp3');
    masterPlay=document.getElementById('recentlyplayedsongs2img');
    myprogressbar=document.getElementById('myprogessbar');
    masterPlay.addEventListener('click',()=>{
        if(audioElement.paused || audioElement.currentTime<=0){
           audioElement.play();;
        }
        else{
            audioElement.pause();
        }
    })
    audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    document.getElementById("myprogressbar").value=progress;    
    })
    myprogressbar.addEventListener('change',()=>{
        audioElement.currentTime=myprogressbar.value*audioElement.duration/100;
    })
}
function playilahi() {
    stop();
    document.getElementById("myprogressbar").value=0;
    audioElement=new Audio('Ilahi.mp3');
    masterPlay=document.getElementById('recentlyplayedsongs3img');
    myprogressbar=document.getElementById('myprogessbar');
    masterPlay.addEventListener('click',()=>{
        if(audioElement.paused || audioElement.currentTime<=0){
           audioElement.play();;
        }
        else{
            audioElement.pause();
        }
    })
    audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    document.getElementById("myprogressbar").value=progress;
    })
    myprogressbar.addEventListener('change',()=>{
        audioElement.currentTime=myprogressbar.value*audioElement.duration/100;
    })
}
function playkhaabon() {
    stop();
    document.getElementById("myprogressbar").value=0;
    audioElement=new Audio('Khaabon.mp3');
    masterPlay=document.getElementById('recentlyplayedsongs4img');
    myprogressbar=document.getElementById('myprogessbar');
    masterPlay.addEventListener('click',()=>{
        if(audioElement.paused || audioElement.currentTime<=0){
           audioElement.play();;
        }
        else{
            audioElement.pause();
        }
    })
    audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    document.getElementById("myprogressbar").value=progress;
    })
    myprogressbar.addEventListener('change',()=>{
        audioElement.currentTime=myprogressbar.value*audioElement.duration/100;
    })
}
function stop() {
    audioElement.pause();
}
function searchfunction() {
    const search=() => {
        const searchbox=document.getElementById("homesearchsearchtext").value.toUpperCase();
        const storeitems=document6.getElementById("songsplaylistscrollplaylist");
        const product=document.querySelectorAll("songshe");
        const pname=storeitems.getElementByTagName("h2");
        for (var i=0;i<pname.length;i++){
            let match=product[i].getElementsByTagName('h2')[0];
            if (match) {
                let textvalue=match.textContent || match.innerHTML
                if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
                    product[i].computedStyleMap.display="";
                }else {
                    product[i].computedStyleMap.display="none";
                }
            }
        }
    }
}