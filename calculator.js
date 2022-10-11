// This function reset all the values
function clearScreen() {
    document.getElementById("result").value = "";
}
 
// This function show values
function display(value) {
    document.getElementById("result").value += value;
}
 
// This function evaluates the expression and returns result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}           

function showTable(){
    $('#yo').show();
    }
    function hideTable(){
        $('#yo').hide();
      }

      $('#hi').on('click', function(){
        hideTable()
      });
      $('#sh').on('click', function(){
        showTable()
      });


      function changeToThatColor(){
        $("body").css("background-color",$("#color").val())
    }

    $('#sof').on('click',function(){
        changeToThatColor()
    })
    

    function changeTheme (){
        $("body").css('background','black')
        $("h1").css('color','white')
        
    }
    $('#bnw').on('click',function(){
        changeTheme()
    })
    
    function changeToThatColor(){
        $("body").css("background-color",$("#color").val())
    }
    $("#color").on("click",changeToThatColor)
