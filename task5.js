var my_time=0;
var id = null;

function timer(){
    myMove() ;

   my_time=setTimeout('timer()',10);
    }
    var pos =0 ;

    function myMove() {

      // getinnerHTML();
      var elem = document.getElementById("myAnimation");   
      var elem1 = document.getElementById("myAnimation1");   
      var elem2 = document.getElementById("myAnimation2"); 
    
      id = setInterval(frame, 10);
      function frame() {
        if (pos == 350) {
          // clearInterval(id);
        } else {
          pos++; 
          elem.style.right = pos + 'px'; 
          elem1.style.left = pos + 'px'; 
          elem2.style.bottom = pos + 'px'; 
    
    
        }
      }
    }


function reset() {
  var image1 = document.getElementById("myAnimation").style.left = "340px";

  var image3 = document.getElementById("myAnimation2").style.top= "0px";

  var image2 = document.getElementById("myAnimation1").style.right="340px";
  console.log(image2);

}

// Function to stop image movement
function stop(){
  clearInterval(id);
}





   