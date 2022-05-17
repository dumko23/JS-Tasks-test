var message;

// if (login == 'Pitter') {
//     message = 'Hi';
// } else if (login == 'Owner') {
//     message = 'Hello';
// } else if (login == '') {
//     message = 'unknown';
// } else {
//     message = '';
// }

// Перепишите `if..else` с использованием нескольких операторов `?`.
message = (login == 'Pitter') ? 'Hi' :
    (login == 'Owner') ? 'Hello' :
    (login == '') ? 'unknown' :
    '';