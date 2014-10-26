var controllers = {

    page: function(url, selector, flag){
        if(url != undefined){
            $.ajax({
                url: url,
                datatype: "html"
            }).done(function(data) {
                if(flag != undefined){
                    $(selector).append( data );
                }else{
                    $(selector).html( data );
                }

                events(); // função que adiciona os handles aos elementos
            }).fail(function(){
                console.log("ERROR: Arquivo não existe ou endereço URL errado!");
            });
        }else{
            console.log("ERROR: informe um URL");
        }
    },
    baseURL:function(){ // informa ma base url do sistema
        var path = window.location.pathname;
        var nPath = path.split('/');
        nPath[ nPath.length - 1 ] = '';

        var baseUrl = nPath.join('/');

        return baseUrl;
    }


};

var actions = { // acoes comuns do sistema

    hideMenu: function(){
        $('.menu-left').css({display: 'none', width:'0px'});
        $('.body-contents').css({marginLeft: '10px'});
    },
    showMenu: function(){
        $('.menu-left').css({ width:'150px'}).show();
        $('.body-contents').css({marginLeft: '170px'});
    },
    hideTop: function(){
        $('.move-days').fadeOut();
    },
    showTop: function(){
        $('.move-days').fadeIn();
    }
};
