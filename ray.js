
//var explosionPoint = {x: 0, y: 0};


rayArmed = true;
canvas.addEventListener('click', function(evt) {

  if (rayArmed){

    var mousePos = getMousePos(canvas, evt);
    
    var xDif = mousePos.x - pC.x;
    var yDif = mousePos.y - pC.y;
    var slope = yDif/xDif;
    var whichSide;
    if (mousePos.x >= pC.x) { whichSide = 1} else {whichSide = -1};
    

    var targetPoint =   { 
              x: canvas.width/2 + whichSide*112000, 
              y: canvas.height/2 + 112000*whichSide*slope}

    ray = [ pC.x, pC.y, targetPoint.x, targetPoint.y ]

    //if the beam doesn't hit anything in between, then:

    //ok, search all the damn objects to see if they intersect;


    ray = searchForHits(ray, platforms);
    // ray = [ pC.x, pC.y, targetPoint.x, targetPoint.y ]
    //explosionPoint = targetPoint;

    renderRayNext = true;

  }

}, false);


var renderRay = function(ray){
  var explosionPoint = {x: 0, y: 0};
  var exP = renderPoint(ray[2], ray[3])

  explosionPoint.x = exP[0];
  explosionPoint.y = exP[1];
  
  context.beginPath();
  context.moveTo(canvas.width/2, canvas.height/2)
  context.lineTo( explosionPoint.x, explosionPoint.y );
  context.lineWidth = 2*zoomFactor+ 1;
  context.strokeStyle = 'orange';
  context.stroke();

  context.beginPath();
  context.arc(explosionPoint[0], explosionPoint[1], 25, 0, (2 * Math.PI), false);
  context.fillStyle = 'red';
  context.fill();
  context.lineWidth = 0;
  context.strokeStyle = 'black'
  context.stroke();
}





