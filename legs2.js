function random(){
	var allvids = ["https://www.youtube.com/embed/j6gf8r6e3Kc",
					"https://www.youtube.com/embed/cRuWfPdeGhQ",
					"https://www.youtube.com/embed/g01HAvJNSIg",
					"https://www.youtube.com/embed/HR8EmC5eiEI",
					"https://www.youtube.com/embed/7I-c-yw5ZrQ?list=PLSCcAGyv98ieU4iS1nGOuhyyjG3RyLhTF",
					"https://www.youtube.com/embed/7J9RA6mfONE",
					"https://www.youtube.com/embed/SBHA1iEHRko",
					"https://www.youtube.com/embed/Kwp-axDkiVo"] //add new videos HERE

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