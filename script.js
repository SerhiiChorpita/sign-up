let fName = f1.firstName;
let sName = f2.secondName;
let eAdress = f3.emailAdress;
let pos = f5.position;
let agree = f6.checkbox;

let p1 = document.getElementById('name');
let p2 = document.getElementById('email');
let p3 = document.getElementById('profession');

let pagChange = document.getElementById('sign-out');


fName.addEventListener('blur', function () {
    p1.innerHTML = fName.value;
})

sName.addEventListener('blur', function () {
    p1.innerHTML += ' ' + sName.value;
})

eAdress.addEventListener('blur', function () {
    p2.innerHTML = eAdress.value;
})
if (f4.elements[0].checked) {
    document.getElementById('person-image').style.backgroundImage = 'url(image/person/male.png)';
}
function perChoise() {
    if (f4.elements[0].checked) {
        document.getElementById('person-image').style.backgroundImage = 'url(image/person/male.png)';
    }
    else if (f4.elements[1].checked) {
        document.getElementById('person-image').style.backgroundImage = 'url(image/person/female.png)';
    }
}

function posChange() {
    p3.innerHTML = pos.value;
}

function agreeOn() {

    if (f6.checkbox.checked) {
        console.log(document.getElementById('button').hasAttribute('disabled'));
        document.getElementById('button').removeAttribute('disabled');
        document.getElementById('button').style.backgroundColor = 'rgba(69, 189, 103)';
    }
}


function pageChange1() {
    document.getElementsByClassName('page1')[0].style.visibility = 'hidden';
    document.getElementsByClassName('page2')[0].style.visibility = 'visible';
}

console.log(f6.checkbox.checked);

function pageChange2() {
    document.getElementsByClassName('page1')[0].style.visibility = 'visible';
    document.getElementsByClassName('page2')[0].style.visibility = 'hidden';

    fName.value = null;
    sName.value = null;
    eAdress.value = null;
    document.getElementById('person-image').style.backgroundImage = ' ';
    document.getElementById('button').style.backgroundColor = 'rgba(69, 189, 103, 0.527)';
    document.getElementById('button').setAttribute('disabled', 'disabled');
    f6.checkbox.checked = false;
    document.getElementById('person-image').style.backgroundImage = 'url(image/person/male.png)';
    f4.elements[0].checked = true;
    pos.value = 'Choose...';
}