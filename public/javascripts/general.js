const heroActive = document.querySelector('.hero');
const singleD = 1000 * 60 * 60 * 24;
var bDate; 
var initProf;

document.querySelector('#bDateSub').addEventListener('click', bDateCheck);

/*
initSetCookie();
function initSetCookie() {
    document.cookie = "ageProofC" + "=" + false + ";";
}
*/

function bDateCheck(){
    bDate = document.querySelector('.cal').value; 
    var dateDif = Math.abs (new Date(bDate) - new Date());
    console.log(dateDif);
    var daysOld = (dateDif / singleD);
    console.log(daysOld);
    if (daysOld < 7665) {
        document.cookie = "ageProofC" + "=" + false + ";";
        console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
    }
    else {
        document.cookie = "ageProofC" + "=" + true + ";";
    }
}