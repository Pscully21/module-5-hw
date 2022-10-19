// day and time needs to be displayed 
// color code indication w/css
// when timeblock is clicked can add something 
// when clicked save it saves it to local storage 
// when refreshed all of the content is still there 
$(document).ready(function () {

    var init = false;
    var now = moment().format('LLLL');
    let now12 = moment().format('h');
    if (init) {
        now12 = 1;
    }
    const todaysDate = $('#currentDay');
    todaysDate.text(now);

    var currentDate = new Date();
    var hour = currentDate.getHours();

    for (var i = 7; i < 22; i++) {
        if (i < hour) {
            document.getElementById(i.toString()).classList.add('past');
        } else if (i === hour) {
            document.getElementById(i.toString()).classList.add('present');
        } else if (i > hour) {
            document.getElementById(i.toString()).classList.add('future');
        }
    }
    {
        $('.saveBtn').click(function() {
            var hour7 = document.getElementById('7').value;
            localStorage.setItem('text7', hour7);
            var hour8 = document.getElementById('8').value;
            localStorage.setItem('text8', hour8);
            var hour9 = document.getElementById('9').value;
            localStorage.setItem('text9', hour9);
            var hour10 = document.getElementById('10').value;
            localStorage.setItem('text10', hour10);
            var hour11 = document.getElementById('11').value;
            localStorage.setItem('text11', hour11);
            var hour12 = document.getElementById('12').value;
            localStorage.setItem('text12', hour12);
            var hour13 = document.getElementById('13').value;
            localStorage.setItem('text13', hour13);
            var hour14 = document.getElementById('14').value;
            localStorage.setItem('text14', hour14);
            var hour15 = document.getElementById('15').value;
            localStorage.setItem('text15', hour15);
            var hour16 = document.getElementById('16').value;
            localStorage.setItem('text16', hour16);
            var hour17 = document.getElementById('17').value;
            localStorage.setItem('text17', hour17);
            var hour18 = document.getElementById('18').value;
            localStorage.setItem('text18', hour18);
            var hour19 = document.getElementById('19').value;
            localStorage.setItem('text19', hour19);
            var hour20 = document.getElementById('20').value;
            localStorage.setItem('text20', hour20);
            var hour21 = document.getElementById('21').value;
            localStorage.setItem('text21', hour21);
        });
    }
    var stored7 = localStorage.getItem('text7');
    document.getElementById('7').value = stored7;
    var stored8 = localStorage.getItem('text8');
    document.getElementById('8').value = stored8;
    var stored9 = localStorage.getItem('text9');
    document.getElementById('9').value = stored9;
    var stored10 = localStorage.getItem('text10');
    document.getElementById('10').value = stored10;
    var stored11 = localStorage.getItem('text11');
    document.getElementById('11').value = stored11;
    var stored12 = localStorage.getItem('text12');
    document.getElementById('12').value = stored12;
    var stored13 = localStorage.getItem('text13');
    document.getElementById('13').value = stored13;
    var stored14 = localStorage.getItem('text14');
    document.getElementById('14').value = stored14;
    var stored15 = localStorage.getItem('text15');
    document.getElementById('15').value = stored15;
    var stored16 = localStorage.getItem('text16');
    document.getElementById('16').value = stored16;
    var stored17 = localStorage.getItem('text17');
    document.getElementById('17').value = stored17;
    var stored18 = localStorage.getItem('text18');
    document.getElementById('18').value = stored18;
    var stored19 = localStorage.getItem('text19');
    document.getElementById('19').value = stored19;
    var stored20 = localStorage.getItem('text20');
    document.getElementById('20').value = stored20;
    var stored21 = localStorage.getItem('text21');
    document.getElementById('21').value = stored21;
});