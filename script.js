var fullBox=document.getElementById("fullBox");
var fullImg=document.getElementById("fullImg");
function openFullImg(pic){
    fullBox.style.display="flex";
    fullImg.src=pic;
}
function closeFullImg(){
    fullBox.style.display="none";
}
let scrollContainer=document.querySelector(".gallry");
let backbtn=document.getElementById("backbtn");
let nextbn=document.getElementById("nextbtn");

// scrollContainer.addEventListener("wheel", (evt)=>{
//     evt.preventDefault();
//     scrollContainer.scrollLeft+=evt.deltaY;
// });
nextbn.addEventListener("click", ()=>{
    scrollContainer.scrollLeft +=900;
});
backbtn.addEventListener("click",()=>{
    scrollContainer.scrollLeft-=900;
});