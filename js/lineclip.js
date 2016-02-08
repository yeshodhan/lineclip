$(document).ready(function(){

    $('.clamp').each(function(k,v){
        var $this = $(v);
        var $more = $('<a class="show-more" data-more href="#">More</a>');
        $more.data('content',$this.text());
        $this.find('[data-content]').append($more);
        (function($clamp){
            $clamp.on('click','[data-more]', function(e){
                var content = $(this).data('content');
                $clamp.find('[data-content]').html(content);
                $clamp.removeClass('clamp');
            });
        })($this);
    });

    var showAds = function() {
        $('.content-panel').addClass('col-lg-9');
        $('.custom-ad-panel').removeClass('hidden');
    };

    setTimeout(function(){
        showAds();
    }, 3000);
});