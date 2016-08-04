function Submit(){
	var workout = document.getElementById('Type');
	var link = document.getElementById('SubmitButton');

	if (document.getElementById('Abs').checked){
		if (document.getElementById('Drop1').checked){
			link.href="abs1.html";
		}else if (document.getElementById('Drop2').checked){
			link.href="Abs2.html";
		}else if (document.getElementById('Drop3').checked){
			link.href="abs3.html";
		}else if (document.getElementById('Drop4').checked){
			link.href="abs4.html";
		}else{
			link.href="abs5.html";
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
			link.href="legs1.html";
		}else if (document.getElementById('Drop2').checked){
			link.href="legs2.html";
		}else if (document.getElementById('Drop3').checked){
			link.href="legs3.html";
		}else if (document.getElementById('Drop4').checked){
			link.href="legs4.html";
		}else{
			link.href="legs5.html";
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
			link.href="Allaround1.html";
		}else if (document.getElementById('Drop2').checked){
			link.href="Allaround2.html";
		}else if (document.getElementById('Drop3').checked){
			link.href="Allaround3.html";
		}else if (document.getElementById('Drop4').checked){
			link.href="Allaround4.html";
		}else{
			link.href="Allaround5.html";
		}
	}
}