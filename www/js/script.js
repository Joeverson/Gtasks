$(function(){
	$('.ui-loader').remove(); // coisa chata que a api do jquery mobile coloca e nao sei tirar ^^
	
    //****  chamadas de paginas iniciais   ***/
    controllers.page(controllers.baseURL()+"includes/page.view.tasks.html", ".body-contents");


    /////>>>>>>>>> Menu para abrir e esconder
    jQuery( "body" ).on( "swiperight", function( event ) {
       actions.showMenu().hideTop();
        $('.move-days').css({display:'none'});
    });

    jQuery( "body" ).on( "swipeleft", function( event ) {
        actions.hideMenu().showTop();
    });

});

function events(){ // função onde vai ficar todos os eventos para o sistema

    // chamada para abrir a pagina de detalhes das tarefas
    jQuery( ".card" ).on( "tap", function( event ) {
        $('.contents').animate({ opacity: '0'}, 300);
        setTimeout(function(){
            controllers.page(controllers.baseURL()+"includes/popup.details.tasks.html", ".body-contents");
        },100);

    });

    // chamada para abrir as tarefas do dia
    jQuery( ".box-details-tasks .exit-box" ).on( "tap", function( event ) {
        $('.box-details-tasks').remove();
        controllers.page(controllers.baseURL()+"includes/page.view.tasks.html", ".body-contents");
    });

    // chamada para adicionar uma nova task
    jQuery( ".btn-add" ).on( "tap", function( event ) {
        actions.hideMenu();
        controllers.page(controllers.baseURL()+"includes/page.new.task.html", ".body-contents");
    });


    // chamada para salvar a nova task
    jQuery( ".box-form-ini .priority" ).on( "tap", function( event ) {
        actions.hideMenu();
        controllers.page(controllers.baseURL()+"includes/page.view.tasks.html", ".body-contents");
    });


    // chamada para mudar para o proximo dia das tarefas
    jQuery( ".move-days .after-tasks" ).on( "tap", function( event ) {
        //...
    });


    // chamada para mudar para os dias anteriores
    jQuery( ".box-form-ini .priority" ).on( "tap", function( event ) {
        // ...
    });

}

