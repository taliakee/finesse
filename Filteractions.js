function Submit(){
	var workout = document.getElementById('Type');
	// var diff = document.getElementById('Difficulty');
	var link = document.getElementById('SubmitButton');

	// if workout== "Abs" {
	// 	link.href = "Finessehome.html";
	// 	// link.setAttribute("href","Finessehome.html");

	// }

	if (document.getElementById('Abs').checked){
		if (document.getElementById('Drop1').checked){
			link.href="Finessehome.html";
			//link.href="Abs1.html";
		}else if (document.getElementById('Drop2').checked){
			link.href="FinesseFeatured.html";
			//link.href="Abs2.html";
		}else if (document.getElementById('Drop3').checked){
			link.href="contact_us2.html";
		}else if (document.getElementById('Drop4').checked){
			link.href="Abs4.html";
		}else{
			link.href="Abs5.html";
		}
	}

	else if (document.getElementById('Butt').checked){
		if (document.getElementById('Drop1').checked){
			link.href="Butt1.html";
		}else if (document.getElementById('Drop2').checked){
			link.href="Butt2.html";
		}else if (document.getElementById('Drop3').checked){
			link.href="Butt3.html";
		}else if (document.getElementById('Drop4').checked){
			link.href="Butt4.html";
		}else{
			link.href="Butt5.html";
		}
	}

	else if(document.getElementById('Legs').checked){
		if (document.getElementById('Drop1').checked){
			link.href="Legs1.html";
		}else if (document.getElementById('Drop2').checked){
			link.href="Legs2.html";
		}else if (document.getElementById('Drop3').checked){
			link.href="Legs3.html";
		}else if (document.getElementById('Drop4').checked){
			link.href="Legs4.html";
		}else{
			link.href="Legs5.html";
		}
	}

	else if(document.getElementById('Arms').checked){
		if (document.getElementById('Drop1').checked){
			link.href="Arms1.html";
		}else if (document.getElementById('Drop2').checked){
			link.href="Arms2.html";
		}else if (document.getElementById('Drop3').checked){
			link.href="Arms3.html";
		}else if (document.getElementById('Drop4').checked){
			link.href="Arms4.html";
		}else{
			link.href="Arms5.html";
		}
	}

	else{
		if (document.getElementById('Drop1').checked){
			link.href="AllAround1.html";
		}else if (document.getElementById('Drop2').checked){
			link.href="AllAround2.html";
		}else if (document.getElementById('Drop3').checked){
			link.href="AllAround3.html";
		}else if (document.getElementById('Drop4').checked){
			link.href="AllAround4.html";
		}else{
			link.href="AllAround5.html";
		}
	}
}