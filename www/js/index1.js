$(document).ready(function(){
    var height = $(window).height();  //getting windows height
    console.log(height);
    var width= $(window).width();
    console.log(width+" "+width/2);
    var widthd=$('#myCarousel').width();
    var isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
    console.log(isMobile);
    jQuery('#lobdropdown').css('margin-top',(height/2)+100+'px');   //and setting height of carousel    
    if(isMobile){
        jQuery('#lobdropdown').css('margin-left',50+'%');   //and setting width of carousel      
    }
      else{
        jQuery('#lobdropdown').css('margin-left',48+'rem');   //and setting width of carousel
      }   
    jQuery('#pet').css('height',height+'px');   //and setting height of carousel
    jQuery('#pet').css('width',width+'px');   //and setting height of carousel 
    jQuery('#travel').css('height',height+'px');   //and setting height of carousel
    jQuery('#travel').css('width',width+'px');   //and setting height of carousel 
    jQuery('#mobile').css('height',height+'px');   //and setting height of carousel
    jQuery('#mobile').css('width',width+'px');   //and setting height of carousel    
 });