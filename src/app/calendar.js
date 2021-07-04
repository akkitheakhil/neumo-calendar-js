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
        this.selectedDate = { date: this.currentDate.getDate(), month: this.currentDate.getMonth(), year: this.currentDate.getFullYear() };
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
        let curDay;
        let id;
        let year = this.currentDate.getFullYear();
        for (let x = firstDayIndex; x > 0; x--) {
            curDay = prevLastDay - x + 1;
            id = `${curDay},${this.currentDate.getMonth() - 1},${year}`;
            days += `<span class="day prev" id="${id}">${prevLastDay - x + 1}</span>`;
        }

        for (let i = 1; i <= lastDay; i++) {
            id = `${i},${this.currentDate.getMonth()},${year}`;
            if (
                this.isSelectedDate(this.currentDate.getMonth(), i, year)
            ) {
                days += `<span class="day active" id="${id}">${i}</span>`;
            } else {
                days += `<span class="day" id="${id}">${i}</span>`;
            }
        }

        for (let j = 1; j <= nextDays; j++) {
            id = `${j},${this.currentDate.getMonth() + 1},${year}`;
            days += `<span class="day next" id="${id}">${j}</span>`;
        }

        this.daysDisplay.innerHTML = days;
        this.addEventListenerForDates()

    }

    nextMonth() {
        this.currentDate.setMonth(this.currentDate.getMonth() + 1);
        this.calendarInit();
    }

    prevMonth() {
        this.currentDate.setMonth(this.currentDate.getMonth() - 1);
        this.calendarInit();
    }

    addEventListenerForDates() {
        const dates = document.querySelectorAll('.day');
        dates.forEach(day => {
            day.addEventListener('click', () => {
                this.setSelectedDateClass(day);
            })
        })
    }

    isSelectedDate(month, date, year) {
        return this.selectedDate.date === date && this.selectedDate.month === month && this.selectedDate.year === year;
    }

    setSelectedDateClass(date) {
        const dates = document.querySelectorAll('.day');
        const isDisabledDay = date.classList.contains('next') || date.classList.contains('prev');

        if (isDisabledDay) {
            return;
        }
        dates.forEach(day => {
            if (date === day) {
                day.classList.add('active');
                this.setNewSelectedDate(day.id);
            } else {
                day.classList.remove('active');
            }
        });
    }

    setNewSelectedDate(id) {
        const ids = id.split(",");
        const day = ids[0];
        let month;
        let year;

        if (Number(ids[1]) === -1) {
            month = 12;
            year = Number(ids[2]) - 1;
        } else if (Number(ids[1]) === 12) {
            month = 1;
            year = Number(ids[2]) + 1;
        } else {
            month = Number(ids[1]) + 1;
            year = Number(ids[2]);
        }

        const foundDate = `${month}-${day}-${year}`;
        const date = new Date(foundDate);
        this.selectedDate = { date: date.getDate(), month: date.getMonth(), year: date.getFullYear() }

    }

}
