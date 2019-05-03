(function($) {
    var re = /([^&=]+)=?([^&]*)/g;
    var decodeRE = /\+/g;  // Regex for replacing addition symbol with a space
    var decode = function (str) {return decodeURIComponent( str.replace(decodeRE, " ") );};
    $.parseParams = function(query) {
        var params = {}, e;
        while ( e = re.exec(query) ) {
            var k = decode( e[1] ), v = decode( e[2] );
            if (k.substring(k.length - 2) === '[]') {
                k = k.substring(0, k.length - 2);
                (params[k] || (params[k] = [])).push(v);
            }
            else params[k] = v;
        }
        return params;
    };

    $.mergeParams = function(urlParams, formParams) {
        $.each(formParams, function(i, el) {
            if((el.name == 'FILTER_OBJECT') && (!urlParams.FILTER_OBJECT || el.value != urlParams.FILTER_OBJECT)) {
                urlParams.FILTER_OBJECT = el.value;
            }
            if((el.name == 'FILTER_STAGE') && (!urlParams.FILTER_STAGE || el.value != urlParams.FILTER_STAGE)) {
                urlParams.FILTER_STAGE = el.value;
            }
            if((el.name == 'FILTER_HIERARCHY') && (!urlParams.FILTER_HIERARCHY || el.value != urlParams.FILTER_HIERARCHY)) {
                urlParams.FILTER_HIERARCHY = el.value;
            }
            if((el.name == 'q') && (!urlParams.q || el.value != urlParams.q)) {
                urlParams.q = el.value;
            }
        });
        return urlParams;
    };

    $.submitHandler = function(form) {
        var action      = form.attr('action');
        var formParams  = form.serializeArray();
        var params      = window.location.href.split('?');

        var urlParams   = {};
        if(params[1]) {
            var urlParams   = $.parseParams(params[1]);
        }

        urlParams = $.mergeParams(urlParams, formParams);
        window.location.href = action + '?' + $.param(urlParams);
    };

})(jQuery);

window.onload = function() {

    var filterForm = $('.jsManualFilter');
    var filterElements = filterForm.find('select');
    filterElements.change(function(ev) {
        $.submitHandler(filterForm);
    });

    var searchForm = $('.jsSearchForm');
    var inputSubmit = searchForm.find('input[type=submit]');
    inputSubmit.click(function(ev){
        ev.preventDefault();
        $.submitHandler(searchForm);
    });
};