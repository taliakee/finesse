function FeaturedVideos(){
	var allvideos= ["https://www.youtube.com/embed/od0j4aNDGKM,"];
	var allvideonames=["Intense Ab Burn Blogilates: Difficulty = o o o o o",
						"POP Pilates Intense Ab Workout Blogilates: o o o o o",
						"Carly Rowena’s Gym Routine 6 Pack: o o o o o",
						"Top 5 Best Ab Workout for Gym: o o o o",
						"Six Pack Workout for gym: o o o o"]
	var numbervid= allvideos.length;
	var random=Math.random(numbervid);
	var postvid= document.getElementById("Video1");
	postvid.src="allvideos[random]";
	var postvidtitle= getElementById("Videotitle1");
	postvid.src="allvideonames[random]";
}



