function mostrarMenu(){
    $('header nav#b ul#principal').css('display', 'flex');
    $('header nav#b ul#principal').addClass('animate__animated animate__fadeInRight animate__slow');

    $('header nav#b ul#icone li#menu').css('display', 'none');
    $('header nav#b ul#icone li#menux').css('display', 'flex');
}

function esconderMenu(){
    $('header nav#b ul#principal').css('display', 'none');
    $('header nav#b ul#icone li#menu').css('display', 'flex');
    $('header nav#b ul#icone li#menux').css('display', 'none');
}

let controle = true; 

$('header nav#b ul#icone li#menu').click(function(){
    if(controle){
        mostrarMenu();
        controle = false;
    } else {
        esconderMenu();
        controle = true;
    }
});

$('header nav#b ul#icone li#menux').click(function(){
    esconderMenu();
    controle = true;
});
