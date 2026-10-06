const bars = document.querySelectorAll('.chart-bar');
const maxAmount = Math.max(...Array.from(bars).map(bar => bar.dataset.amount));

const day = new Date();
const today = new Date().toLocaleDateString('en-US', { weekday: 'short' }).toLowerCase();

bars.forEach(bar => {
  const amount = bar.dataset.amount;
  const heightPercent = (amount / maxAmount) * 100;
  
  bar.style.height = `${heightPercent}%`;
  if (bar.dataset.day === today){
    bar.classList.add('today');
  }
});