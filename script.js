// your code here
// let buttonEl=document.getElementById("button");


function getInfo() {
	
	let nameEl=document.getElementById("name");
   let numEl=document.getElementById("year");
	let hEl=document.getElementById("url");
	var name=nameEl.value;
	var year=numEl.value;
	var updated= "https://localhost:8080/" + name + "and" + year ;  

	hEl.textContent=updated ;
	
	
}


