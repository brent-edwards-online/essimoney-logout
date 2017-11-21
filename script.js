document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    console.log('Dom Ready');

    var clickCount = 0;
    var mouseCount = 0;
    var keyCount = 0;

    var b = document.getElementsByTagName('body');
    
    var c = document.getElementById('c');
    var m = document.getElementById('m');
    var k = document.getElementById('k');
    var t = document.getElementById('t');

    document.addEventListener("click", function(){
      timeCount = 5;
      clickCount++;
      c.innerHTML = "Click: " + clickCount;
      Delay();
    });

    document.addEventListener("mousemove", function(){
      timeCount = 5;
      mouseCount++;
      m.innerHTML = "Mouse: " + mouseCount;
      Delay();
    });

    document.addEventListener("keypress", function(){
      timeCount = 5;
      keyCount++;
      k.innerHTML = "Key: " + keyCount;
      Delay();
    });

    Init();
  }
}

var timeCount = 5;

function Init(){
  console.log('Init');
  logoutTimer = window.setInterval(Logout, 5000) 
  timer = window.setInterval(Clock, 1000) 
  t.innerHTML = "Time: " + timeCount;
}

function Delay() {
  console.log('Delay');
  clearInterval(logoutTimer);
  clearInterval(timer);
  Init();
}

function Clock(){
  timeCount--;
  t.innerHTML = "Time: " + timeCount;
}

function Logout(){
  console.log('Logout');
  window.location = "logout.html" ;
}
