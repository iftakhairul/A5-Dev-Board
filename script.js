document.addEventListener("DOMContentLoaded", function () {
    const today = new Date();
    const day = today.toLocaleDateString('en-US', { weekday: 'short' });
    const year = today.toLocaleDateString('en-US', { year: 'numeric' });
    const month = today.toLocaleDateString('en-US', { month: 'short' });
    const date = today.toLocaleDateString('en-US', { day: 'numeric' });
    document.getElementById('date-container').innerText = `${day} ${month} ${date} ${year}`;
});