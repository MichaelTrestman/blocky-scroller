var gravitate = function(thing){
  
  thing.velocity.y = thing.velocity.y - 0.05;
  
};	

var frictionize = function(thing, percent){


  //thing.velocity[0] = thing.velocity[0] * percent/100;
  	thing.velocity.x = thing.velocity.x * percent/100;
  //if (gravity){} else{
  	thing.velocity.y = thing.velocity.y * percent/100;
  //}
}

Character.prototype.forces = function(){
	if (gravity) {
    this.velocity.y = this.velocity.y - 1;
  }
  //if (friction){
  	console.log(this.name + 'is slowing down???');
    this.velocity.x = (this.velocity.x * 90/100);
    this.velocity.y = (this.velocity.y * 90/100);
 //}
}