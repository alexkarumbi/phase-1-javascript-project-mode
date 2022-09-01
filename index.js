let objGlobal;
const output=document.querySelector("#quotes-container");
const ul=document.querySelector("#quotes-ul");
const authorDisplay =document.querySelector("#author");
output.append(ul);

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
        li.textContent=element.Quote;
        ul.append(li);
        
        const li2 = document.createElement("li2");
        li2.textContent = element.author;
        ul.append("Written by: ")
        ul.append(li2);

        const li3 = document.createElement("li3");
        li3.textContent = element.sharedBy;
        ul.append("Shared by: ")
        ul.append(li3);

        ul.append(url ="phase-1-javascript-project-mode/assets/like.png")


    })
}

/*function renderQuoteDetails(characterObj){
    authorDisplay.textContent=characterObj.author;
    objGlobal =characterObj;
}*/