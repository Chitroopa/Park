$(function() {
  $("#height").change(function() {
    var heightInput = $("#height").val();
    if (heightInput === "tiny") {
      $("#ride2, #ride3, #ride4, #ride5").hide();
      $("#ride1, #ride6").show();
    }
    else if (heightInput === "small") {
      $("#ride4, #ride5").hide();
      $("#ride1, #ride2, #ride3, #ride6").show();
    }
    else if (heightInput === "medium") {
      $("#ride1, #ride2, #ride3, #ride4, #ride5, #ride6").show();
    }
    else if (heightInput === "tooTall") {
      $("#ride6").hide();
      $("#ride1, #ride2, #ride3, #ride4, #ride5").show();
    }
  });
});
