renderPoint = function(modelPointX, modelPointY){
	var difX = modelPointX - pC.x;
	var difY = modelPointY - pC.y;
	
	var canvasPointX = difX*zoomFactor + canvas.width/2
//have to invert y axis because canvas == stupid!
	var canvasPointY = canvas.height - (difY*zoomFactor + canvas.height/2)
	//return [canvasPointX, canvasPointY]
	return [canvasPointX, canvasPointY]
}

Block.prototype.render = function(){

		// var renX = this.x - this.width/2;
		// var renY = this.y + this.height/2;



	for (var i = 0; i < this.faces.length; i++){
		
		var startX = this.faces[i][0];
		var startY = this.faces[i][1];

		var startPoint = renderPoint(startX, startY);
		startX = startPoint[0];
		startY = startPoint[1];


		var endX = this.faces[i][2];
		var endY = this.faces[i][3];

		var endPoint = renderPoint(endX, endY);
		endX = endPoint[0];
		endY = endPoint[1];


		context.beginPath();
	  context.moveTo( startX, startY);	 
	  context.lineTo( endX, endY);
	  context.lineWidth = 10*zoomFactor;
	  context.strokeStyle = this.color;
	  context.stroke();

	  

  	
  	


	}
			var renDo = renderPoint(this.x - this.width/2, this.y + this.height/2)

		context.fillStyle = this.color;
	  context.fillRect(renDo[0], renDo[1], this.width*zoomFactor, this.height*zoomFactor);
	  


}


//No!!! you forgot all about the rendering conversion issues!




/*so in general, to convert a point in the model to a point in the layout:

the playercharacter is the zero point. any model point must be rendered in the canvas in the 
corresponding point relative to the playercharacter. so the difference on an axis between the
centered point of the canvas and an object must be the same as the difference between it
in the model and the character in the model.

write a convert method to pass on any point?
*/

//var pClocation = [pC.x, pC.y];
// zoomFactor must be defined somewhere as a global variable

// point = {
// 		model: {x: 0, y: 0},
// 		canvas: {}
// }








