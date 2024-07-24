
count = 0;
document.getElementById("btn1").onclick=function(){
   count--;
   document.getElementById("myH1").textContent=count;
}
document.getElementById("btn2").onclick=function(){
    count=0;
   document.getElementById("myH1").textContent=count;
}
document.getElementById("btn3").onclick=function(){
    count++;
   document.getElementById("myH1").textContent=count;
}