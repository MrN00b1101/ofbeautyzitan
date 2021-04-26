	var link = "https://mrn00b1101.github.io/ofbeautyzitan.github.io/";
	var img1 = link+"/img/gal/1.png";
	var img2 = link+"/img/gal/2.png";
	var img3 = link+"/img/gal/3.png";
	var img4 = link+"/img/gal/4.png";
	var img5 = link+"/img/gal/5.png";
	var img6 = link+"/img/gal/6.png";
	var picS = [img1,img2,img3,img4,img5,img6];

	var th0 = picS[0];
	var th1 = picS[1];
	var th2 = picS[2];
	var th3 = picS[3];
	var th4 = picS[4];
	var bP = picS[5];
function loadB(){
	document.getElementById("thumb1").src= th0;
	document.getElementById("thumb2").src= th1;
	document.getElementById("thumb3").src= th2;
	document.getElementById("thumb4").src= th3;
	document.getElementById("thumb5").src= th4;
	document.getElementById("bigPic").src= bP;
}
window.onload = function(){
 loadB();

}
function bigValt(a){
	bP = a;
	loadB();
}

function lepBal(){

 th4 = th3;
 th3 = th2;
 th2 = th1;
 th1 = th0;

 switch (th0){
	case picS[0] : th0 = picS[5]; break;
	case picS[1] : th0 = picS[0]; break;
	case picS[2] : th0 = picS[1]; break;
	case picS[3] : th0 = picS[2]; break;
	case picS[4] : th0 = picS[3]; break;
	case picS[5] : th0 = picS[4]; break;
	}

 	loadB();
}
function lepJobb(){

 th0 = th1;
 th1 = th2;
 th2 = th3;
 th3 = th4;

 switch (th4){
	case picS[0] : th4 = picS[1]; break;
	case picS[1] : th4 = picS[2]; break;
	case picS[2] : th4 = picS[3]; break;
	case picS[3] : th4 = picS[4]; break;
	case picS[4] : th4 = picS[5]; break;
	case picS[5] : th4 = picS[0]; break;
	}

 	loadB();
}
