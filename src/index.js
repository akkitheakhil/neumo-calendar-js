import Calendar from './app/calendar.js';

console.log('App Running')
const month = document.getElementById('month');
const year = document.getElementById('year');
const days = document.getElementById('days');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

const calendar = new Calendar(month, days, year);

prev.addEventListener('click', () => {
    calendar.prevMonth();
})

next.addEventListener('click', () => {
    calendar.nextMonth();
})

