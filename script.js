const countdown = document.getElementById('countdown');
    const days = document.getElementById('days');
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');
    
    function updateCountdown() {
      const now = new Date();
      const newYear = new Date(now.getFullYear() + 1, 0, 1);
      const diff = newYear - now;
      
      const daysLeft = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hoursLeft = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutesLeft = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const secondsLeft = Math.floor((diff % (1000 * 60)) / 1000);
      
      days.textContent = daysLeft.toString().padStart(2, '0');
      hours.textContent = hoursLeft.toString().padStart(2, '0');
      minutes.textContent = minutesLeft.toString().padStart(2, '0');
      seconds.textContent = secondsLeft.toString().padStart(2, '0');
    }
    
    setInterval(updateCountdown, 1000);