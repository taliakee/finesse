function random(){
	var allvids = ["https://www.youtube.com/embed/wLYeRlyyncY",
					"https://www.youtube.com/embed/KbMhD2q19Io",
					"https://www.youtube.com/embed/pcJP9jYenK8",
					"https://www.youtube.com/embed/sQs6It4m5xY",
					"https://www.youtube.com/embed/zTLGjyt1GdQ?list=PLSCcAGyv98idFLg6YYVXAh9vyJJ_mWne_",
					"https://www.youtube.com/embed/i5rxA-KiOk0?list=PLSCcAGyv98idFLg6YYVXAh9vyJJ_mWne_",
					"https://www.youtube.com/embed/n5MLsG-W2P0?list=PLSCcAGyv98idFLg6YYVXAh9vyJJ_mWne_",
					"https://www.youtube.com/embed/h2r2H8OAU2I"] //add new videos HERE

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