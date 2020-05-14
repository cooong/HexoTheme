    var p=0,t=0;
  
    $(window).scroll(function(e){  
            p = $(document).scrollTop();  
              
            if(t<p){
                $('#home,#navbox').css("display", "none");
            }  
              
            else{
                $("#home").css("display", "inline");
                $("#ball").css("display","inline");
                $('#openball,#navbox').css("display","none");
            }  
            t = p;
    });  
function navbox(){
    
    if($('#ball').is(':hidden')){
    $("#ball").css("display","inline");
    $('#openball').css("display","none");
    } else {
    $("#ball").css("display","none");
    $('#openball').css("display","inline");
    };
    $("#navbox").animate({height:'toggle'});
}
function index(){
    window.open('/','_self');
}