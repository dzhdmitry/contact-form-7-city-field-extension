window.onload = function initialize_pfce() {
    var DEFAULT_TYPE = "(cities)";

    function createAutoComplete(element) {
        var ac_type = element.getAttribute("data-type");

        if (ac_type == null) {
            ac_type = DEFAULT_TYPE;
        }

        return new google.maps.places.Autocomplete(element, { types: [ac_type] });
    }

    var elements = document.getElementsByClassName('wpcf7-autocomplete');

    for (var i=0; i<elements.length; i++) {
        createAutoComplete(elements[i]);
    }
};