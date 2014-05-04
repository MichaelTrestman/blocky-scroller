

var collideAll = function(block, plat){

	//what is happening when the enemies just slip though????

	//falling down
		if ( ( block.x + block.velocity.x + block.width/2)  > ( plat.x - plat.width/2)     
			&&
			 (
			 	(block.x + block.velocity.x - block.width/2) < (plat.x + plat.width/2 )	||
			 	(block.x - block.width/2) < (plat.x + plat.width/2 )
			 ) 
			//there is a platform under the block
			&&
			//it is on the correct side
			   ( block.y - block.height/2) > (plat.y + plat.height/2)  
			&&
			//it is close enough to hit this turn
			   ( block.y -block.height/2 + block.velocity.y)  < (plat.y + plat.height/2)  )			

		{ 
			
			block.grounded = true;
			//place block back above, just in case!
			block.y = plat.y + plat.height/2  + block.height/2 ;
			//block.velocity[1] *= -0.25;
			//frictionize(block, 70); 
			if (gravity){
				block.velocity.y *= -0.25;
			} else {
				block.velocity.y *= -0.75;
			}
			
		} ; //else {frictionize(block, 99.95)};

		//going upwards

		if ( ( block.x + block.velocity.x + block.width/2)  > ( plat.x - plat.width/2)     
			&&
			 (block.x + block.velocity.x - block.width/2) < (plat.x + plat.width/2 )		 
			//there is a platform under the block

			&&
			//it is on the correct side
			   ( block.y + block.height/2) < (plat.y - plat.height/2)   
			&&
			//it is close enough to hit this turn
			   ( block.y + block.height/2 + block.velocity.y)  > (plat.y - plat.height/2)  )			

		{ 
			//block.grounded = true;
			//place block back below, just in case!
			block.y = plat.y - plat.height/2  -1 -block.height/2 ;
			//block.velocity[1] *= -0.25;
			//frictionize(block, 70); 
			if (gravity){
				block.velocity.y *= -0.25;
			} else {
				block.velocity.y *= -0.75;
			}
			
		} ; //else {frictionize(block, 99.95)};

		//going right!

		if ( ( block.y + block.velocity.y + block.height/2)  > ( plat.y - plat.height/2)     
			&&
			 (block.y + block.velocity.y - block.height/2) < (plat.y + plat.height/2 )		 
			//there is a platform next to the block
			&&
			//it is on the correct side
			   ( block.x + block.width/2) < (plat.x - plat.width/2)   
			&&
			//it is close enough to hit this turn
			   ( block.x + block.width/2 + block.velocity.x)  > (plat.x - plat.width/2)  )			

		{ 
			//block.grounded = true;
			//place block back below, just in case!
			
			block.x = plat.x - plat.width/2  - 1 - block.width/2 ;
			//block.velocity[1] *= -0.25;
			//frictionize(block, 70); 
			
			block.velocity.x *= -0.75;
			
		} ;	

		//going left!!!

		if ( ( block.y + block.velocity.y + block.height/2)  > ( plat.y - plat.height/2)     
			&&
			 (block.y + block.velocity.y - block.height/2) < (plat.y + plat.height/2 )		 
			//there is a platform under the block
			&&
			//it is on the correct side
			   ( block.x - block.width/2) > (plat.x + plat.width/2)    
			&&
			//it is close enough to hit this turn
			   ( block.x -block.width/2 + block.velocity.x)  < (plat.x + plat.width/2)  )			

		{ 
			//block.grounded = true;
			//place block back above, just in case!
			block.x = plat.x + plat.width/2  + 1 + block.width/2 ;
			//block.velocity[1] *= -0.25;
			//frictionize(block, 70); 
			// if (gravity){
			// 	block.velocity[1] *= -0.25;
			// } else {
			block.velocity.x *= -0.75;
			}

}

var collideAllEvery = function(block){
	
	for (var q = 0; q < platforms.length; q++){
		var thisPlat = platforms[q];

		collideAll(block, thisPlat);
	}
}
