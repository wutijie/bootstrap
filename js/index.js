'use strict'

class Boxdv {
	constructor(obj){
		this.id=obj;
	}
	init(srcId,aInner,p1_Inner,p2_Inner){
		this.src=srcId;
		this.aInner=aInner;
		this.p1_Inner=p1_Inner;
		this.p2_Inner=p2_Inner;
		this.creatDom();
	}
	creatDom(){
		this.domBig();
		this.appendDom();
	}
	domBig(){
		this.wrap=document.getElementById(this.id);
		this.dvCols=document.createElement("div");
		this.dvCols.className="col-lg-3 col-md-4 col-sm-6";
		this.dvBig=document.createElement("div");
		this.dvBig.className="big";
		this.domImg();
		this.domFoot();
	}
	domImg(){
		this.img=document.createElement("img");
		this.img.src=this.src;
	}
	domFoot(){
		this.dvFoot=document.createElement("div");
		this.dvFoot.className="foot";
		this.domH3p();
	}
	domH3p(){
		this.hh3=document.createElement("h3");
		this.aa=document.createElement("a");
		this.aa.href="javascript:;";
		this.aa.innerHTML=this.aInner;
		this.bbr=document.createElement("br");
		this.p1=document.createElement("p");
		this.p1.className="p1";
		this.p1.innerHTML=this.p1_Inner;
		this.p2=document.createElement("p");
		this.p2.className="p2";
		this.p2.innerHTML=this.p2_Inner;
	}
	appendDom(){
		this.wrap.appendChild(this.dvCols);
		this.dvCols.appendChild(this.dvBig);
		this.dvBig.appendChild(this.img);
		this.dvBig.appendChild(this.dvFoot);
		this.dvFoot.appendChild(this.hh3);
		this.hh3.appendChild(this.aa);
		this.hh3.appendChild(this.bbr);
		this.hh3.appendChild(this.p1);
		this.dvFoot.appendChild(this.p2);
	}
}

window.onload=function(){
	window.onresize=function(){
		var wid=document.documentElement.clientWidth;
		var big=document.getElementsByClassName("big");
		if(wid>992){
			for(var i=0;i<big.length;i++){
				big[i].style.margin="0 0 3rem 0";
				big[i].style.height="34.2rem";
			}
		}else if(wid<=992&&wid>768){
			for(var i=0;i<big.length;i++){
				big[i].style.margin="0 0 3rem 0";
				big[i].style.height="35rem";
			}
		}else if(wid<=768&&wid>500){
			for(var i=0;i<big.length;i++){
				big[i].style.margin="0 15% 3rem";
			}
		}else if(wid<=400){
			for(var i=0;i<big.length;i++){
				big[i].style.margin="0 0 3rem 0";
			}
		}
	}
}

