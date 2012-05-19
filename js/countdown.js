function counter(interval, timeStamp) {

    var counterPlus = function (tempTimer) {
        if(document.getElementById('timeback'))    {
            document.getElementById('timeback').innerHTML = tempTimer;
        }
    ;
    }
    var now = new Date();
    var days;
    var hours;
    var minutes;
    var seconds;
    var totalSeconds = (parseInt(now.getTime()/1000));
    var RemainsSec = (timeStamp - totalSeconds);
    
    if(RemainsSec <= 0) {
        tempTimer ='<a href="/task">Финал Стартовал!</a>';
    }
    var days_word = " дней "
    days = parseInt(RemainsSec/86400);
    var diff_ = RemainsSec%86400;
    hours = parseInt(diff_/3600);
    var diff__ = diff_%3600;
    minutes = parseInt(diff__/60);
    seconds = RemainsSec%60;
    days_word = pluralForm(days, 'день', 'дня', 'дней'); 
    minutes_word = pluralForm(minutes, 'минута', 'минуты', 'минут');
    seconds_word = pluralForm(seconds, 'секунда', 'секунды', 'секунд');
    hours_word = pluralForm(hours, 'час', 'часа', 'часов');
   
    var day_show = false;
    var tempTimer = '';
    if(days != '0') {
        tempTimer = '<div id="timeback"><span id="days"> ' +days+ '<span class="words">' +days_word+ '</span></span>';
        day_show = true;
    } 
    if(hours != '0') {
        tempTimer += '<span id="hours"> '+hours + '<span class="words">' + hours_word + '</span></span>';
    }
    if(minutes != '0') {
        tempTimer += '<span id="minutes">' +minutes+  '<span class="words">' +minutes_word+ '</span></span>';
    }
   
        tempTimer += '<span id="seconds"> ' +seconds+'<span class="words">' +seconds_word+ '</span></span></div>';

    if(RemainsSec <= 0) {
        tempTimer ='<a href="/task">Финал Стартовал!</a>';
    }
    counterPlus(tempTimer);
    setTimeout(function(){counter(interval, timeStamp)},interval);
}

 window.onload1 = counter('1000', '1354838399');
/**
 * @form1 письмо секунда минута час день 
 * @form2 письма секунды минуты часа дня
 * @form5 писем секунд минут часов дней
 */
function pluralForm(n, form1, form2, form5) {
    n = Math.abs(n) % 100;
    n1 = n % 10;
    if (n > 10 && n < 20) return form5;
    if (n1 > 1 && n1 < 5) return form2;
    if (n1 == 1) return form1;
    return form5;
}