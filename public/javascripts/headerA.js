const permission = document.querySelector('#ageProofer');
const nav = document.querySelector('.navLinks');
const inputD = document.querySelector('#cal');

document.querySelector('.hamburger').addEventListener('click', navToggle);


permit()

function cookieCheck(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    console.log('works')
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function permit() {
    var pVal = cookieCheck("ageProofC");
    console.log(pVal)
    if (pVal === "true") {
        permission.style.visibility = "hidden";
        console.log('went through')
    }
  }


document.querySelector('.hamburger').addEventListener('click', navToggle);

function navToggle() {
    if (nav.style.display === "block") {
        nav.style.display = "none";
    } 
    else {
        nav.style.display = "block";
        }
    }