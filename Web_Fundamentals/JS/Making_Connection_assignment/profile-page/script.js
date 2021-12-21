console.log("page loaded...");
var Name = "Jane Doe"
var new_profileName = document.querySelector("#edit_profile")
function ChangeName(){
    let Name = prompt("Please enter your name", "Jane Doe")
    new_profileName.innerText = Name
}
var Request_count = 2
var rc_display = document.querySelector("#R_count");
var Connection_list = document.getElementById("Your_Connection")
var TE_list = document.getElementById("TE_ConnectionRequest")
var YC_count = 418
var YC_display = document.querySelector("#YC_cnt")

function TE_remove_list(Element){
    TE_list.remove();
    Request_count--;
    rc_display.innerText = Request_count;
    Element.remove();
}
function Accept_TE(Element){
    Connection_list.appendChild(TE_list);
    Request_count--;
    YC_count++;
    YC_display.innerText = YC_count;
    rc_display.innerText = Request_count;
    Element.remove();
    document.getElementById("TE_close").remove();
}

var PE_list = document.getElementById("PE_ConnectionRequest")
function PE_remove_list(){
    PE_list.remove();
    Request_count--;
    rc_display.innerText = Request_count;
}

function Accept_PE(Element){
    Connection_list.appendChild(PE_list);
    Request_count--;
    YC_count++;
    YC_display.innerText = YC_count;
    rc_display.innerText = Request_count;
    Element.remove();
    document.getElementById("PE_close").remove();
}

