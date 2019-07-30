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
});

// $(document).ready(function() {
//     $("#wo").hide();
//     $("#work").animate({
//         opacity:1
//     });
//     $("work").hover(function(){
//         $(this).stop().css({opacity:.3},30);
//         $(wor).fadein();
//     }, function(){
//         $(this).stop().css({opacity:1},500)
//         $(wor).fadeout();
//     });
// });
// $(document).ready(function(){
//     $("#work1").hover(function(){
//         $(this).stop().css({opacity:.3},30);
//         $(this).fadein();
//     }, function(){
//         $(this).stop().css({opacity:1},500);
//         $(this).fadeout();
//     });
//     });
// $(document).ready(function(){
//     $("#work2").hover(function(){
//         $(this).stop().css({opacity:.3},30);
//         $(this).fadein();
//     }, function(){
//         $(this).stop().css({opacity:1},500);
//         $(this).fadeout();
//     });
//     });
// $(document).ready(function(){
//     $("#work3").hover(function(){
//             $(this).stop().css({opacity:.3},30);
//             $(this).fadein();
//         }, function(){
//             $(this).stop().css({opacity:1},500);
//             $(this).fadeout();
//         });
//         });
// $(document).ready(function(){
//     $("#work4").hover(function(){
//             $(this).stop().css({opacity:.3},30);
//             $(this).fadein();
//         }, function(){
//             $(this).stop().css({opacity:1},500);
//             $(this).fadeout();
//         });
//         });
// $(document).ready(function(){
//     $("#work5").hover(function(){
//             $(this).stop().css({opacity:.3},30);
//             $(this).fadein();
//         }, function(){
//             $(this).stop().css({opacity:1},500);
//             $(this).fadeout();
//         });
//         });
// $(document).ready(function(){
//     $("#work6").hover(function(){
//             $(this).stop().css({opacity:.3},30);
//             $(this).fadein();
//         }, function(){
//             $(this).stop().css({opacity:1},500);
//             $(this).fadeout();
//         });
//         });
// $(document).ready(function(){
//     $("#work7").hover(function(){
//             $(this).stop().css({opacity:.3},30);
//             $(this).fadein();
//         }, function(){
//             $(this).stop().css({opacity:1},500);
//             $(this).fadeout();
//         });
//         });
//     }
