var textInput = document.querySelector(".event");
var wholeTable = document.querySelector(".todayInfo");
var eventTime = document.querySelector(".mtgTime");
var cancelBtn = document.querySelector(".cancel");
var saveBtn = document.querySelector(".save");
var dayTitle = moment().format("dddd, MMMM Do YYYY"); 
var currentHour = moment().format("hA");
var currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
var dayName = moment().format("dddd");
var hour24 = moment().format("H");
var hour12 = moment().format("h");
const test = false;

// JavaScript function that wraps everything
$(document).ready(function() {
  
//change colors!
 var currenthours = moment().hour(); //golden
 var mappedItems = $("td .hour").map(function() {
    return this.id;
    })
    .get()
    .join(",");
    let $arr = mappedItems;//get tr elements in an array 
  })
   
function colors() {
    $($arr).each(function(i) {
      if (i > currenthours) {
        $("tr.color").style.color="gray"; //future
     } else if (i < currenthours) {  //past
        $("tr.color").style.color="blue";
    }
      else {
        $("tr.color").style.color="white";//now
      }
    });
    colors();

       $("#today").html(dayTitle);
       $("#day").html(dayName);
       $(".hour").html(hour24);

         //get inputs from local storage
    var stuff = $("tr").text();
         //set info in local storage
      localStorage.setItem('dayStuff', stuff);
      //bind info to click event for <tr>
      $("tr").on("click", "#save", function(){
        
       //check the new text
        var texts = $(this).text();

        //overwite old text
    localStorage.setItem('dayStuff', newText);

    //test if it works
    alert(localStorage.getItem('dayStuff'));
    console.log(stuff);

     });

     //set text area text, open new text box
       $("button .cancel").click(function() {
           $("tr").removeData("textarea");
        });

        //API for FUNZIES!
        $("#get1").on("click", function(event) {

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
          
          $.ajax(settings).done(function (response) {
            console.log(response);
            $(".note").text(JSON.stringify(response.content));
            $(".author").text(JSON.stringify("--" + response.originator.name));
          })

        });
    
      }
