$(function () {
validate_form();
    validate_form_call();
    validate_form_partners();
    validate_form_table();
mask_phone();

});

function mask_phone() {
    $('#phone, #phone-city, #phone-call, #phone-partners').phonecode({
        preferCo: 'ru'
    });
}




function validate_form() {
    $('.hostel-form').validate({
        rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                    phone: {
                        required: true,
                        digits: true
                    },

            email: {
                required: true,
                email: true
            },
            nomers: {
                required: true,
                // digits: true,
                digits: true,
                range: [1, 1000]
            },
            adults: {
                required: true,
                digits: true,
                range: [1, 1000]
            },
            children: {
        required: true,
                digits: true,
                range: [0, 1000]
    }

        },
        messages: {name: {
                required: "Поле 'Имя' обязательно к заполнению",
                minlength: "Введите не менее 2-х символов в поле 'Имя'"
            },

            phone: {
                required: "Поле 'Телефон' обязательно к заполнению",
                regex: "Необходимо ввести цифры",
                digits: "Необходимо ввести цифры",
            },
            email: {
                required: "Поле 'Email' обязательно к заполнению",
                email: "Необходим формат адреса email"
            },
            nomers: {
                required: "Укажите колличество номеров",
                digits: "Необходимо ввести цифры от 1",
                range: "Необходимо ввести цифры от 1"
            },
            adults: {
                required: "Укажите колличество взрослых",
                digits: "Необходимо ввести цифры от 1",
                range: "Необходимо ввести цифры от 1"
            },
            children: {
                required: "Укажите колличество детей",
                digits: "Необходимо ввести цифры от 0",
                range: "Необходимо ввести цифры от 0"
            }

        }

});
};

function validate_form_table() {
    $('.book-table').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            phone: {
                required: true,
                digits: true
            },

            email: {
                required: true,
                email: true
            },
            date: {
                required: true,
            },
            people: {
                required: true,
                digits: true,
                range: [1, 2000]
            },


        },
        messages: {name: {
                required: "Поле 'Имя' обязательно к заполнению",
                minlength: "Введите не менее 2-х символов в поле 'Имя'"
            },

            phone: {
                required: "Поле 'Телефон' обязательно к заполнению",
                regex: "Необходимо ввести цифры",
                digits: "Необходимо ввести цифры от 1 до 9",
            },
            email: {
                required: "Поле 'Email' обязательно к заполнению",
                email: "Необходим формат адреса email"
            },
            date: {
                required: "Поле 'Дата' обязательно к заполнению",
            },
            people: {
                required: "Укажите колличество человек",
                digits: "Необходимо ввести цифры от 1 до 2000",
                range: "Необходимо ввести цифры от 1  до 2000"
            },


        }

    });
};

function validate_form_call() {
    $('.popup-call').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            phone: {
                required: true,
                digits: true
            },

            email: {
                required: true,
                email: true
            },

        },
        messages: {name: {
                required: "Поле 'Имя' обязательно к заполнению",
                minlength: "Введите не менее 2-х символов в поле 'Имя'"
            },

            phone: {
                required: "Поле 'Телефон' обязательно к заполнению",
                regex: "Необходимо ввести цифры",
                digits: "Необходимо ввести цифры от 1",
            },
            email: {
                required: "Поле 'Email' обязательно к заполнению",
                email: "Необходим формат адреса email"
            },


        }

    });
};


function validate_form_partners() {
    $('.popup_partners').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            phone: {
                required: true,
                digits: true
            },

            email: {
                required: true,
                email: true
            },

        },
        messages: {name: {
                required: "Поле 'Имя' обязательно к заполнению",
                minlength: "Введите не менее 2-х символов в поле 'Имя'"
            },

            phone: {
                required: "Поле 'Телефон' обязательно к заполнению",
                regex: "Необходимо ввести цифры",
                digits: "Необходимо ввести цифры от 1 до 9",
            },
            email: {
                required: "Поле 'Email' обязательно к заполнению",
                email: "Необходим формат адреса email"
            },


        }

    });
};


