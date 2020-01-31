(function() {
    //wait jquery
    $(document).ready(function() {

        //create 8 row
        for(let y = 0; y < 8; ++y)
        {
            $('body').append($('<div class="row">'));
        }
        
        //create 8 cases per row
        for(let y = 0; y < 8; ++y)
        {
            $('.row').append($('<div class="case">'));
        }

        //change cases color
        $('.row:even .case:even').css('background', 'black');
        $('.row:odd .case:odd').css('background', 'black');
    });
})();