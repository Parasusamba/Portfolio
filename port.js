const content=document.getElementById("hiddencontent");
content.addEventListener("click",function(){
    content.classList.toggle("expanded");
    const hiddentext=content.querySelector("dl");
    if(content.classList.contains("expanded")){
        hiddentext.style.display="block";
    }else{
        hiddentext.style.display="none";
    }
    });
