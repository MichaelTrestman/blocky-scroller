
Character.prototype.moveCodes = {
	1: 'left',
	2: 'right',
	3: 'up',
	4: 'down',
	5: 'stop'
}

Character.prototype.movesNPC = {

      left: function(agent){//a
            if ( agent.velocity.x*(-1) < agent.velocityMax.x)  {agent.velocity.x -= agent.jetPower; }
          },
      //maybe do q and e as 'creep buttons,' or maybe do a stealth mode, either way the
      //idea is to toggle a lower maxVelocity for fine-tuned motion
        
      right: function(agent){//d
            if ( agent.velocity.x < agent.velocityMax.x)  {agent.velocity.x += agent.jetPower; }
            //agent.velocity.x = 5;
          },  

     	up: function(agent){//w
            if (agent.velocity.y < agent.velocityMax.y) { agent.velocity.y += agent.jetPower;}
          },
    
      down: function(agent){//s
            //if (agent.grounded) {grounded = false;}
            if (agent.velocity.y*(-1) < agent.velocityMax.y) { agent.velocity.y-= agent.jetPower;}
          },

      stop: function(agent){
            agent.velocity.x *= 50/100;
            agent.velocity.y *= 50/100;
          },
      70: function(){
            gravity = false;
          },
      71: function(){
            gravity = true;
      },
      80: function(){pauseNow = true;
      },
      49: function(){rayArmed = true;
      },
      50: function(){rayArmed = false;
      },
      48: function(){pC.jetPower = 3; pC.velocityMax.x = pC.width*3; pC.velocityMax.y = pC.width*3;
      },
      56: function(){pC.jetPower = 1; pC.velocityMax.x = pC.width*1; pC.velocityMax.y = pC.width*1;
      },
      57: function(){pC.jetPower = 2; pC.velocityMax.x = pC.width*2; pC.velocityMax.y = pC.width*2;
      },
      189: function(){zoomFactor *= 0.8;
      },
      187: function(){zoomFactor *= 1.2;
      }
}

Character.prototype.goNPC = function(){
	
	var movesList = [1, 1, 1, 2, 2, 3, 3]

	var ran = Math.floor( Math.random()*movesList.length + 1)
	ran = movesList[ran];
	ran = this.moveCodes[ran];
	this.movesNPC[ran](this);

}

