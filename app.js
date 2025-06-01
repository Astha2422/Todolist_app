const btnele = document.querySelector(".btn");
const inputele = document.querySelector(".input-box");
btnele.addEventListener("click",()=>{
     if(inputele.value === " "){
        console.log("clicked");
        alert("you must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML =inputbox.value;
        listcontainer.appendChild(li);
    }
})
   