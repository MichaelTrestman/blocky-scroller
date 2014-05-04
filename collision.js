
// bounce back if either leading corner crosses either facing side

// if bounc, should impart momentum to both objects, in proportion to size?

function lineIntersect(x1,y1,x2,y2, x3,y3,x4,y4) {
    var x=((x1*y2-y1*x2)*(x3-x4)-(x1-x2)*(x3*y4-y3*x4))/((x1-x2)*(y3-y4)-(y1-y2)*(x3-x4));
    var y=((x1*y2-y1*x2)*(y3-y4)-(y1-y2)*(x3*y4-y3*x4))/((x1-x2)*(y3-y4)-(y1-y2)*(x3-x4));
    if (isNaN(x)||isNaN(y)) {
        return false;
    } else {
        if (x1>=x2) {
            if (!(x2<=x&&x<=x1)) {return false;}
        } else {
            if (!(x1<=x&&x<=x2)) {return false;}
        }
        if (y1>=y2) {
            if (!(y2<=y&&y<=y1)) {return false;}
        } else {
            if (!(y1<=y&&y<=y2)) {return false;}
        }
        if (x3>=x4) {
            if (!(x4<=x&&x<=x3)) {return false;}
        } else {
            if (!(x3<=x&&x<=x4)) {return false;}
        }
        if (y3>=y4) {
            if (!(y4<=y&&y<=y3)) {return false;}
        } else {
            if (!(y3<=y&&y<=y4)) {return false;}
        }
    }
    return true;
}



Character.prototype.collideCheck = function(){
    
	for (var z = 0; z <platforms.length; z++){
		var plat = platforms[z];

		for (var q = 0; q< plat.faces.length; q++){

			var fac = plat.faces[q];

			if (
				lineIntersect(
					this.x, this.y, (this.x + this.velocity.x), (this.y + this.velocity.y),   
		  		fac[0], fac[1], fac[2], fac[3]
		  	)
			){
				if ( fac[0] == fac[2] ){
					
					this.velocity.x *= -1;
				} else {
				this.velocity.y *= -1;
				};
			};
		}
	}
}

