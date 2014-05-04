function PlayerCharacter(aimSpot){
	this.aimSpot = aimSpot;
}

PlayerCharacter.prototype = new Character(100, 50, 50);

PlayerCharacter.prototype.color = 'blue';

var pC = new PlayerCharacter(666);
pC.color = 'darkblue'
pC.height = 30;
pC.width = 15;
pC.jetPower = 1;





