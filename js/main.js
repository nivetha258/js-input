


let nameEle= document.getElementById("name")
let jobEle= document.getElementById("job")
let imageEle= document.getElementById("image")
let followersEle= document.getElementById("followers")
let btnEle= document.getElementById("btn-click"),
updateSec=document.getElementById("update")

let personinput=[]

btnEle.addEventListener("click",function(){
	let person={};
	console.log(imageEle);
	console.log(imageEle.value)
	person.name=nameEle.value;
	person.job=jobEle.value;
	person.img=imageEle.value;
	person.followers=followersEle.value;
	person.id =Math.random();
 
	personinput.push(person);
	
	console.log(personinput);
	
	nameEle.value="";
	jobEle.value="";
	imageEle.value="";
	followersEle.value="";
	
	
	let imageUp=document.createElement("img");
	updateSec.appendChild(imageUp);
	imageUp.src=person.img;
});


