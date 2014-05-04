function Block(x, y, height, width, color){
	this.x = x;
	this.y = y;
	this.height = height;
	this.width = width;
	this.velocityMax = {x: 0, y: 0};
	this.color = color;


	this.leftFace = [(this.x - this.width/2),(this.y + this.height/2), (this.x - this.width/2), (this.y - this.height/2)];
	this.rightFace = [(this.x + this.width/2),(this.y + this.height/2), (this.x + this.width/2), (this.y - this.height/2)];
	this.topFace = [(this.x - this.width/2),(this.y + this.height/2), (this.x + this.width/2), (this.y + this.height/2)];
	this.bottomFace = [(this.x - this.width/2),(this.y - this.height/2), (this.x + this.width/2), (this.y - this.height/2)];
	this.faces = [this.leftFace, this.rightFace, this.topFace, this.bottomFace]	






}

function Character(shieldCap, laserCap, jetCap){
	this.velocity = {x: 0, y: 0}
	this.velocityMax.x = this.width;
	this.velocityMax.y = this.width;
	this.shieldCap = shieldCap;
	this.shield = shieldCap
	this.laserCap = laserCap;
	this.laser = laserCap;
	this.jetCap = jetCap;
	this.jet = jetCap;
	this.jetPower = 1;
}

Character.prototype = new Block(10, 10, 60, 31, this.color ||'green');
