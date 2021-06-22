var remainingTime = 30;
    var elem = document.getElementById('countdown_div');
    var timer = setInterval(countdown, 1000); //set the countdown to every second
    function countdown() {
      if (remainingTime == -1) {
        clearTimeout(timer);
        doSomething();
      } else {
        elem.innerHTML = remainingTime + ' left';
        remainingTime--; //we subtract the second each iteration
      }
    }