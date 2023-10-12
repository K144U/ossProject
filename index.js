let count=0;
let count_el=document.getElementById("pass_count");

function increment(){
    count=count+1;
    console.log("Button CLicked");
    count_el.innerText=count;
}

curr_count='Previous Entries - ';

function save(){
    curr_count+=(count+' - ');
    count=0;
    // count_el.textContent=count;
    document.getElementById("save").innerText=curr_count;
}

function _clear(){
    count=0;
    curr_count='Previous Entries - '+count;
    console.log("Button CLicked");
    document.getElementById("save").innerText=curr_count;
}