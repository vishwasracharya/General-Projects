setInterval(() =>{
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    hr.style.transform = `rotate(${hrotation}deg)`;
    mn.style.transform = `rotate(${mrotation}deg)`;
    sc.style.transform = `rotate(${srotation}deg)`;

}, 1000);

// LOGIC-2
// const deg = 6;
//         const hr = document.querySelector('#hr');
//         const mn = document.querySelector('#mn');
//         const sc = document.querySelector('#sc');

//         setInterval(() => {

//             let day = new Date();
//             let hh = day.getHours() + 30;
//             let mm = day.getMinutes() + deg;
//             let ss = day.getSeconds() + deg;

//             hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;
//             mn.style.transform = `rotateZ(${mm}deg)`;
//             sc.style.transform = `rotateZ(${ss}deg)`;
//         })