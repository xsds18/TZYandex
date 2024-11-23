const currentdate = new Date();

function dateLog() {
    return (console.log(
        `Сегодня ${currentdate.toLocaleString('ru', {
            weekday: 'long'
        })}` + `\n` + `Текущее время: ${currentdate.getHours()}:${currentdate.getMinutes()}:${currentdate.getSeconds()}`
    ));
}

function date2() {
    return console.log(`${currentdate.getDate()}-${currentdate.getMonth()+1}-${currentdate.getFullYear()}`)
}

function findVisokosny() {
    let currentYear = currentdate.getFullYear();
    let ans = '';
    currentYear % 4 == 0 && currentYear % 100 != 0 || currentYear % 400 == 0 ? ans = 'високосный': ans = 'не високосный';
    return (console.log(ans));
}

function findSundaysOnJanuaryFirst(startYear, endYear) {
    for (let year = startYear; year <= endYear; year++) {
        const date = new Date(year, 0, 1); // 0 - январь, 1 - первое число
        if (date.getDay() === 0) { // 0 - воскресенье
            console.log(`${year}: 1 января - Воскресенье`);
        }
    }
}

function daysUntilChristmas() {
    const today = new Date(); 
    let nextChristmas = new Date(today.getFullYear(), 11, 25); // Рождество 25 декабря

    if (today > nextChristmas) {
        nextChristmas.setFullYear(today.getFullYear() + 1);
    }

    const diffTime = nextChristmas - today;

    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    console.log(`До следующего Рождества осталось ${diffDays} дней.`);
}


dateLog();
date2();
findVisokosny();
findSundaysOnJanuaryFirst(2014, 2050);
daysUntilChristmas();