<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>MultiStep Form</title>

    <!-- CSS Libs -->
    <link href="https://cdn.jsdelivr.net/npm/suggestions-jquery@20.3.0/dist/css/suggestions.min.css" rel="stylesheet"/>
    <!-- End CSS Libs -->
    <!-- Custom CSS -->
    <link rel="stylesheet" type="text/css" href="css/form.style.css">
    <!-- End Custom CSS -->
    <!-- JS Libs -->
    <script src="js/libs/jquery-3.5.1.min.js"></script>
    <!-- <script src="js/libs/cleave.min.js"></script> -->
    <!-- <script src="js/libs/cleave-phone.ru.js"></script> -->
    <script src="js/libs/jquery.validate.min.js"></script>
    <script src="js/libs/jquery.mask.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/suggestions-jquery@20.3.0/dist/js/jquery.suggestions.min.js"></script>
    <!-- <script src="js/libs/additional-methods.js"></script> -->
    <!-- End JS Libs -->
    <!-- Custom JS -->
    <script src="js/form-navigation.js"></script>
    <script src="js/form-validation.js"></script>
    <script src="js/form-dadata.js"></script>
    <script src="js/form-mask.js"></script>
    <!-- End Custom JS -->
</head>
<body>
    <?php
    echo "<pre>";
    print_r($_POST);
    echo "</pre>";
    ?>

    <form action="" method="post" class="js-validation-form">
        <ul id="stepBar">
            <li>General Information</li>
            <li>Submit</li>
        </ul>

        <fieldset>
            <p>
                <label for="fullname">ФИО:</label>
                <input id="fullname" name="fullname" type="text">
            </p>
            <p>
                <label for="email">Email:</label>
                <input id="email" name="email" type="text">
            </p>
            <p>
                <label for="party">Организация:</label>
                <input id="party" name="party" type="text">
            </p>
            <p>
                <label for="fms_unit">Кем выдан паспорт:</label>
                <input id="fms_unit" name="fms_unit" type="text">
            </p>
            <p>
                <label for="address">Адрес:</label>
                <input id="address" name="address" type="text">
            </p>
            <p>
                <label for="phone">Телефон:</label>
                <input id="phone" name="phone" type="text">
            </p>
        </fieldset>

        <fieldset>
            <p>
                <label for="name">Имя:</label>
                <input type="text" name="name">
            </p>

            <p>
                <label for="surname">Фамилия:</label>
                <input type="text" name="surname">
            </p>

            <p>
                <label for="patronymic">Отчество:</label>
                <input type="text" name="patronymic">
            </p>
        </fieldset>

        <div class="form-navigation">
            <button type="button" id="previousButton">Назад</button>
            <button type="button" id="nextButton">Далее</button>
            <button type="submit" id="submitButton">Отправить</button>
        </div>
    </form>
</body>
</html>
