


platforms[0] = new Block(-500, -100, 85, 1000, 'purple')
platforms[1] = new Block(0, -500, 100, 500, 'purple')
platforms[2] = new Block(-1000, 500, 1000, 85, 'purple')
platforms[3] = new Block(-0, -1800, 80, 36000, 'purple')
platforms[4] = new Block(-0, 5800, 80, 36000, 'purple')
platforms[5] = new Block(-16000, 2000, 9900, 360, 'purple')
//platforms[6] = new Block(16000, 2000, 9900, 360, 'purple')
platforms[6] = new Block(4300, -500, 1000, 400, 'tomato')




		var z = platforms.length;
		var x =	(0)
		var y =	(0)
		var h =	(10)
		var w =	(10)

for (var r = 0; r <30; r++ ){
		z = platforms.length;
		x += (Math.floor(Math.random() * 1000) - 1000)
		y += (Math.floor(Math.random() * 1000) - 2000)
		h += (Math.floor(Math.random() * 1000))
		w += (Math.floor(Math.random() * 1000))

		platforms[z] = new Block(x, y, h, w, 'tomato')
}




// (Math.floor(Math.random() * XXXXX)

// for (var r = 0; r <15; r++ ){

// 		var z = platforms.length;
// 		var x =	(Math.floor( Math.random()*10000 - 5000))
// 		var y =	(Math.floor(Math.random() * 3000 - 1500))
// 		var h =	(Math.floor(Math.random() * 1000 - 950))
// 		var w =	(Math.floor(Math.random() * 1000 - 950))
						
// 		platforms[z] = new Block(x, y, h, w, 'tomato')
// }


platforms[1].color = 'green'

