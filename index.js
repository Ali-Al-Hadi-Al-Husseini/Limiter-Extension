const block_btn = document.getElementById("block-btn")
const block_hour = document.getElementById("hour-input")
const block_min = document.getElementById("min-input")
const urlInput = document.getElementById("url-input")
const temp = document.getElementById("temp")
var open = true



block_btn.onclick = () => {

    const hours =  block_hour.value == '' ? 0 : parseFloat(block_hour.value) * 60
    const min = block_min.value == '' ?   0 : parseFloat(block_min.value)
    let limiter_object = localStorage.getItem("$$limiter");
    const url = urlInput.value;

    if (limiter_object === null ){
        limiter_object = {}

    }else{
        limiter_object = JSON.parse(limiter_object);

    }

    limiter_object[url] = min+hours;
    localStorage.setItem("$$limiter", JSON.stringify(limiter_object))
    console.log(chrome.tabs.getAll())

    }


  