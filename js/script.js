$( document ).ready( function(){
    var moveAside = $(".moveaside")
    var newAside = $(".newaside")
    var maxWidth = $(window).width()
    console.log(maxWidth);
    
    window.onorientationchange = function() {
        var orientation = window.orientation;
            switch(orientation) {
                case 0:
                case 90:
                case -90: window.location.reload();
                break; }
    };
    
    if ( maxWidth <= 768 ) {
        newAside.append(moveAside)
    }

})