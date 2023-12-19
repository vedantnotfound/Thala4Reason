//JS Test
console.log("Welcome to Thala Checker");

let loader = document.getElementById("loader");
window.addEventListener("load", function () {
    loader.style.display = "none";
})

document.addEventListener('DOMContentLoaded', function () {
    const shareButton = document.getElementById('shareBtn');

    if (navigator.share) {
        shareButton.addEventListener('click', async () => {
            try {
                await navigator.share({
                    title: 'Thala Cheker',
                    text: 'Check out this link!',
                    url: 'https://thala4reason.netlify.app/'
                });
                console.log('Link shared successfully!');
            } catch (error) {
                console.error('Error sharing link:', error);
            }
        });
    } else {
        // Fallback for browsers that do not support the Web Share API
        shareButton.addEventListener('click', () => {
            alert('Web Share API not supported on this browser. You can manually copy the link.');
        });
    }
});
let inputText = document.getElementById('search');
inputText.addEventListener("focus", function () {
    let searchBox = document.getElementById('searchBox');
    searchBox.style.background = "#ffffff2a";
    pauseMemeAudio();
})
let checkBtn = document.getElementById("checkBtn");
checkBtn.addEventListener("click", function () {

    let inputText = document.getElementById('search').value;
    let inputLowerCase = inputText.toLowerCase();
    let count = inputText.length;
    let outputText = inputText.split('').join('+');
   if (inputText == '') {
        let reasonImg = document.getElementById("reasonImg");
        reasonImg.style.display = "none";
        let notReason = document.getElementById("notreasonImg");
        notReason.style.display = "none";
        let inputText = document.getElementById('searchBox');
        inputText.style.background = "#ff00005a";
        let popBox = document.getElementById("popBox");
        popBox.style.transform = "translateY(550px)";
        let outputText = document.getElementById("outputText");
        outputText.style.display = "none";
        let tryAgain = document.getElementById("tryAgain");
        tryAgain.style.display = "none";

        pauseNotReasonAudio();
        pauseReasonAudio();
        playMemeAudio();
        

    }
    else if(inputLowerCase == 7){
        let popBox = document.getElementById("popBox");
        popBox.style.transform = "translateY(0px)";
        document.getElementById('outputText').innerText = `Thala For Reason: ${outputText}`;

        let reasonImg = document.getElementById("reasonImg");
        reasonImg.style.display = "block";
        let notReason = document.getElementById("notreasonImg");
        notReason.style.display = "none";

        let output = document.getElementById("outputText");
        output.style.display = "block";
        let tryAgain = document.getElementById("tryAgain");
        tryAgain.style.display = "block";
        playReasonAudio();
        pauseMemeAudio();
        pauseNotReasonAudio();
    }
    else if(inputLowerCase == 'dhoni' || inputLowerCase == 'thala' || inputLowerCase == "'7'" || inputLowerCase == '"7"'){
        let popBox = document.getElementById("popBox");
        popBox.style.transform = "translateY(0px)";
        document.getElementById('outputText').innerText = `Thala For Reason: ${inputLowerCase}`;

        let reasonImg = document.getElementById("reasonImg");
        reasonImg.style.display = "block";
        let notReason = document.getElementById("notreasonImg");
        notReason.style.display = "none";

        let output = document.getElementById("outputText");
        output.style.display = "block";
        let tryAgain = document.getElementById("tryAgain");
        tryAgain.style.display = "block";
        playReasonAudio();
        pauseMemeAudio();
        pauseNotReasonAudio();
    }
    else if (count == 7) {

        let reasonImg = document.getElementById("reasonImg");
        reasonImg.style.display = "block";
        let notReason = document.getElementById("notreasonImg");
        notReason.style.display = "none";

        document.getElementById('outputText').innerText = `Thala For Reason: ${outputText} = ${count} `;
        let popBox = document.getElementById("popBox");
        popBox.style.transform = "translateY(0px)";
        playReasonAudio();
        pauseMemeAudio();
        pauseNotReasonAudio();
        let output = document.getElementById("outputText");
        output.style.display = "block";
        let tryAgain = document.getElementById("tryAgain");
        tryAgain.style.display = "block";


    }
    else if (count != 7) {
        let reasonImg = document.getElementById("reasonImg");
        reasonImg.style.display = "none";
        let notReason = document.getElementById("notreasonImg");
        notReason.style.display = "block";
        document.getElementById('outputText').innerText = `Not Any Reason For Thala: ${outputText} = ${count} `;
        let popBox = document.getElementById("popBox");
        popBox.style.transform = "translateY(0px)";
        let output = document.getElementById("outputText");
        output.style.display = "block";
        let tryAgain = document.getElementById("tryAgain");
        tryAgain.style.display = "block";

        playNotReasonAudio();
        pauseMemeAudio();
        pauseReasonAudio();
    }
    else{
        document.getElementById('outputText').innerText = `Sorry You Enterd Wrong Input`;
    }
    
    
})
function playReasonAudio() {
    var audio = document.getElementById('reason');
    audio.play();
    audio.currentTime = 0;
}
function pauseReasonAudio() {
    var audio = document.getElementById('reason');
    audio.pause();
    audio.currentTime = 0;
}
function playNotReasonAudio() {
    var audio = document.getElementById('notreason');
    audio.play();
    audio.currentTime = 0;
}
function pauseNotReasonAudio() {
    var audio = document.getElementById('notreason');
    audio.pause();
    audio.currentTime = 0;
}
function playMemeAudio() {
    var audio = document.getElementById('memeAudio');
    audio.play();
    audio.currentTime = 0;
}
function pauseMemeAudio() {
    var audio = document.getElementById('memeAudio');
    audio.pause();
    audio.currentTime = 0;
}
let closeBtn = document.getElementById("close");
closeBtn.addEventListener("click", function () {
    let reasonImg = document.getElementById("reasonImg");
    reasonImg.style.display = "none";
    let notReason = document.getElementById("notreasonImg");
    notReason.style.display = "none";
    let popBox = document.getElementById("popBox");
    popBox.style.transform = "translateY(550px)";

    let outputText = document.getElementById("outputText");
    outputText.style.display = "none";
    let tryAgain = document.getElementById("tryAgain");
    tryAgain.style.display = "none";

    pauseReasonAudio();
    pauseNotReasonAudio();
    pauseMemeAudio();
    let inputText = document.getElementById('search').value = '';

})

let tryAgain = document.getElementById("tryAgain");
tryAgain.addEventListener("click", function () {
    let reasonImg = document.getElementById("reasonImg");
    reasonImg.style.display = "none";
    let notReason = document.getElementById("notreasonImg");
    notReason.style.display = "none";
    let popBox = document.getElementById("popBox");
    popBox.style.transform = "translateY(550px)";
    let inputText = document.getElementById('search').value = '';
    let outputText = document.getElementById("outputText");
    outputText.style.display = "none";
    let tryAgain = document.getElementById("tryAgain");
    tryAgain.style.display = "none";
    pauseReasonAudio();
    pauseNotReasonAudio();
    pauseMemeAudio();
})

//* GSAP Animation

let tl = gsap.timeline();
tl.from("#navbar",{
    y:-100,
    opacity:0,
    duration:0.5
})
tl.from("#home h1",{
    y:60,
    opacity:0,
    duration:0.5
})
tl.from("#home p",{
    y:60,
    opacity:0,
    duration:0.5
})
tl.from("#home #searchBox",{
    y:60,
    opacity:0,
    duration:0.5
})
tl.from("#popBox",{
    opacity:1,
    scale:0.9,
    duration:0.5
})