mousePointerArmed = true;

    canvas.addEventListener('mousemove', function(e) {
        //alert('stupid@');
        e.preventDefault();
        var mousePos = getMousePos(canvas, e);
        
         mousePos.x = Math.floor(mousePos.x);
        mousePos.y = Math.floor(mousePos.y);
        //mousePos.x = (mousePos.x - canvas.width/2  )/zoomFactor + pC.x
        //mousePos.y = ( - mousePos.y + canvas.height - canvas.height/2   ) / zoomFactor + pC.y
        var message = 
                                                    
         'Mouse position on board: ' + (mousePos.x) + ", " +
         
                                      (mousePos.y );
         
        document.getElementById("mousePos").innerHTML=message;
        //alert(message);
      }, false);



// (canvasPointX - canvas.width/2  )/zoomFactor + pC.x = modelPointX

// ( - canvasPointY + canvas.height - canvas.height/2   ) / zoomFactor + pC.y = modelPointX








// // renderPoint = function(modelPointX, modelPointY){
// //   var difX = modelPointX - pC.x;
// //   var difY = modelPointY - pC.y;
  
// //   var canvasPointX = difX*zoomFactor + canvas.width/2


// // (canvasPointX - canvas.width/2  )/zoomFactor + pC.x = modelPointX

// // ( - canvasPointY + canvas.height - canvas.height/2   ) / zoomFactor + pC.y = modelPointX


// // //have to invert y axis because canvas == stupid!
// //   var canvasPointY = canvas.height - (difY*zoomFactor + canvas.height/2)
// //   //return [canvasPointX, canvasPointY]
// //   return [canvasPointX, canvasPointY]
// // }







