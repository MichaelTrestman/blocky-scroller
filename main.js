

// loadLevel(){

// 	placePlatforms()
// 	placeEnemies()

// }

// start game


      //friction = true;
		  
      var zork = new Character(40, 20, 20);
      zork.name = 'zork'
      zork.x = 100;
      zork.y = 100;
      zork.velocity.x = 0;
      zork.velocity.y = 0;
      enemiesList.push(zork);
      characters[0]= pC;
      characters.push(zork)

      
      
      pC.name = 'self'
      
      pC.x = 0;
      pC.y = 0;
      
      
      
      
      pC.render();
      zork.render();

      pauseNow = false;


document.addEventListener('keydown', function(event){
    event.preventDefault();
    move = event.keyCode;
    pC.go();
    move = 0;   
});

var counter = 0;

setInterval(function(){   
        // if (pauseNow){ 
        // 		if (move == 79){pauseNow = false};
        // } else {}
        	
        	context.clearRect(0,0,canvas.width,canvas.height);
        	
          
          for (var k = 0; k < platforms.length; k++){
            platforms[k].render();
          }


          counter ++
          if (counter>20){ counter = 0;  zork.goNPC()}
          

          for (var k = 0; k < characters.length; k++){
            collideAllEvery(characters[k]);
            characters[k].movement();
            characters[k].velocity.x = (characters[k].velocity.x *= 0.99);
            characters[k].velocity.y = (characters[k].velocity.y *= 0.99);

          }

          for (var k = 0; k < characters.length; k++){
           
            characters[k].render();
          }
          if (renderRayNext){
            renderRay(ray);
            renderRayNext = false;
          }


}, 10);
          // platforms[0].render();
          // platforms[1].render();
          // platforms[2].render();
         //  zork.render();
        	// pC.render();
        	
          //pC.collideCheck();

          
          
         //  collideAllEvery(pC);
         //  pC.movement();
        	// //if (gravity){ pC.velocity.y -= .15}
        	// zork.movement();
        	
        	// pC.velocity.x = (pC.velocity.x *= 0.99);
         //  pC.velocity.y = (pC.velocity.y *= 0.99);
          






// if(allEnemiesDead){
// 	gameOverWin();
// }

// if (playerDead){

// 	gameOverLose();
// }