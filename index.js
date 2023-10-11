let count=0;
let count_el=document.getElementById("pass_count");

function increment(){
    count=count+1;
    console.log("Button CLicked");
    count_el.innerText=count;
}