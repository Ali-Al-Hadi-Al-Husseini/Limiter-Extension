const block_btn = document.getElementById("block-btn");
const limiter = document.getElementById("limiter");
const alarm = document.getElementById("alarm");
const timer = document.getElementById("timer");
const temp = document.getElementById("temp")
const timer_btn = document.getElementById("timer-btn")

    // document.getElementById("alarm-div").style.display = "none"
    // document.getElementById("time-div" ).style.display = "none"


block_btn.onclick = () => {
    const block_hour = document.getElementById("hour-input");
    const block_min = document.getElementById("min-input");
    const urlInput = document.getElementById("url-input");

    const hours =  block_hour.value == '' ? 0 : parseFloat(block_hour.value) * 60
    const min = block_min.value == '' ?   0 : parseFloat(block_min.value)
    let limiter_object = localStorage.getItem("$$limiter");
    const url = urlInput.value;

    if (limiter_object === null ){
        limiter_object = {}

    }else{
        limiter_object = JSON.parse(limiter_object);

    }}
timer_btn.onclick = () => {
    const hour_input = document.getElementById("hour-input-timer")
    const mins_input = document.getElementById("min-input-timer")
    const sec_input  = document.getElementById("sec-input-timer")
    const hours = hour_input.value === ''? 0 : parseInt(hour_input.value)*3600 * 1000
    const mins  =  mins_input.value === "" ? 0 : parseInt(mins_input.value) * 60 * 1000
    const sec   =  sec_input.value === "" ? 0 : parseInt(sec_input.value) * 1000
    let time    = hours + mins + sec
    console.log(sec)
    

}

// alarm.onclick = () => {
//     document.getElementById("limiter-div").style.display = "none"
//     document.getElementById("alarm-div").style.display = "block"
//     document.getElementById("time-div").style.display = "none"
// }
// limiter.onclick = () =>{
//     document.getElementById("limiter-div").style.display = "block"
//     document.getElementById("alarm-div").style.display = "none"
//     document.getElementById("timer-div").style.display = "none"
// }
// timer.onclick = () => {
//     document.getElementById("limiter-div").style.display = "none"
//     document.getElementById("alarm-div").style.display = "none"
//     document.getElementById("timer-div").style.display = "block"
// }

chrome.runtime.onMessage.addListener((message) => {
    console.log('sent from background', message.farewell);
});

function send(){
    chrome.runtime.sendMessage({ "type": "articleUrl", "url": url }, function (response) {
        console.log("here's the response for sending the URL");
        console.log(response);
    });
}
