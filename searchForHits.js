
var searchForHits = function(ray, objects){
	var shlargetPoint = {x: 0, y: 0};
  var thingHit;
  var faceHit;

	for (var z = 0; z < objects.length; z++){
		var obj = objects[z];

		for (var q = 0; q< obj.faces.length; q++){

			var fac = obj.faces[q];
				
			if (
				checkLineIntersection(ray[0], ray[1], ray[2], ray[3], fac[0], fac[1], fac[2], fac[3]).onLine2
			  )
			{
			

				thingHit = obj;
				faceHit = fac;


				shlargetPoint.x = checkLineIntersection(ray[0], ray[1], ray[2], ray[3], fac[0], fac[1], fac[2], fac[3]).x;
				shlargetPoint.y = checkLineIntersection(ray[0], ray[1], ray[2], ray[3], fac[0], fac[1], fac[2], fac[3]).y;
				ray = [ pC.x, pC.y, shlargetPoint.x, shlargetPoint.y ]
				//ray = [ pC.x, pC.y, 0, 0 ]
			};
		}
		return ray;
	}


	// don't return anything, reset targetPoint!
}

  