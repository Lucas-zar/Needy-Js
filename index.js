//---------------------------------------------------------------------\\<-#$%&"!@^`}{~+*´?¿=">
//Needy Girl Overdose
const Needy_button_1 = document.getElementById("needy-button-1");
const Needy_button_2 = document.getElementById("needy-button-2");
const Needy_button_3 = document.getElementById("needy-button-3");
const Needy_window = document.getElementById("needy-window-button");
const Needy_Element = document.getElementById("Needy-Girl-Overdose");
const Kangel_gif = document.getElementById("kangel-gif");
const Msg = document.getElementById("msg");
const Pills = document.getElementById("pills");
const Chair_bg = document.getElementById("chair-bg")
var PillCount = 0;
let Overdose = false;


Kangel_gif.onclick = function wave(){
    if(!Overdose){
        Kangel_gif.setAttribute("src","src/needy/kangel-wave.gif");
    setTimeout(() => {
        Kangel_gif.setAttribute("src","src/needy/kangel.gif");
}, 2500);}
};

Pills.onclick = function pill_count(){
    console.log(PillCount)
    PillCount += 1;

    if(PillCount >= 5){
        Overdose = true
        Chair_bg.classList.remove("needy-cam-bg")
        Chair_bg.classList.add("needy-cam-bg2")

        Kangel_gif.setAttribute("src","src/needy/overdose.gif");
        Pills.setAttribute("disabled","");
        Pills.classList.remove("hover:scale-110");
        Pills.style.display = "none";
        setTimeout(() => {
            Kangel_gif.setAttribute("src","src/needy/overdose.png");
        }, 1000);
        setTimeout(() => {
            Needy_Element.style.display="none";
        }, 2000);
    }

};
Needy_button_1.onclick = function minimize(){
    Needy_Element.style.display = 'none';
};
Needy_button_2.onclick = function maximize_window(){
    Needy_Element.classList.toggle("w-screen")
    Needy_Element.classList.toggle("h-full")

    Kangel_gif.classList.toggle("gif-size")

    Msg.classList.toggle("hidden");
};
Needy_button_3.onclick = function close(){
    Needy_Element.style.display = 'none';
}
Needy_window.onclick = function open_window(){
    if(!Overdose){
    Needy_Element.style.display = 'block';
    Kangel_gif.classList.remove("maximize");
        }
};

var Needy_clock = document.getElementById("needy-clock");
var Needy_date = document.getElementById("needy-date")
function refreshTime() {
  var dateString = new Date().toLocaleString("en-US", {timeZone: "America/Sao_Paulo"});
  var formattedString = dateString.replace(", ", " ");
  Needy_clock.innerHTML = formattedString.slice(10);
}setInterval(refreshTime,1);
const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${day}-${month}-${year}`;
Needy_date.innerText = currentDate;



//Needy Girl Overdose
//---------------------------------------------------------------------\\<-#$%&"!@^`}{~+*´?¿=">
//


//
//---------------------------------------------------------------------\\<-#$%&"!@^`}{~+*´?¿=">
