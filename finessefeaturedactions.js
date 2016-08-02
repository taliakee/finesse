function FeaturedVideos(){
	var allvideos= ["https://www.youtube.com/watch?v=roPGuZEzeiw&list=PLSCcAGyv98icX4pV3k5uIYtzjaVw12myt&index=4",
					"https://www.youtube.com/watch?v=od0j4aNDGKM",
					"https://www.youtube.com/watch?v=kzYQxZPZtNM ",
					"https://www.youtube.com/watch?v=3g70e2TP1YI"]
					"https://www.pinterest.com/pin/Abznw5uh7Fe4Oi3SCxP4TfK1RrCb0LW-E7WmsnxTGoUmKZDJ6ZlkBAU/ "];
	var allvideonames=["Intense Ab Burn Blogilates: Difficulty = o o o o o",
						"POP Pilates Intense Ab Workout Blogilates: o o o o o",
						"Carly Rowena’s Gym Routine 6 Pack: o o o o o",
						"Top 5 Best Ab Workout for Gym: o o o o",
						"Six Pack Workout for gym: o o o o"]
	var numbervid= allvideos.length;
	var random=Math.random(numbervid);
	var postvid= getElementById("Video1");
	postvid.src="allvideos[random]";
	var postvidtitle= getElementById("Videotitle1");
	postvid.src="allvideonames[random]";
}



