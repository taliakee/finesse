function FeaturedVideos(){ //Randomize function
	var allvideos= ["https://www.youtube.com/embed/roPGuZEzeiw?list=PLSCcAGyv98icX4pV3k5uIYtzjaVw12myt",
					"https://www.youtube.com/embed/od0j4aNDGKM",
					"https://www.youtube.com/embed/kzYQxZPZtNM",
					"https://www.youtube.com/embed/3g70e2TP1YI",
					"https://www.youtube.com/embed/TwCBr0Dqlms",
					"https://www.youtube.com/embed/695PN9xaEhs",
					"https://www.youtube.com/embed/lCg_gh_fppI",
					"https://www.youtube.com/embed/9H9qdpUzu4M",
					"https://www.youtube.com/embed/F1CohjEGbPc",
					"https://www.youtube.com/embed/hAGfBjvIRFI",
					"https://www.youtube.com/embed/XKBbn5GBw0Y",
					"https://www.youtube.com/embed/yhTxFOVAZtg",
					"https://www.youtube.com/embed/j6gf8r6e3Kc",
					"https://www.youtube.com/embed/2gQuLmpK_Ok",
					"https://www.youtube.com/embed/PAo_JpDNQY8",
					"https://www.youtube.com/embed/3TSD9TJ5sVM",
					"https://www.youtube.com/embed/ERHEoQyBABU",
					"https://www.youtube.com/embed/vrHDaC30dqw",
					"https://www.youtube.com/embed/PWEdJRRndkQ",
					"https://www.youtube.com/embed/lujcE3FGL_U",
					"https://www.youtube.com/embed/-sICMHs301M",
					"https://www.youtube.com/embed/IJro-Hd9wK4",
					"https://www.youtube.com/embed/RDQmnzuE2q4",
					"https://www.youtube.com/embed/LAQK22crBWc",
					"https://www.youtube.com/embed/oegRlg9V4q8",
					"https://www.youtube.com/embed/AdWyo_3KrfA",
					"https://www.youtube.com/embed/sKIqLUlPGBw",
					"https://www.youtube.com/embed/UqdBv9MJcXc",
					"https://www.youtube.com/embed/kyVmAO50LyY",
					"https://www.youtube.com/embed/FYr2g1YtXX8",
					"https://www.youtube.com/embed/iKhUuTcx1Zk",
					"https://www.youtube.com/embed/iKSnDjSteoI",
					"https://www.youtube.com/embed/BL6l9xdm2zo",
					"https://www.youtube.com/embed/2dFcYWpWfS8",
					"https://www.youtube.com/embed/lBmdAzJzYYg?list=PLSCcAGyv98icX4pV3k5uIYtzjaVw12myt",
					"https://www.youtube.com/embed/6zseFMc42m8",
					"https://www.youtube.com/embed/5XJr4-6JZU4",
					"https://www.youtube.com/embed/c7ZYCXu2hco"]

	var numbervid = allvideos.length; //how many videos
	var numberfeatured = 14; //number of videos displayed
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

		var link = allvideos[random]; //get the link
		postvid.src = link; //change the 
		randomold.push(random); //stores numbers (index number)
	}
}



