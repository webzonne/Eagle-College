function chequeo (){
    let nav = document.getElementById("nav-mobile");
    if (nav.style.display=="block"){
        nav.style.display="none";
    }else{
        nav.style.display="block";
    }
}

$("#checkbox").click(function(){
    chequeo();
})
