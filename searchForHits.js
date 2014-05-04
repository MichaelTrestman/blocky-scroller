
var searchForHits = function(ray, objects){
	
  var thingHit;
  var faceHit;

	for (var z = 0; z < objects.length; z++){
		var obj = objects[z];

		for (var q = 0; q< obj.faces.length; q++){

			var fac = obj.faces[q];

			if (
				checkLineIntersection(ray[0], ray[1], ray[2], ray[3], fac[0], fac[1], fac[2], fac[3]).online2
			  )
			{
				alert ('hit!')
				thingHit = obj;
				faceHit = fac;
				targetPoint.x = ( fac[0] + fac[2])/2;
				targetPoint.y = ( fac[1] + fac[3])/2;
				ray = [ pC.x, pC.y, targetPoint.x, targetPoint.y ]

			};
		}
	}


	// don't return anything, reset targetPoint!
}

  