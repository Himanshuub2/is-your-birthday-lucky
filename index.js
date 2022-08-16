var dobinput = document.querySelector("#DOB");
var luckynumber = document.querySelector(".lucky");
var checkbutton = document.querySelector(".check-btn");
var resultoutput = document.querySelector(".result");
var commentoutput = document.querySelector(".comment");


checkbutton.addEventListener("click",clicked);


function datesplitter(){
    var newdate = dobinput.value.split('-');
    var latestdate = newdate.join('');
    var sum = 0;
    for (var i = 0  ; i <latestdate.length; i++){
        sum = sum +Number(latestdate[i]);
    }
    
    return sum;
}


function clicked(){
    if(dobinput.value!=0 && luckynumber.value!=0){
        var finalanswer = datesplitter() %luckynumber.value;
        if(finalanswer==0){
            return resultoutput.innerText  = "You are lucky"

         
        }
        else{
             resultoutput.innerText  = "You are not lucky"
             return resultoutput.style.color = "red";
        }
    }
    else{
        return commentoutput.innerText  = "Enter valid date"

    }    
    

}