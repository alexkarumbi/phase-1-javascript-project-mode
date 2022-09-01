let objGlobal;
const quotesOutput=document.querySelector("#quotes-container");
const authorDisplay =document.querySelector("#author-container");
const sharedBy=document.querySelector("#sharedby");
const likesDisplay=document.querySelector("#likes");
const dislikesDisplay=document.querySelector("#dislikes");
const addLike =document.querySelector("#like-btn");
const addDislike =document.querySelector("#dislike-btn");
const addQuote=document.querySelector("#addquote-btn")




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
        // console.log(element);

        const li =document.createElement("li");
        li.textContent=element.Quote;
        quotesOutput.append(li);

        
        authorDisplay.textContent=element.author;
        likesDisplay.textContent=element.likes;
        dislikesDisplay.textContent=element.Dislikes;
       
        objGlobal =characterObj;
        
    })
}
     addLike.addEventListener("click",(event)=>{
    let counter = 0;
    counter =counter +1;
     
    likesDisplay.textContent=counter;
    patchRequest(objGlobal)  
    })
    addDislike.addEventListener("click",(event)=>{
        let counter = 0;
        counter =counter +1;
        dislikesDisplay.textContent=counter;
        patchRequest(objGlobal)  
        })
    

