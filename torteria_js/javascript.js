$( document ).ready(function() {
  $(".form-group").click(function(event){
    event.preventDefault();
    $("div.oven").css("visibility", "visible")
    $("#torta_form").submit(function(event){
      event.preventDefault();
      flavor = $("input[name='type']").val();
      oven_time = $("input[name='time']").val();
      counter_progressive = 0;
      console.log(flavor);
      console.log(oven_time);
      torta = new Torta(flavor)
      oven = new Oven(oven_time)
      torta.cookingTime();
      torta.cookStatus(oven);
      // oven.countdown(torta, oven_time);
      countdown(torta, oven_time);
    });
  });
});

// Class Torta
var Torta = function(type){
  this.type = type;
  this.time = 0;
  this.status = "";
}


Torta.prototype.cookingTime = function(){
   if (this.type == "milanesa") {
    this.time = 10
   } else if (this.type == "jamón") {
    this.time = 5
   } else if (this.type == "queso") {
    this.time = 3
   }
}

// Class TortaBatch
var TortaBatch = function(){}
// Class Oven

var Oven = function(time){
  this.time = time
}



Torta.prototype.cookStatus = function(oven){
  if (this.time > oven.time) {
    this.status = "CRUDO"
  } else if (this.time < oven.time) {
    this.status = "QUEMADO"
  } else if (this.time == oven.time) {
    this.status = "ON POINT"
  }
}

// Oven.prototype.ovenStatus = function(torta, counter){
//   if (torta.time - counter > 0) {
//     $("#timer").addClass("Casi-listo")
//     $("#status").html("Casi listo")
//   } else if (torta.time - counter == 0) {
//     $("#timer").addClass("LISTO")
//     $("#status").html("LISTO")
//   } else if (torta.time - counter < 0) {
//     $("#timer").addClass("QUEMADO")
//     $("#status").html("QUEMADO")
//   } else {
//     console.log("HOLA");
//   }
// }


  var countdown = function(torta, counter){
    $("#countdown").html(counter);
    console.log(counter_progressive);
    if (torta.time - counter_progressive > 0) {
        $("#timer").removeClass();
        $("#timer").addClass("Casi-listo");
        $("#status").html("Casi listo");
      } else if (torta.time - counter_progressive == 0) {
        $("#timer").removeClass();
        $("#timer").addClass("LISTO");
        $("#status").html("LISTO");
      } else if (torta.time - counter_progressive < 0) {
        $("#timer").removeClass();
        $("#timer").addClass("QUEMADO");
        $("#status").html("QUEMADO");
      } 

    counter--;
    counter_progressive++;

    // setTimeout(this.countdown(torta, counter), 1000);


    // alert('Counter ' + counter)
    if (counter === 0) {
      $("#history").append("<li>" + torta.type + " " + torta.status +"</li>")
      return ;
    }


    setTimeout(function(){countdown(torta, counter);}, 1000);
  }


