let indice=0;
$(".btn li").eq(0).css("background", "white");


/*BTN */
$(".btn li").click(function(){
clearInterval(timer);
indice= $(this).index();
$(".btn li").css("background", "#F37A1F");
$(this).css("background", "white");
$(".slider").hide();
$(".slider").eq(indice).fadeIn();
});

/* FLECHAS */

/*derecha*/
$(".dere").click(function(){
    clearInterval(timer);
    indice++;
    if (indice > 2){
        indice = 0;
    };
$(".slider").hide();
$(".slider").eq(indice).fadeIn();
$(".btn li").css("background", "#F37A1F");
$(".btn li").eq(indice).css("background", "white");
});

/*izq */
$(".izq").click(function(){
    clearInterval(timer);
    indice--;
    if (indice < 0){
        indice = 2;
    };
$(".slider").hide();
$(".slider").eq(indice).fadeIn();
$(".btn li").css("background", "#F37A1F");
$(".btn li").eq(indice).css("background", "white");
})

/* Automatico */

function auto(){
    indice ++;
    if(indice >2){
        indice =0;
    };
$(".slider").hide();
$(".slider").eq(indice).fadeIn(1000);
$(".btn li").css("background", "#F37A1F");
$(".btn li").eq(indice).css("background", "white");
};

var timer= setInterval(auto,3800);


