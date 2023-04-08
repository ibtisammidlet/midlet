//* on navigation , check url, do, otherwise
window.onbeforeunload = const checkURL = () => window.location.href.includes("https://discord.com/login") ? /* Do something */ $(".appMount-2yBXZl", "body").css("background", "var(--bg-overlay-app-frame,url(https://i.imgur.com/PKRXF8e.jpeg))") : /* Do something else */ $(".appMount-2yBXZl", "body").css("background", "var(--bg-overlay-app-frame,var(--background-tertiary))")  ;


// this will express date where it placed
var date = new Date(); console.log(date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate());