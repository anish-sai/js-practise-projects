

setInterval(() => {

    let currentTimeStamp = Date.now()  // ehh to fix time hai isi liye setInterval k bahar likh sakte hai


    let olympicTimeStamp = new Date(2028, 6, 14).getTime();

    let remainingTime = olympicTimeStamp - currentTimeStamp

 
    const days = Math.floor((remainingTime) / (1000 * 60 * 60 * 24))

    remainingTime %= 1000 * 60 * 60 * 24;    //   %= ----> remainder nikal kar wahi variable me store kar deta hai

    const hour = Math.floor((remainingTime) / (1000 * 60 * 60))
    remainingTime %= 1000 * 60 * 60;

    const minute = Math.floor((remainingTime) / (1000 * 60))
    remainingTime %= 1000 * 60;

    const second = Math.floor((remainingTime) / (1000))
    remainingTime %= 1000;

    const h2 = document.querySelector('h2')

    h2.textContent = `${days}:Days ${hour}:Hours ${minute}:Minutes ${second}:Seconds`
}, 1000);