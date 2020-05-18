var vote1; 
var vote2;
var result=getElementById(result);
var answer1=getElementById(answer1);
var answer2=getElementById(answer2);



document.getElementById("answer1").onclick=function()
{afterVote()};

document.getElementById("answer2").onclick=function()
{afterVote()};

function afterVote() 
{
    console.log("test")
    document.getElementById("result").style.display="block";
    document.getElementById("answer1").style.display="none";
    document.getElementById("answer2").style.display="none";
}





document.getElementById("answer1").addEventListener("click", afterVote);
document.getElementById("answer2").addEventListener("click", afterVote);


