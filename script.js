

let enter = document.querySelector(".enter");
let s1 = document.getElementById("s1");
let s2 = document.getElementById("s2");
let s3 = document.getElementById("s3");
let s4 = document.getElementById("s4");
let s5 = document.getElementById("s5");

let per = document.getElementById("per");
let grade = document.getElementById("grade");



enter.addEventListener("click", () => {

    let sub1 = parseInt(s1.value);
    let sub2 = parseInt(s2.value);
    let sub3 = parseInt(s3.value);
    let sub4 = parseInt(s4.value);
    let sub5 = parseInt(s5.value);


    if(sub1>100 || sub1<0){
        s1.value = "invalid marks";
    }

     if(sub2>100 || sub2<0){
        s2.value = "invalid marks";
    }

    if(sub3 >100 || sub3<0){
        s3.value = "invalid marks";
    }

     if(sub4 >100 || sub4<0){
        s4.value = "invalid marks";
    }

    if(sub5 >100 || sub5<0){
        s5.value = "invalid marks";
    }



    let sum = sub1 + sub2 + sub3 + sub4 + sub5;
    let total = 500;
    let perc = (sum / total) * 100;

    per.innerHTML = perc.toFixed(2)+ " %"; 

    if (perc >= 90) {
        grade.innerHTML = "A+";
    } else if (perc >= 80 && perc < 90) {
        grade.innerHTML = "A";
    } else if (perc >= 70 && perc < 80) {
        grade.innerHTML = "B";
    } else if (perc >= 60 && perc < 70) {
        grade.innerHTML = "C";
    } else if (perc >= 50 && perc < 60) {
        grade.innerHTML = "D";
    } else if (perc >= 33 && perc < 50) {
        grade.innerHTML = "E";
    } else {
        grade.innerHTML = "Below average";
    }


});


