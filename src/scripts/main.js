AOS.init();

const eventDate = new Date("Jan 17, 2025 20:00:00");
const eventTimeStamp = eventDate.getTime();

const countTime = setInterval(function(){
    const now = new Date();
    const currentTimeStamp = now.getTime();

    const eventDistance = eventTimeStamp - currentTimeStamp;

    const daysUntilEvent = Math.floor(eventDistance / (1000 * 60 * 60 * 24));
    const hoursUntilEvent = Math.floor((eventDistance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
    const minutesUntilEvent = Math.floor(eventDistance % (1000 * 60 * 60) / (1000 * 60));
    const secondsUntilEvent = Math.floor(eventDistance % (1000 * 60) / 1000);

    document.getElementById('timer').innerHTML = `${daysUntilEvent}d ${hoursUntilEvent}h ${minutesUntilEvent}m and ${secondsUntilEvent}s.`;

    if(eventDistance < 0){
        clearInterval(countTime);
        document.getElementById('expired').innerHTML = 'has already passed :(';
    }

}, 1000)