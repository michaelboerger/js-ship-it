thyme = false;

$(document).ready(function() {
  $("#message_begin").fadeIn(3000);
  $("#area_late").fadeIn(3000);
  $("#command_line").fadeIn(3000);
  $("form").submit(function() {
    var input = $("#command_line").val();

      if (input == "help") {
        $("#message_help").clone().insertBefore("#placeholder").fadeIn(1000);
      }

      if (input == "1") {
        $("#message_1").clone().insertBefore("#placeholder").fadeIn(1000);
      }

      if (input == "2") {
        $("#message_2").clone().insertBefore("#placeholder").fadeIn(1000);
      }

      if (input == "3") {
        $("#message_3").clone().insertBefore("#placeholder").fadeIn(1000);
      }

      if (input == "4") {
        $("#message_4").clone().insertBefore("#placeholder").fadeIn(1000);
      }

      if (input == "5") {
        $("#message_5").clone().insertBefore("#placeholder").fadeIn(1000);
      }

      if (input == "anthony") {
        $("#message_anthony").clone().insertBefore("#placeholder").fadeIn(1000);
      }

      if (input == "lee") {
        $("#message_lee").clone().insertBefore("#placeholder").fadeIn(1000);
      }
      $("#console").scrollTop($("#console")[0].scrollHeight);
      $("#command_line").val("");
     });
});
