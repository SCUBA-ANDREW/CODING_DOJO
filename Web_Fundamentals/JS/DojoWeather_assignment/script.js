function alert_lc(){
    alert("Loading weather report...");
}
var cookie_div = document.getElementById("cookie_dv");
function cookie_accept(){
    cookie_div.remove();
}
var tdy_hc = 24
var tdy_hf = Math.round(tdy_hc*9/5)+32
var tdy_lc = 18
var tdy_lf = Math.round(tdy_lc*9/5)+32
var tmrw_hc = 27
var tmrw_hf = Math.round(tmrw_hc*9/5)+32
var tmrw_lc = 19
var tmrw_lf = Math.round(tmrw_lc*9/5)+32
var fri_hc = 21
var fri_hf = Math.round(fri_hc*9/5)+32
var fri_lc = 16
var fri_lf = Math.round(fri_lc*9/5)+32
var sat_hc = 26
var sat_hf = Math.round(sat_hc*9/5)+32
var sat_lc = 21
var sat_lf = Math.round(sat_lc*9/5)+32

function unit_change(element){
    if(element.value === "C"){
        document.getElementById("td_h").innerText = tdy_hc+ '\xB0'
        document.getElementById("td_l").innerText = tdy_lc+ '\xB0'
        document.getElementById("tm_h").innerText = tmrw_hc+ '\xB0'
        document.getElementById("tm_l").innerText = tmrw_lc+ '\xB0'
        document.getElementById("fr_h").innerText = fri_hc+ '\xB0'
        document.getElementById("fr_l").innerText = fri_lc+ '\xB0'
        document.getElementById("sa_h").innerText = sat_hc+ '\xB0'
        document.getElementById("sa_l").innerText = sat_lc+ '\xB0'
    }
    else if(element.value === "F"){
        document.getElementById("td_h").innerText = tdy_hf+ '\xB0';
        document.getElementById("td_l").innerText = tdy_lf+ '\xB0'
        document.getElementById("tm_h").innerText = tmrw_hf+ '\xB0'
        document.getElementById("tm_l").innerText = tmrw_lf+ '\xB0'
        document.getElementById("fr_h").innerText = fri_hf+ '\xB0'
        document.getElementById("fr_l").innerText = fri_lf+ '\xB0'
        document.getElementById("sa_h").innerText = sat_hf+ '\xB0'
        document.getElementById("sa_l").innerText = sat_lf+ '\xB0'
    }
}

