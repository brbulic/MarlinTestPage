(function () {
    'use strict';

    var createableElements = [];

    for (var i = 1; i <= 6; i++) {
        createableElements.push('<img class="img-polaroid" src="img/Image', i, '.jpg" />');
    }

    $("#image-container").html(createableElements.join(''));

    $("#intro-form").on('submit', function (event) {
        var resultObject = $(event.currentTarget).serializeObject();
        if (typeof resultObject.name !== 'undefined' && resultObject.name !== '') {
            window.alert("Welcome " + resultObject.name);
        }

        console.log(JSON.stringify(resultObject));

        return false;
    });
}());