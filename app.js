var displayHours = document.getElementById("displayHours")
var displayMinutes = document.getElementById("displayMinutes")
var displaySeconds = document.getElementById("displaySeconds")
var startBtn = document.getElementById("startBtn")
var pauseBtn = document.getElementById("pauseBtn")
var resetBtn = document.getElementById("resetBtn")
var hours= 1
var minutes = 1
var seconds = 60
var interval;
pauseBtn.disabled = true
resetBtn.disabled =true

function render(){
    displayHours.innerHTML =hours
    displayMinutes.innerHTML=minutes
    displaySeconds.innerHTML=seconds
}
function Timer (){
    seconds--
    if (seconds===-1){
        seconds = 59
        minutes--
        // seconds =0
    }
    else if(minutes===-1){
        hours--
        minutes=59
    }
    else if( hours===0 && minutes ===0 && seconds ===0){
        alert("THE TIMER HAS STOPPED")

    }
    // console.log(seconds)
    render()
    
    
}
function startStopWatch(){
    startBtn.disabled=true
    pauseBtn.disabled=false
    resetBtn.disabled=false
    interval = setInterval(function(){
        Timer()
    },1000)
    

}

function pauseStopWatch(){
    pauseBtn.disabled=true
    startBtn.disabled=false
    resetBtn.disabled=false
    clearInterval(interval)
    render()
    }
    function resetStopWatch(){
        pauseBtn.disabled=true
        startBtn.disabled=false
        resetBtn.disabled=true
        hours=0
        minutes=0
        seconds=0
        pauseStopWatch()
        render()
// startStopWatch()
location.reload()

        
    }

    function stopTimer (){
        if(hours=0){
            if(minutes=0){
                if(seconds=0){
alert("THE TIMER HAS STOPPED")
                }
            }
        }
    }