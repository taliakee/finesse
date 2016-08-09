function FeaturedVideos(){ //Randomize function
	var numberfeatured = 4; //number of videos displayed

	var legvids = ["https://www.youtube.com/embed/SBHA1iEHRko",
					"https://www.youtube.com/embed/yhTxFOVAZtg",
					"https://www.youtube.com/embed/j6gf8r6e3Kc",
					"https://www.youtube.com/embed/MrpGbulGprA",
					"https://www.youtube.com/embed/Y7w65NMoGEI",
					"https://www.youtube.com/embed/8HP-XvHAH_I",
					"https://www.youtube.com/embed/ltVa07h87bw",
					"https://www.youtube.com/embed/pZlc4u6EGXA",
					"https://www.youtube.com/embed/KQDCqRd6Hm8",
					"https://www.youtube.com/embed/JYA_tmos1-4",
					"https://www.youtube.com/embed/cRuWfPdeGhQ",
					"https://www.youtube.com/embed/g01HAvJNSIg",
					"https://www.youtube.com/embed/HR8EmC5eiEI",
					"https://www.youtube.com/embed/7I-c-yw5ZrQ?list=PLSCcAGyv98ieU4iS1nGOuhyyjG3RyLhTF",
					"https://www.youtube.com/embed/7J9RA6mfONE"] //15

	var numberleg = legvids.length; //how many videos
	var	randomoldleg = []; //new array with nothing, length of 0
	for (a = 0; a < numberfeatured; a++){ //loop through to fill the displayed videos
		var randomleg = Math.floor(Math.random() * numberleg); //choose random number within 0-amount of videos
		var postlegvid = document.getElementById("LegVideo" + a); //get content of video0...video1...video2...
		var usedleg = randomoldleg.length; //how many videos used
		var b = 0; //counter
		while (b < usedleg){ //loop through all of the used
			if (randomleg == randomoldleg[b]){ //check if number is in the used
				randomleg = Math.floor(Math.random() * numberleg); //changes to a random number
				b = 0; //restart loop
			}else{ //continue
				b++;
			}
		}
		var leglink = legvids[randomleg]; //get the link
		postlegvid.src = leglink; //change the 
		randomoldleg.push(randomleg); //stores numbers (index number)
	}

	var armvids = ["https://www.youtube.com/embed/F1CohjEGbPc",
					"https://www.youtube.com/embed/hAGfBjvIRFI",
					"https://www.youtube.com/embed/XKBbn5GBw0Y",
					"https://www.youtube.com/embed/3TSD9TJ5sVM",
					"https://www.youtube.com/embed/5XJr4-6JZU4",
					"https://www.youtube.com/embed/MO87_yr7pjo",
					"https://www.youtube.com/embed/-b9nC6Ry-Kg",
					"https://www.youtube.com/embed/DPWciUzPOJM",
					"https://www.youtube.com/embed/x8rUKK8E19k?list=PLSCcAGyv98icWAjrUD29TYLhJtRAGABp2",
					"https://www.youtube.com/embed/cF0niVnmMY0",
					"https://www.youtube.com/embed/EBQq6Fuhzt0",
					"https://www.youtube.com/embed/a42wtkZsAfI",
					"https://www.youtube.com/embed/3DgWv7EH1sI",
					"https://www.youtube.com/embed/cUSvbaBDhGw?list=PLSCcAGyv98icWAjrUD29TYLhJtRAGABp2",
					"https://www.youtube.com/embed/qCrGCSMYiSY"] //15

	var numberarm = armvids.length; //how many videos
	var	randomoldarm = []; //new array with nothing, length of 0
	for (c = 0; c < numberfeatured; c++){ //loop through to fill the displayed videos
		var randomarm = Math.floor(Math.random() * numberarm); //choose random number within 0-amount of videos
		var postarmvid = document.getElementById("ArmVideo" + c); //get content of video0...video1...video2...
		var usedarm = randomoldarm.length; //how many videos used
		var d = 0; //counter
		while (d < usedarm){ //loop through all of the used
			if (randomarm == randomoldarm[d]){ //check if number is in the used
				randomarm = Math.floor(Math.random() * numberarm); //changes to a random number
				d = 0; //restart loop
			}else{ //continue
				d++;
			}
		}
		var armlink = armvids[randomarm]; //get the link
		postarmvid.src = armlink; //change the 
		randomoldarm.push(randomarm); //stores numbers (index number)
	}

	var absvids = ["https://www.youtube.com/embed/roPGuZEzeiw?list=PLSCcAGyv98icX4pV3k5uIYtzjaVw12myt",
					"https://www.youtube.com/embed/od0j4aNDGKM",
					"https://www.youtube.com/embed/kzYQxZPZtNM",
					"https://www.youtube.com/embed/3g70e2TP1YI",
					"https://www.youtube.com/embed/ERHEoQyBABU",
					"https://www.youtube.com/embed/vrHDaC30dqw",
					"https://www.youtube.com/embed/AdWyo_3KrfA",
					"https://www.youtube.com/embed/sKIqLUlPGBw",
					"https://www.youtube.com/embed/UqdBv9MJcXc",
					"https://www.youtube.com/embed/FYr2g1YtXX8",
					"https://www.youtube.com/embed/iKhUuTcx1Zk",
					"https://www.youtube.com/embed/BL6l9xdm2zo",
					"https://www.youtube.com/embed/2dFcYWpWfS8",
					"https://www.youtube.com/embed/lBmdAzJzYYg?list=PLSCcAGyv98icX4pV3k5uIYtzjaVw12myt",
					"https://www.youtube.com/embed/6zseFMc42m8"] //15

	var numberabs = absvids.length; //how many videos
	var	randomoldabs = []; //new array with nothing, length of 0
	for (e = 0; e < numberfeatured; e++){ //loop through to fill the displayed videos
		var randomabs = Math.floor(Math.random() * numberabs); //choose random number within 0-amount of videos
		var postabsvid = document.getElementById("AbsVideo" + e); //get content of video0...video1...video2...
		var usedabs = randomoldabs.length; //how many videos used
		var f = 0; //counter
		while (f < usedabs){ //loop through all of the used
			if (randomabs == randomoldabs[f]){ //check if number is in the used
				randomabs = Math.floor(Math.random() * numberabs); //changes to a random number
				f = 0; //restart loop
			}else{ //continue
				f++;
			}
		}
		var abslink = absvids[randomabs]; //get the link
		postabsvid.src = abslink; //change the 
		randomoldabs.push(randomabs); //stores numbers (index number)
	}

	var buttvids = ["https://www.youtube.com/embed/2gQuLmpK_Ok", //Butt and legs
					"https://www.youtube.com/embed/iKSnDjSteoI", //Abs and butt
					"https://www.youtube.com/embed/c7ZYCXu2hco",
					"https://www.youtube.com/embed/rwVzamFR-tg",
					"https://www.youtube.com/embed/HHn-oT3CEF4",
					"https://www.youtube.com/embed/faQ9lkjiRaM",
					"https://www.youtube.com/embed/MCMrHaiUTHc",
					"https://www.youtube.com/embed/09UN3UCv3ds",
					"https://www.youtube.com/embed/sf-M9TYVqBI",
					"https://www.youtube.com/embed/iCeGf5MZJto",
					"https://www.youtube.com/embed/kN77O3hT114",
					"https://www.youtube.com/embed/TFJt322szc4",
					"https://www.youtube.com/embed/i5nbFRUa79Q",
					"https://www.youtube.com/embed/6ANvdueuTfw",
					"https://www.youtube.com/embed/ZkBCGY4SBwc?list=PLSCcAGyv98ifvpzdjtkLBPO76bDl9_fYz"] //15

	var numberbutt = buttvids.length; //how many videos
	var	randomoldbutt = []; //new array with nothing, length of 0
	for (g = 0; g < numberfeatured; g++){ //loop through to fill the displayed videos
		var randombutt = Math.floor(Math.random() * numberbutt); //choose random number within 0-amount of videos
		var postbuttvid = document.getElementById("ButtVideo" + g); //get content of video0...video1...video2...
		var usedbutt = randomoldbutt.length; //how many videos used
		var h = 0; //counter
		while (h < usedbutt){ //loop through all of the used
			if (randombutt == randomoldbutt[h]){ //check if number is in the used
				randombutt = Math.floor(Math.random() * numberbutt); //changes to a random number
				h = 0; //restart loop
			}else{ //continue
				h++;
			}
		}
		var buttlink = buttvids[randombutt]; //get the link
		postbuttvid.src = buttlink; //change the 
		randomoldbutt.push(randombutt); //stores numbers (index number)
	}
	var allaroundvids = ["https://www.youtube.com/embed/TwCBr0Dqlms", //Legs, butt, and abs
						"https://www.youtube.com/embed/9H9qdpUzu4M",
						"https://www.youtube.com/embed/PAo_JpDNQY8",
						"https://www.youtube.com/embed/PWEdJRRndkQ",
						"https://www.youtube.com/embed/lujcE3FGL_U",
						"https://www.youtube.com/embed/-sICMHs301M",
						"https://www.youtube.com/embed/IJro-Hd9wK4",
						"https://www.youtube.com/embed/RDQmnzuE2q4", //Abs, butt, arms
						"https://www.youtube.com/embed/LAQK22crBWc",
						"https://www.youtube.com/embed/oegRlg9V4q8",
						"https://www.youtube.com/embed/kyVmAO50LyY",
						"https://www.youtube.com/embed/lCg_gh_fppI",
						"https://www.youtube.com/embed/VHyGqsPOUHs",
						"https://www.youtube.com/embed/WNvxFjzSs58?list=PLSCcAGyv98idFLg6YYVXAh9vyJJ_mWne_",
						"https://www.youtube.com/embed/8UQzHRVNPi0?list=PLSCcAGyv98idFLg6YYVXAh9vyJJ_mWne_"]//15

	var numberaround = allaroundvids.length; //how many videos
	var	randomoldaround = []; //new array with nothing, length of 0
	for (i = 0; i < numberfeatured; i++){ //loop through to fill the displayed videos
		var randomaround = Math.floor(Math.random() * numberaround); //choose random number within 0-amount of videos
		var postaroundvid = document.getElementById("AllaroundVideo" + i); //get content of video0...video1...video2...
		var usedaround = randomoldaround.length; //how many videos used
		var j = 0; //counter
		while (j < usedaround){ //loop through all of the used
			if (randomaround == randomoldaround[j]){ //check if number is in the used
				randomaround = Math.floor(Math.random() * numberaround); //changes to a random number
				j = 0; //restart loop
			}else{ //continue
				j++;
			}
		}
		var aroundlink = allaroundvids[randomaround]; //get the link
		postaroundvid.src = aroundlink; //change the 
		randomoldaround.push(randomaround); //stores numbers (index number)
	}
}
