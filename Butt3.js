function random(){
	var allvids = ["https://www.youtube.com/embed/9iWiO7Qwalo",
					"https://www.youtube.com/embed/2RemvDpluD0",
					"https://www.youtube.com/embed/7c2-1T4Xydk",
					"https://www.youtube.com/embed/SmcLB9ObdOM",
					"https://www.youtube.com/embed/5LLFHwI3SJM?list=PLSCcAGyv98ifvpzdjtkLBPO76bDl9_fYz",
					"https://www.youtube.com/embed/VPf-gfFgz5M?list=PLSCcAGyv98ifvpzdjtkLBPO76bDl9_fYz",
					"https://www.youtube.com/embed/GhNvQds-34U",
					"https://www.youtube.com/embed/s7_u9P_ENyI"] //add new videos HERE

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