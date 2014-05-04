var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: (evt.clientX - rect.left - canvas.width/2 )*1/zoomFactor + pC.x,
    y: - ( (evt.clientY - rect.top - canvas.height/2 )*1/zoomFactor - pC.y)
  }
}

//(mousePos.x - canvas.width/2  )/zoomFactor + pC.x
//( - mousePos.y + canvas.height - canvas.height/2   ) / zoomFactor + pC.y


