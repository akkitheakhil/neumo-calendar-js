export default class Calendar{months=["January","February","March","April","May","June","July","August","September","October","November","December"];constructor(t,e,a){this.monthDisplay=t,this.daysDisplay=e,this.yearDisplay=a,this.currentDate=new Date,this.calendarInit()}calendarInit(){this.currentDate.setDate(1),this.monthDisplay.innerHTML=this.months[this.currentDate.getMonth()],this.yearDisplay.innerHTML=this.currentDate.getFullYear();const t=new Date(this.currentDate.getFullYear(),this.currentDate.getMonth()+1,0).getDate(),e=new Date(this.currentDate.getFullYear(),this.currentDate.getMonth(),0).getDate(),a=this.currentDate.getDay(),n=7-new Date(this.currentDate.getFullYear(),this.currentDate.getMonth()+1,0).getDay()-1;let r="";for(let t=a;t>0;t--)r+=`<span class="prev">${e-t+1}</span>`;for(let e=1;e<=t;e++)e===(new Date).getDate()&&this.currentDate.getMonth()===(new Date).getMonth()?r+=`<span class="today">${e}</span>`:r+=`<span>${e}</span>`;for(let t=1;t<=n;t++)r+=`<span class="next">${t}</span>`;this.daysDisplay.innerHTML=r}nextMonth(){this.currentDate.setMonth(this.currentDate.getMonth()+1),this.calendarInit()}prevMonth(){this.currentDate.setMonth(this.currentDate.getMonth()-1),this.calendarInit()}}