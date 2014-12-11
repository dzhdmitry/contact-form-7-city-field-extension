window.onload = function initialize_pfce() {
    function createAutoComplete(element) {
        return new google.maps.places.Autocomplete(element, { types: ['(cities)'] });
    }

    var elements = document.getElementsByClassName('wpcf7-autocomplete');

    for (var i=0; i<elements.length; i++) {
        createAutoComplete(elements[i]);
    }
};