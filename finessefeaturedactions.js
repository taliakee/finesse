function FeaturedVideos(){
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
					"https://www.youtube.com/embed/vrHDaC30dqw"]

	var numbervid = allvideos.length;
	var numberfeatured = 14;
	var	randomold = [];
	for (i = 0; i < numberfeatured; i++){
		var random = Math.floor(Math.random() * numbervid);
		var postvid = document.getElementById("Video" + i);
		var done = randomold.length;
		for (r = 0; r < done; r++){
			if (random == randomold[r]){
				random = Math.floor(Math.random() * numbervid);
			}
		}
		var link = allvideos[random];
		postvid.src = link;
		randomold.push(random);
	}
}



