let screen = document.getElementById("output")

function display(num){
    screen.value += num
}

function calc(){
    try{
        screen.value = eval(screen.value)
    }catch{
        screen.value = "Math Error"
    }
}

function Clear() {
    screen.value = "";
}

function del() {
    screen.value = screen.value.slice(0,-1)
}

function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  
  function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("time").textContent = h + ":" + m + ":" + s;
    t = setTimeout(function() {
      startTime()
    },);
  }

  startTime();
