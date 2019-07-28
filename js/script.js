$(document).ready(function() {
    $(".our").click(function(){
        $(".par1").toggle();
            $("#1").toggle();    
    });
    $(".all").click(function(){
        $(".par2").toggle();
            $("#2").toggle();
    });
    $(".planning").click(function(){
        $(".par3").toggle();
            $("#3").toggle();
    });
    $(".hover").hide();
    $(".work").animate({
        opacity:1
    });
    $(".work").hover(function(){
        $(this).stop().animate({opacity:.4}, 200);
        $(".hover").fadein();
    }, function(){
        $(this).stop().animate({opacity:2},500);
        $(".hover").fadeout();
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
