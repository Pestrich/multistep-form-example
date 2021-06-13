$(document).ready(function() {
    let form = $('.js-validation-form');

    let validator = form.validate({
        rules: {
            fullname: {
                required: true,
                // nowhitespace: true,
            },
            email: {
                required: true,
                email: true,
            },
            party: {
                required: true,
            },
            fms_unit: {
                required: true,
            },
            address: {
                required: true,
            },
            phone: {
                required: true,
                minlength: 18,
                maxlength: 18,
            },
            // тестовые
            name: {
                required: true,
                minlength: 3,
            },
            surname: {
                required: true,
                minlength: 3,
            },
        },
        messages: {
            fullname: {
                required: 'Поле не заполнено.',
            },
            email: {
                required: 'Поле не заполнено.',
                email: 'Введите корректный email.',
            },
            party: {
                required: 'Поле не заполнено.',
            },
            fms_unit: {
                required: 'Поле не заполнено.',
            },
            address: {
                required: 'Поле не заполнено.',
            },
            phone: {
                required: 'Поле не заполнено.',
                minlength: 'Введите корректный номер телефона.',
                maxlength: 'Введите корректный номер телефона.',
            },
            // тестовые
            name: {
                required: 'Поле не заполнено.',
                minlength: $.validator.format('Должно быть не менее {0} символов.'),
            },
            surname: {
                required: 'Поле не заполнено.',
                minlength: $.validator.format('Должно быть не менее {0} символов.'),
            },
        },
        invalidHandler: function() {
            console.log(validator.numberOfInvalids())
        }
    });

    /* Custom Methods */
    $.validator.addMethod('nowhitespace', function(value, element) {
        return this.optional(element) || /^\S+$/i.test(value);
    }, 'No white space please.');
    /* End Custom Methods */
});
