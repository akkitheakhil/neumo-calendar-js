export default class Calendar {

    months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    constructor(month, days, year) {
        this.monthDisplay = month;
        this.daysDisplay = days;
        this.yearDisplay = year;
        this.currentDate = new Date();
        this.calendarInit();
    }

    calendarInit() {

        this.currentDate.setDate(1);
        this.monthDisplay.innerHTML = this.months[this.currentDate.getMonth()];
        this.yearDisplay.innerHTML = this.currentDate.getFullYear();

        const lastDay = new Date(
            this.currentDate.getFullYear(),
            this.currentDate.getMonth() + 1,
            0
        ).getDate();

        const prevLastDay = new Date(
            this.currentDate.getFullYear(),
            this.currentDate.getMonth(),
            0
        ).getDate();

        const firstDayIndex = this.currentDate.getDay();

        const lastDayIndex = new Date(
            this.currentDate.getFullYear(),
            this.currentDate.getMonth() + 1,
            0
        ).getDay();

        const nextDays = 7 - lastDayIndex - 1;
        let days = "";
        for (let x = firstDayIndex; x > 0; x--) {
            days += `<span class="prev">${prevLastDay - x + 1}</span>`;
        }

        for (let i = 1; i <= lastDay; i++) {
            if (
                i === new Date().getDate() &&
                this.currentDate.getMonth() === new Date().getMonth()
            ) {
                days += `<span class="today">${i}</span>`;
            } else {
                days += `<span>${i}</span>`;
            }
        }

        for (let j = 1; j <= nextDays; j++) {
            days += `<span class="next">${j}</span>`;
        }

        this.daysDisplay.innerHTML = days;

    }

    nextMonth() {
        this.currentDate.setMonth(this.currentDate.getMonth() + 1);
        this.calendarInit();
    }

    prevMonth() {
        this.currentDate.setMonth(this.currentDate.getMonth() - 1);
        this.calendarInit();
    }

}
