let btn=document.querySelector("#btn");
let content=document.querySelector("#content");

// js m ek class hoti sppech senthesis name ki
function speak(text){
    let text_speak= new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}
function wishMe(){
    let day= new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning Sir")
    }
    else if(hours>=12 && hours<16){
        speak("good afternoon sir")
    }
    else{
        speak("good evening sir")
    }
}
window.addEventListener("load",()=>{
    wishMe()
})

//speech reconiztion jo bhi apn bolte h usko reconize krta hai aur api ke form m array formt m data deta h

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition=new speechRecognition()
recognition.onresult=(event)=>{
   let currentIndex= event.resultIndex
   let transcript=event.results[currentIndex][0].transcript
   content.innerText=transcript
    takeCommand(transcript.toLowerCase())
}
btn.addEventListener("click",()=>{
    recognition.start()
})
function takeCommand(voice){
    if(voice.includes("hello")||voice.includes("hey")){
        speak("hello sir,what can i help you?")
    }
    else if(voice.includes("who are you") || voice.includes("hu r u")){
        speak("i am virtual assistant,created by yash rajput")
    }
    else if(voice.includes("open youtube")){
        speak("opening youtube")
        window.open("https://www.youtube.com/","_blank")
    }
     else if(voice.includes("open google")){
        speak("opening google")
        window.open("https://www.google.com/","_blank")
    }
     else if(voice.includes("open facebook")){
        speak("opening facebook")
        window.open("https://www.facebook.com/","_blank")
    }
    else if(voice.includes("open instagram")){
        speak("opening instagram")
        window.open("https://www.instagram.com/","blank")
    }
    else{
       let finalText="this is what i found on internet regarding "+ voice.replace("Robot","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${voice.replace("Robot","")}`,"_blank")
    }
}