$(document).ready(function() {
    let token = '7099171a6cd213e9eb76be498594881011c57435';

    $('#fullname').suggestions({
        token: token,
        type: 'NAME',
        /* Вызывается, когда пользователь выбирает одну из подсказок */
        onSelect: function(suggestion) {
            console.log(suggestion);
        }
    });

    $('#email').suggestions({
        token: token,
        type: 'EMAIL',
        /* Вызывается, когда пользователь выбирает одну из подсказок */
        onSelect: function(suggestion) {
            console.log(suggestion);
        }
    });

    $('#party').suggestions({
        token: token,
        type: 'PARTY',
        /* Вызывается, когда пользователь выбирает одну из подсказок */
        onSelect: function(suggestion) {
            console.log(suggestion);
        }
    });

    $('#fms_unit').suggestions({
        token: token,
        type: 'fms_unit',
        /* Вызывается, когда пользователь выбирает одну из подсказок */
        onSelect: function(suggestion) {
            console.log(suggestion);
        }
    });

    $('#address').suggestions({
        token: token,
        type: 'ADDRESS',
        /* Вызывается, когда пользователь выбирает одну из подсказок */
        onSelect: function(suggestion) {
            console.log(suggestion);
        }
    });
});