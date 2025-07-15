// === CONFIGURABLE DATES ===
const startDate = new Date('2025-01-20T00:00:00Z'); // UTC
const endDate = new Date('2029-01-20T00:00:00Z');   // UTC

// === MAIN COUNTDOWN FUNCTION ===
function updateCountdown() {
    const now = new Date();
    let total = endDate - now;
    if (total < 0) total = 0;

    // Calculate years, days, hours, minutes, seconds
    let years = endDate.getUTCFullYear() - now.getUTCFullYear();
    let tempDate = new Date(now);
    tempDate.setUTCFullYear(now.getUTCFullYear() + years);

    if (tempDate > endDate) {
        years--;
        tempDate.setUTCFullYear(now.getUTCFullYear() + years);
    }

    let remaining = endDate - tempDate;
    let days = Math.floor(remaining / (1000 * 60 * 60 * 24));
    remaining -= days * (1000 * 60 * 60 * 24);

    let hours = Math.floor(remaining / (1000 * 60 * 60));
    remaining -= hours * (1000 * 60 * 60);

    let minutes = Math.floor(remaining / (1000 * 60));
    remaining -= minutes * (1000 * 60);

    let seconds = Math.floor(remaining / 1000);

    // If before start date, show all zeros
    if (now < startDate) {
        years = days = hours = minutes = seconds = 0;
    }

    document.getElementById('years').textContent = years;
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// === INITIALIZE ===
updateCountdown();
setInterval(updateCountdown, 1000);