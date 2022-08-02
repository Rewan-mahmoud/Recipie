
var row = document.querySelector("#displayRow");

var links = document.querySelectorAll(".nav-link")

 async function Data(recipe="pizza"){
  var response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${recipe}`)
 var finalResult = await response.json();
 allData = finalResult.recipes;
  displayDate();
  console.log(allData);
}

for (i=0 ; i<links.length ; i++ ){
  links[i].addEventListener("click",function(e){
    console.log(e.target.innerHTML);
    Data(e.target.innerHTML)
  })
}

function displayDate()
{
  var cartoona = ``;
 
    for(var i=0 ;i<allData.length;i++){
      cartoona+=`
      <div class="col-md-4">
      <div class="">
      <img class=" w-100" src="${allData[i].image_url}" alt="">
      <h1>${allData[i].title}</h1>
      <p>${allData[i].publisher}</p>
    </div>
    </div>`
  
    }
row.innerHTML=cartoona

}
Data();

