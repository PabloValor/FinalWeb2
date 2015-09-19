$(document).on('ready', function() {
    console.info("DOM ready...");
    $.ajax({
        url: 'API/about',
        dataType: 'json',
        method: 'get',
        success: function (data){
            console.log(JSON.parse(data));
        }
    });
});