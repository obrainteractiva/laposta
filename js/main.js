$(document).ready(function(){
    //tabs
    $(".tabs").tabs({
        show : function(event, ui) {
            $(ui.panel).jScrollPane();  
        } 
    });
    
    //scrollpane
    $('.scroll-pane').jScrollPane();
    
});

