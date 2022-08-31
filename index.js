const output=document.querySelector("#quotes-container");
const ul=document.querySelector("#quotes-ul");
const authorDisplay =document.querySelector("#quotes-author");
output.append(ul);
output.append(h2);
const url="http://localhost:3000/quotes";

fetch(url)
.then((response)=>response.json())
.then((data)=>{
    console.log("Success:",data);
    // renderDisplay(data);
    // data.foreach((element)=>{
    //     renderList(element);
    // })
    renderList(data);
})
.catch((error)=>{
    console.error("Error:",error);
});

function renderList(characterObj){

    characterObj.forEach(element => {
        console.log(element);
        const li =document.createElement("li");
        li.textContent=element.Quote ;
        ul.append(li);
     renderQuoteDetails(characterObj);
    });
}

function renderQuoteDetails(characterObj){
    
}