var move;

pC.go = function(){
    //move = 0;
		pC.moves[move]();	    
}

Character.prototype.movement = function(){
  
  // this.velocity.x = (this.velocity.x * 0.9);
  // console.log(this.velocity.x)
  // this.velocity.y = (this.velocity.y * 0.9);
  // console.log(this.velocity.y)
  //this.forces();
  //gravitate(this);
  this.x += this.velocity.x;
  this.y += this.velocity.y;

  this.leftFace = [(this.x - this.width/2),(this.y + this.height/2), (this.x - this.width/2), (this.y - this.height/2)];
  this.rightFace = [(this.x + this.width/2),(this.y + this.height/2), (this.x + this.width/2), (this.y - this.height/2)];
  this.topFace = [(this.x - this.width/2),(this.y + this.height/2), (this.x + this.width/2), (this.y + this.height/2)];
  this.bottomFace = [(this.x - this.width/2),(this.y - this.height/2), (this.x + this.width/2), (this.y - this.height/2)];
  this.faces = [this.leftFace, this.rightFace, this.topFace, this.bottomFace] 
  
  if (gravity){ this.velocity.y -= .15}
  
}

pC.moves = {
      15: function(){},

      65: function(){//a
            if ( pC.velocity.x*(-1) < pC.velocityMax.x)  {pC.velocity.x -= pC.jetPower; }
          },
      //maybe do q and e as 'creep buttons,' or maybe do a stealth mode, either way the
      //idea is to toggle a lower maxVelocity for fine-tuned motion
        
      68: function(){//d
            if ( pC.velocity.x < pC.velocityMax.x)  {pC.velocity.x += pC.jetPower; }
            //pC.velocity.x = 5;
          },  

      87: function(){//w
            if (pC.velocity.y < pC.velocityMax.y) { pC.velocity.y += pC.jetPower;}
          },
    
      83: function(){//s
            //if (pC.grounded) {grounded = false;}
            if (pC.velocity.y*(-1) < pC.velocityMax.y) { pC.velocity.y-= pC.jetPower;}
          },

      32: function(){
            pC.velocity.x *= 50/100;
            pC.velocity.y *= 50/100;
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