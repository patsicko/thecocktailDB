const search1=document.getElementById("search1");
const search2=document.getElementById("search2");
const btn=document.getElementById("btn");
const card1=document.getElementById("card1");
const cardContainer=document.getElementById("card-container")

search2.addEventListener("keyup",e=>{
   
    if(e.keyCode===13){
     search(search2.value);
    }
})

search1.addEventListener("keyup",e=>{
    search(search1.value);
    
})

btn.addEventListener("click",e=>{
    search(search2.value);
})

const search=(value)=>{
    cardContainer.innerHTML="";
   const searched= dataArr.filter(item=>item.strDrink.toLowerCase().includes(value.toLowerCase()));
   
   searched.map(item=>mapped(item.strDrink,item.strDrinkThumb))

}


const mapped=(label,src)=>{

const card=`
<div id="card1" class="card1">
<div class="label" id="label">
${label}
</div>
<img id="cocktail" src=${src} alt="">
</div>
`;
cardContainer.innerHTML+=card;
}


let dataArr;
   
document.addEventListener("DOMContentLoaded",e=>{
    
    const fetchData=async()=>{
        const data=await (await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")).json();
    
        dataArr=data.drinks;
     
       dataArr.map(item=>mapped(item.strDrink,item.strDrinkThumb))
 
     
    } 
    fetchData();
})




