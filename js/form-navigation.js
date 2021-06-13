$(document).ready(function() {
    let fieldsets = $('fieldset');
    let steps = $('#stepBar li');
    let form = $('.js-validation-form');

    function navigateTo(index) {
        // Mark the current fieldset with the class 'current'
        fieldsets.removeClass('current').eq(index).addClass('current');
        // Mark the current step with the class 'current'
        steps.removeClass('current').eq(index).addClass('current');

        // Show only the navigation buttons that make sense for the current fieldset:
        $('#previousButton').toggle(index > 0);

        let atTheEnd = index >= fieldsets.length - 1;

        $('#nextButton').toggle(!atTheEnd);
        $('#submitButton').toggle(atTheEnd);
    }

    function curIndex() {
        // Return the current index by looking at which fieldset has the class 'current'
        return fieldsets.index(fieldsets.filter('.current'));
    }

    // Previous button is easy, just go back
    $('#previousButton').click(function() {
        navigateTo(curIndex() - 1);
    });

    // Next button goes forward iff current block validates
    $('#nextButton').click(function() {
        if (form.valid()) {
            navigateTo(curIndex() + 1);
        }
    });

    $('#submitButton').click(function() {
        if (form.valid()) {
            form.submit();
        }
    });

    // Prepare sections by setting the `data-parsley-group` attribute to 'block-0', 'block-1', etc.
    fieldsets.each(function(index, fieldset) {
        $(fieldset).find(':input').attr('data-parsley-group', 'block-' + index);
    });

    // Start at the beginning
    navigateTo(0);
});
