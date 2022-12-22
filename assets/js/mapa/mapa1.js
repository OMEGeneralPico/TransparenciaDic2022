var myjson;

$(document).ready(function () {
  $.getJSON("assets/json/mapa1.json", function (json) {
    myjson = JSON.parse(JSON.stringify(json));
  });

  $("#mapitadiv").load("assets/images/mapa_pico.svg", function () {
    $("#mapita").click(function (evt) {
      $("#info").html(
        "<b style='font-weight: 700;'>Porcentaje Recaudado </b><br><br>"+
        "Barrio: " +
          myjson[evt.target.id].nombre +
          "<br> Nivel de recaudación: " +
          myjson[evt.target.id].porcentaje
      );

      //$("#info").html("<table><tr><td>Barrio</td><td>"+myjson[evt.target.id].nombre + "</td></tr></table>"
  
          
     // );

      console.log(myjson[evt.target.id]);
    });
  });
});