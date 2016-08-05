function random(){
	var allvids = ["https://www.youtube.com/embed/ZhQsXN-Ng8E",
					"https://www.youtube.com/embed/Gd_rkucdlxY",
					"https://www.youtube.com/embed/MJ4WtM35NQQ",
					"https://www.youtube.com/embed/6rT-6-ZpeNw",
					"https://www.youtube.com/embed/ZRS0Lvi1OPY",
					"https://www.youtube.com/embed/JgJTg-Vr_YI",
					"https://www.youtube.com/embed/NXLc7ekmUQg"] //add new videos HERE

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