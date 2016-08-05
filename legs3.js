function random(){
	var allvids = ["https://www.youtube.com/embed/mgEGKloq3XM",
					"https://www.youtube.com/embed/5ePflkF1ZxQ",
					"https://www.youtube.com/embed/fiJSV3hmgq0",
					"https://www.youtube.com/embed/uKQogEXBYTI",
					"https://www.youtube.com/embed/krC3PtDSq10",
					"https://www.youtube.com/embed/tyDMVUikmb4?list=PLSCcAGyv98ieU4iS1nGOuhyyjG3RyLhTF",
					"https://www.youtube.com/embed/bEQnmWd4D5E?list=PLSCcAGyv98ieU4iS1nGOuhyyjG3RyLhTF",
					"https://www.youtube.com/embed/VWZSkDJP0-I",
					"https://www.youtube.com/embed/vy6THpcte-w",
					"https://www.youtube.com/embed/uKDwOp2H-Ls"] //add new videos HERE

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
			}else{ //continue
				r++;
			}
		}
		var link = allvids[random]; //get the link
		postvid.src = link; //change the 
		randomold.push(random); //stores numbers (index number)
	}
}