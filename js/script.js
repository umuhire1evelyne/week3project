$(document).ready(function() {
    $(".our").click(function(){
        $("#one").toggle();
            $(".par").toggle();    
    });

    $(".all").click(function(){
        $("#two").toggle();
            $(".para").toggle();    
    });
    $(".planning").click(function(){
        $("#three").toggle();
            $(".parag").toggle();    
    });

    $("#b").hide();
    $("#work1").animate({
        opacity: 1
    });
    $("#work1").hover(function(){
        $(this).stop().animate({opacity:0.3});
        $("#b").fadeIn();
    }, function(){
        $(this).stop().animate({opacity:1},500);
        $("#b").fadeOut();
});

$("#o").hide();
    $("#work2").animate({
        opacity:1
    });
    $("#work2").hover(function(){
        $(this).stop().animate({opacity:0.3});
        $("#o").fadeIn();
    }, function(){
        $(this).stop().animate({opacity:1},500);
        $("#o").fadeOut();
});

$("#g").hide();
    $("#work3").animate({
        opacity:1
    });
    $("#work3").hover(function(){
        $(this).stop().animate({opacity:0.3},);
        $("#g").fadeIn();
    }, function(){
        $(this).stop().animate({opacity:1},500);
        $("#g").fadeOut();
});

$("#a").hide();
    $("#work4").animate({
        opacity:1
    });
    $("#work4").hover(function(){
        $(this).stop().animate({opacity:0.3},);
        $("#a").fadeIn();
    }, function(){
        $(this).stop().animate({opacity:1},500);
        $("#a").fadeOut();
});

$("#d").hide();
    $("#work5").animate({
        opacity:1
    });
    $("#work5").hover(function(){
        $(this).stop().animate({opacity:0.3},);
        $("#d").fadeIn();
    }, function(){
        $(this).stop().animate({opacity:1},500);
        $("#d").fadeOut();
});

$("#u").hide();
    $("#work6").animate({
        opacity:1
    });
    $("#work6").hover(function(){
        $(this).stop().animate({opacity:0.3},);
        $("#u").fadeIn();
    }, function(){
        $(this).stop().animate({opacity:1},500);
        $("#u").fadeOut();
});

$("#l").hide();
    $("#work7").animate({
        opacity:1
    });
    $("#work7").hover(function(){
        $(this).stop().animate({opacity:0.3},);
        $("#l").fadeIn();
    }, function(){
        $(this).stop().animate({opacity:1},500);
        $("#l").fadeOut();
});

$("#r").hide();
    $("#work8").animate({
        opacity:1
    });
    $("#work8").hover(function(){
        $(this).stop().animate({opacity:0.3},);
        $("#r").fadeIn();
    }, function(){
        $(this).stop().animate({opacity:1},500);
        $("#r").fadeOut();
});
$("#sub").click(function(){
    var yourName=$("#name").val();
    var yourMail=$("#mail").val();
    var yourText=$("#text").val();
    alert(yourName + "we have received your message, Thank you for reaching out to us.");
});
})
