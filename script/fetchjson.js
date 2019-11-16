// using strictly
let URL = "../jsonfile/foodStamp.json";
/*var init = {
	method: 'POST',
	headers: {
		'Contents-Type' : 'application/json'
	},
	mode: 'cors',
	cache: 'default'
};*/
/*function addItem(list,data){

	var ul = document.getElementById(list);
  var candidate = document.getElementById(data);
  var li = document.createElement("li");
  li.setAttribute('id',candidate.value);
  li.appendChild(document.createTextNode(candidate.value));
  ul.appendChild(li);
}*/


var cityo=document.getElementById("city");
/*var city = document.getElementById("city");
let postcode = document.getElementById("postcode");*/


function addElement (data) { 
  // create a new div element 
  var newDiv = document.createElement("li"); 
  // and give it some content 
  var newContent = document.createTextNode(data); 
  // add the text node to the newly created div
  newDiv.innerText=data; 

  // add the newly created element and its content into the DOM 
  var currentDiv = document.getElementById("div1"); 
  document.body.insertBefore(newDiv, currentDiv); 
  document.write(document.body.insertBefore(newDiv, currentDiv));

}
function added(data)
{
	let lists = document.createElement("li");
	lists.innerHTML = data;                   // Insert text
	document.body.appendChild(lists)
	//datas.push(lists);	
}




async function getdata()
{
const resp = await fetch(URL);
const data = await resp.json();
let size = data.length;
for(let i =0;i<size;i++)
{
	if(cityo === data[i].Borough)
	{
		//var y = document.write("<br>");
		var x=document.getElementById("one");
		x=(data[i]["Street Address"])+document.write("<br>")+
		(data[i]["Postcode"])+
		(data[i]["Borough"])+
		"Phone number: "+(data[i]["Phone Number(s)"]);
		//var dataes ={address, zipcode,city,phn};
		// document.body.innerHTML =x
		//addElement(x);
		added(x);

	}
}
}
/*if(city!=null && city!=null)
{
	cityo = city.value;
	zip = postcode.value;
}*/
//console.log(data[0].Borough);
/*for(let i =0;i<size;i++)
{
	if(cityo==data[i].Borough && postcode == data[i].Postcode)
	{
		console.log(data[i]["Street Address"]);
	}
}*/
//console.log(data[0]["Street Address"]);

getdata();