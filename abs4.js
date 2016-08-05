// abs4.js
//JavaScript file for abs4.html
function random(){
	var allvids = ["https://www.youtube.com/embed/3g70e2TP1YI",
					"https://www.youtube.com/embed/6zseFMc42m8",
					"https://www.youtube.com/embed/iCeGf5MZJto",
					"https://www.youtube.com/embed/mMHgxyX_f7U",
					"https://www.youtube.com/embed/BQ-YUN9bOWY?list=PLSCcAGyv98icX4pV3k5uIYtzjaVw12myt",
					"https://www.youtube.com/embed/qq7RUjAZrJs?list=PLSCcAGyv98icX4pV3k5uIYtzjaVw12myt",
					"https://www.youtube.com/embed/od0j4aNDGKM?list=PLSCcAGyv98icX4pV3k5uIYtzjaVw12myt",
					"https://www.youtube.com/embed/0Nv8lfshoqQ?list=PLSCcAGyv98icX4pV3k5uIYtzjaVw12myt"] //add new videos HERE

	var numbervid = allvids.length; //how many videos
	var numberfeatured = 4; //number of videos displayed
	var	randomold = []; //new array with nothing, length of 0
	
	for (i = 0; i < numberfeatured; i++){ //loop through to fill the displayed videos
		var random = Math.floor(Math.random() * numbervid); //choose random number within 0-amount of videos
		var postvid = document.getElementById("Video" + i); //get content of video0...video1...video2...
		var used = randomold.length; //how many videos used
		var r = 0; //counter
		while (r < used){ //loop through all of the used
			if (random == randomold[r]){ //check if number is in the used
				random = Math.floor(Math.random() * numbervid); //changes to a random number
				r = 0; //restart loop
			}else{ //continue searching
				r++;
			}
		}
		var link = allvids[random]; //get the link
		postvid.src = link; //change the link
		randomold.push(random); //stores the number (index number)
	}
}