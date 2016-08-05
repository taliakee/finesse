function random(){
	var allvids = ["https://www.youtube.com/embed/-_tJ1Se57WE",
					"https://www.youtube.com/embed/vkzt3dYjZYw",
					"https://www.youtube.com/embed/_migdzftFMo",
					"https://www.youtube.com/embed/GS_z6FG_jqE",
					"https://www.youtube.com/embed/Dku5R496Ino?list=PLSCcAGyv98idFLg6YYVXAh9vyJJ_mWne_",
					"https://www.youtube.com/embed/sqSRC61CERk?list=PLSCcAGyv98idFLg6YYVXAh9vyJJ_mWne_",
					"https://www.youtube.com/embed/8UQzHRVNPi0?list=PLSCcAGyv98idFLg6YYVXAh9vyJJ_mWne_",
					"https://www.youtube.com/embed/EdqRPHx8dgo"] //add new videos HERE

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