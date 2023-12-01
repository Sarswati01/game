let rule=document.getElementById('rule')
let rules=document.getElementById('rules')
let cross=document.getElementById('cross');

rule.addEventListener("click", () => {
    rules.style.display = "block";
  });
cross.addEventListener("click",()=>{   
    rules.style.display="none";
  });
 
function pickUserHand(hand){
    let lower=document.querySelector('.lower')
    lower.style.display="none"

    let contest=document.querySelector('.contest');  
    contest.style.display="flex";
    
    if(hand=='stone'){
      document.getElementById('userPickedImage');
      document.querySelector(".handImageContainer");
    }
    if(hand=='paper'){
      document.getElementById('userPickedImage');
      document.querySelector(".handImageContainer");
    }
    if(hand=='scissor'){
      document.getElementById('userPickedImage');
      document.querySelector(".handImageContainer");
    }
     
    pickPcHand(hand);
}

function  pickPcHand(hand)
{
  let pcHand=["stone","paper","scissor"];
  let handByPc=pcHand[Math.floor(Math.random()*3)]
  if(handByPc=="stone"){
    document.getElementById('pcPickedImage');
    document.querySelector(".pcImageContainer");
  }
  if(handByPc=="paper"){
    document.getElementById('pcPickedImage');
    document.querySelector(".pcImageContainer");
  }
  if(handByPc=="scissor"){
    document.getElementById('pcPickedImage');
    document.querySelector(".pcImageContainer");
  }
   referee(hand,handByPc);   
}

if(localStorage.getItem("score"))
{
  score=JSON.parse(localStorage.getItem("score"));
  document.querySelector('#comScore h1').innerHTML=score.computerScore;
  document.querySelector('#myScore h1').innerHTML=score.userScore;
}
else
{
  score={
    userScore:0,
    computerScore:0
  }
}

  function referee(userHand, cpHand)
  {
    if (userHand == "paper" && cpHand == "scissor") 
    {
      setDecision("YOU LOST")
      computerScore(score.computerScore +1)
      document.querySelector('.referee h2').textContent="AGAINST PC";
      document.getElementById('next').style.display="none";
      document.querySelector('.pcHand div')
      document.querySelector('.userHand div')
    }
    if (userHand == "paper" && cpHand == "stone") {
      setDecision("YOU WIN");
      document.querySelector('.referee h2').textContent="AGAINST PC";
      document.getElementById('next').style.display="block"
      setScore(score.userScore +1);
      document.querySelector('.userHand div')
      document.querySelector('.pcHand div')
    }
    if (userHand == "paper" && cpHand == "paper") {
      setDecision("TIE UP");
      document.querySelector('.referee h2').textContent="";
      document.getElementById('next').style.display="none";
      document.querySelector('.userHand div').style.boxShadow = "";
      document.querySelector('.pcHand div').style.boxShadow = "";
    }
    if (userHand == "stone" && cpHand == "scissor") {
      setDecision("YOU WIN");
      document.querySelector('.referee h2').textContent="AGAINST PC";
      document.getElementById('next').style.display="block"
      setScore(score.userScore +1);
      document.querySelector('.userHand div')
      document.querySelector('.pcHand div')
    }
    if (userHand == "stone" && cpHand == "paper") {
      setDecision("YOU LOST");
      document.querySelector('.referee h2').textContent="AGAINST PC";
      computerScore(score.computerScore +1)
      document.getElementById('next').style.display="none";
      document.querySelector('.pcHand div')
      document.querySelector('.userHand div')
    }
    if (userHand == "stone" && cpHand == "stone") {
      setDecision("TIE UP");
      document.querySelector('.referee h2').textContent="";
      document.getElementById('next').style.display="none"
      document.querySelector('.userHand div')
      document.querySelector('.pcHand div')
    }
    if (userHand == "scissor" && cpHand == "scissor") {
      setDecision("TIE UP");
      document.getElementById('next').style.display="none"
      document.querySelector('.referee h2').textContent="";
      document.querySelector('.userHand div')
      document.querySelector('.pcHand div')
    }
    if (userHand == "scissor" && cpHand == "stone") {
      document.getElementById('next').style.display="none"
      setDecision("YOU LOST");
      document.querySelector('.referee h2').textContent="AGAINST PC";
      computerScore(score.computerScore +1);
      document.querySelector('.pcHand div')
      document.querySelector('.userHand div')
    }
    if (userHand == "scissor" && cpHand == "paper") {
      setDecision("YOU WIN");
      document.querySelector('.referee h2').textContent="AGAINST PC";
      document.getElementById('next').style.display="block"
      setScore(score.userScore +1);
      document.querySelector('.userHand div')
      document.querySelector('.pcHand div')
    
    }
  };
  
  const setDecision=(decision)=>{
    document.querySelector('.referee h1').textContent=decision;
  }
  
  const restartGame=()=>{
    let contest=document.querySelector('.contest');
    contest.style.display="none";

    let lower=document.querySelector('.lower')
    lower.style.display="flex";

    document.getElementById('next').style.display="none"
  }

  
  let next=document.getElementById('next')
  next.addEventListener("click",()=>{
    document.querySelector('.container').style.display="none"
    document.querySelector('.hurray').style.display="block";
  })

  function restartGameOnFinalPage(){
    document.querySelector('.container').style.display="flex"
    document.querySelector('.hurray').style.display="none";
    let lower=document.querySelector('.lower')
    lower.style.display="flex"

    let contest=document.querySelector('.contest');  
    contest.style.display="none";
    
    document.getElementById('next').style.display="none";
  }

  const setScore = (newScore) => {
    score.userScore = newScore;
    document.querySelector("#myScore h1").innerHTML = newScore;
    localStorage.setItem("score", JSON.stringify(score))
  }

  const computerScore = (newScore) => {
    score.computerScore = newScore;
    document.querySelector("#comScore h1").innerHTML = newScore;
    localStorage.setItem("score", JSON.stringify(score))
  }

  let ruleOfHurray=document.getElementById('ruleOfHurray')
let rulesOfHurray=document.getElementById('rulesOfHurray')
let crossOfHurray=document.getElementById('crossOfHurray');

ruleOfHurray.addEventListener("click", () => {
    rulesOfHurray.style.display = "block";
  });
crossOfHurray.addEventListener("click",()=>{   
    rulesOfHurray.style.display="none";
  });