var head=document.querySelectorAll("h3");
var para=document.querySelectorAll("p");
for(let i=0;i<head.length;i++){
    head[i].addEventListener("click",function(){
    para[i].classList.toggle("show");
    var sign=document.querySelectorAll("span");
    sign[i*2].classList.toggle("sign");
});
}