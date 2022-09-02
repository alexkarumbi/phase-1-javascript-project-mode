

let objGlobal;
let counter =0;
const quotesOutput=document.querySelector("#quotes-container");
const authorDisplay =document.querySelector("#author-container");
const sharedBy=document.querySelector("#sharedby");
const likesDisplay=document.querySelector("#likes");
const dislikesDisplay=document.querySelector("#dislikes");
const addLike =document.querySelector("#like-btn");
const addDislike =document.querySelector("#dislike-btn");
const addQuote=document.querySelector("#form-btn");
const votesDisplay=document.querySelector("#votes-container");
const newQuote=document.querySelector("#Quote");
const newAuthor=document.querySelector("#author");
const newLikes=





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
    

       const span =document.createElement("span");
        span.textContent=element.author;
        quotesOutput.append("Written By: ");
        quotesOutput.append(span ) ;



       likesDisplay.textContent=element.likes;
       dislikesDisplay.textContent=element.Dislikes;


        

     

       /* const li3 =document.createElement("li3");
        li3.textContent=element.likes;
        quotesOutput.append(addLike);
        //quotesOutput.append(li3);



        const li4 =document.createElement("li4");
        li4.textContent=element.Dislikes;
        quotesOutput.append(addDislike);
        //quotesOutput.append(li4);
*/

       
       
        objGlobal =characterObj;
        
    })
}
         addLike.addEventListener("click",(event)=>{
          counter =counter +1;
       
           likesDisplay.textContent=counter;
           patchRequest(objGlobal)  
    })
            addDislike.addEventListener("click",(event)=>{
        
        counter =counter+1;
        dislikesDisplay.textContent=counter;
        patchRequest(objGlobal)  
        })
    
    const formEl =document.querySelector("form");

      addQuote.addEventListener("click",(event)=>{
        event.preventDefault();
        console.log("zmv,jh");
        
        
    
        fetch(url,{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                "Quote":(newQuote).value,
                "author":(newAuthor).value,
                
            }),
        })
        .then(response =>response.json())
        .then(data =>console.log("Successful",data))
        .catch(error =>console.error(error))
     }
     )
   