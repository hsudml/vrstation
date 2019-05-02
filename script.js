$(function() {
  $(".software").keyup(function(e){
    e.preventDefault();
    var swName = $.trim($(this).val());
    //console.log(swName);
    $(this).closest("form").find(".name").val(swName);
  });
  
//Accessibility  
  $(".submit").click(function(e){
    e.preventDefault();
    var searchTerm = $.trim($(this).closest(".form-row").find(".name").val());
    var searchTerm2 = $.trim($(this).closest(".form-row").find("label").text()).toLowerCase();
    //https://duckduckgo.com/?q=prezi+vpat&t=hi&ia=web
    var searchurl = "https://duckduckgo.com/?q="+searchTerm+"+"+searchTerm2+"&t=hi&ia=web";
    window.open(searchurl);
  });
  
//AlternativeTo  
  $(".atSubmit").click(function(e){
    e.preventDefault();
    var searchTerm = $.trim($(this).closest(".form-row").find(".name").val());
    var searchTerm2 = $.trim($(this).closest(".form-row").find("label").text()).toLowerCase();
    //https://alternativeto.net/browse/search?q=koalas
    var searchurl = "https://alternativeto.net/browse/search?q="+searchTerm;
    window.open(searchurl);
  });
//Osalt 
  $(".osaltSubmit").click(function(e){
    e.preventDefault();
    var searchTerm = $.trim($(this).closest(".form-row").find(".name").val());
    var searchTerm2 = $.trim($(this).closest(".form-row").find("label").text()).toLowerCase();
    //https://alternativeto.net/browse/search?q=koalas
    var searchurl = "https://www.osalt.com/search?q="+searchTerm;
    window.open(searchurl);
  });
  
  
  $("h2").prepend('<i class="material-icons linkIcon">link</i>');
  
  $("h2").hover(function(){
    $(this).find('.linkIcon').toggle();
  });
  
});