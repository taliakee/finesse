// abs1.js
//JavaScript file for abs1.html
function random(){
	var allvids = ["https://www.youtube.com/embed/FYr2g1YtXX8",
					"https://www.youtube.com/embed/iKhUuTcx1Zk",
					"https://www.youtube.com/embed/iKSnDjSteoI",
					"https://www.youtube.com/embed/BL6l9xdm2zo",
					"https://www.youtube.com/embed/A4esG2gZMjg",
					"https://www.youtube.com/embed/6O9qyViLwvA",
					"https://www.youtube.com/embed/lkQT0v6sS0Y"] //add new videos HERE

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