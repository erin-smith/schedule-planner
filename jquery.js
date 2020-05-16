$(document).ready(function ()
{
  //writes date at top of Calendar
  //writes day on left panel of calendar
  $("#today").html(moment().format("dddd, MMMM Do YYYY"));
  $("#day").html(moment().format("dddd"));

  //set inputs from local storage
  $(".save").on("click", function ()
  {
    var hour = $(this).parent().parent().attr("id");
    var texts = $(this).parent().parent().find("textarea").val();
    localStorage.setItem(hour, texts);
  });

  // load any saved data from localStorage
  for (i = 8; i < 19; i++) {
    var str = "#8 .info";
    $(str.replace("8", i)).val(localStorage.getItem(i));
  }
  // clear button
  $(".clear").on("click", function ()
  {
    var hour = $(this).parent().parent().attr("id");
    $(this).parent().parent().find("textarea").val('');
    localStorage.removeItem(hour);
  });

  //change colors!
  var currenthour = moment().hour(); //golden
  for (i = 8; i < 19; i++) {
    var str = "#8";
    var selectedElement = $(str.replace("8", i));
    //$(str.replace("8", i)).addClass("past");
    if (i > currenthour) {
      selectedElement.addClass("future");
    }
    else if (i < currenthour) {
      selectedElement.addClass("past");
    }
    else {
      selectedElement.addClass("now");
    }
  }
  //API for FUNZIES!
  $("#get1").on("click", function (event)
  {
    event.preventDefault();

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://quotes15.p.rapidapi.com/quotes/random/?language_code=en",
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "quotes15.p.rapidapi.com",
        "x-rapidapi-key": "f5d98f4cf8msh11198755cc5247cp143954jsn9057acac6779"
      }
    }

    $.ajax(settings).done(function (response)
    {
      console.log(response);
      $(".note").text(JSON.stringify(response.content));
      $(".author").text(JSON.stringify("--" + response.originator.name));
    })
  })
})