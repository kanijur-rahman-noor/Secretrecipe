
function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

function goToPage2() {
  document.getElementById('page1').classList.remove('active');
  document.getElementById('page2').classList.add('active');
  startTimer();
}

function startTimer() {
  let counter = 19;
  const timerEl = document.getElementById('timer');
  const interval = setInterval(() => {
    counter--;
    timerEl.textContent = counter;
    if (counter === 0) {
      clearInterval(interval);
      document.getElementById('page2').classList.remove('active');
      document.getElementById('page3').classList.add('active');
    }
  }, 1000);
}
