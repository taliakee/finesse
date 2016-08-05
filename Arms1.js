function random(){
	var allvids = ["https://www.youtube.com/embed/MO87_yr7pjo",
					"https://www.youtube.com/embed/-b9nC6Ry-Kg",
					"https://www.youtube.com/embed/DPWciUzPOJM",
					"https://www.youtube.com/embed/x8rUKK8E19k?list=PLSCcAGyv98icWAjrUD29TYLhJtRAGABp2"
					"https://www.youtube.com/embed/cF0niVnmMY0",
					"https://www.youtube.com/embed/EBQq6Fuhzt0",
					"https://www.youtube.com/embed/a42wtkZsAfI",
					"https://www.youtube.com/embed/5XJr4-6JZU4"] //add new videos HERE

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