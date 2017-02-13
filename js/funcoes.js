$(document).ready(function() {

  var pagination = 12;
  function loadJson(){
    $.getJSON("https://api.dribbble.com/v1/shots?per_page="+ pagination +"&access_token=6bfa930e81f084cc64df56d078746593a1eb83cdb349f906b8965ef8a42d3a1b", function(data) {
       $('.dribbble-feed').empty();
      for (i = 0; i < data.length; i++) {
        
        titulo = data[i].title;
        numViews = data[i].views_count;
        descricao = data[i].description;
       
        criadoem = data[i].created_at;
        criadoem = criadoem.toString();
        criadoem = criadoem.replace("T", "&nbsp;&nbsp;ás&nbsp;");
        criadoem = criadoem.replace("Z", "");

        avatar = data[i].user.avatar_url;
        nome = data[i].user.username;

        $('.dribbble-feed').append('<div class="boxShot col-sm-12 col-md-4 col-lg-3"><div class="titulolikes"><h2>'+titulo+'</h2><span class="like">'+numViews+'</span></div><a href="#" title="Detalhes" class="verdetalhes"><img src="' + data[i].images.normal + '" /></a><div class="divDescricao"><a href="#" title="fechar" class="btnFechar"></a><span class="username"><img src="' + avatar + '" /><strong>'+ nome +'</strong></span></a><p>'+ descricao +'</p><span class="criado">'+ criadoem +'</span></div></div>');
      }
      $(".loader").hide();
      
      //LOADPAGINATION
      $(document).on('click', '.carregaMais', function () {
        $(".loader").show();
        pagination = pagination + 12;
        loadJson();
        return false;
      }); 
      
      //MOSTRA DETALHES
      $('.verdetalhes').on( "click", function() {
        $(this).next().slideDown();
        return false;
      });
      $('.btnFechar').on( "click", function() {
        $(this).parent().slideUp();
        return false;
      }); 
    });
  }
  loadJson();
});