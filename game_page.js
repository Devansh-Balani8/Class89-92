player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;


function send(){
get_word=document.getElementById("word").value;
word=get_word.toLowerCase();
letter1=word.charAt(1);
pos1=Math.floor(word.length/2);
letter2=word.charAt(pos1);
pos2=word.length-1;
letter3=word.charAt(pos2);
fword=word.replace(letter1,"_");
sword=fword.replace(letter2,"_");
tword=sword.replace(letter3,"_");
question_word="<h4 id='word'>Q."+tword+"</h4>"
input_box="<br>Answer :<input type='text' id='input'>"
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row=question_word+input_box+check_button;
document.getElementById("output").innerHTML=row;
}

question_turn="player1"
answer_turn="player2"

function check(){
answer_word=document.getElementById("input").value;
answer=answer_word.toLowerCase();
if (answer==word){
   if (answer_turn=="player2"){
   player2_score=player2_score+1;
   document.getElementById("player2_score").innerHTML=player2_score;
   }
  else{
  player1_score=player1_score+1;
  document.getElementById("player1_score").innerHTML=player1_score;
  }
}
if (question_turn=="player1"){
   question_turn="player2";
   document.getElementById("player_question").innerHTML="question turn-"+ player2_name;
}
else{
    question_turn="player1";
    document.getElementById("player_question").innerHTML="question turn-"+ player1_name;
}
if (answer_turn=="player1"){
    answer_turn="player2";
    document.getElementById("player_answer").innerHTML="question turn-"+ player2_name;
 }
 else{
     answer_turn="player1";
     document.getElementById("player_answer").innerHTML="question turn-"+ player1_name;
 }
}