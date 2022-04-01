player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

player1_score = "0";
player2_score = "0";

document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("player2_name").innerHTML=player2_name+" : ";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question turn = "+player1_name;
document.getElementById("player_answer").innerHTML="Answer turn = "+player2_name;

function send(){
    num1=document.getElementById("num1").value;
    num2=document.getElementById("num2").value;
    actual_answer=parseInt(num1)*parseInt(num2);
    console.log("number1 = "+num1+" | number2 = "+num2);

    question=num1+" x "+num2;
    console.log(question);

    question_word="<h4 id='word_display'>Q."+question+"</h4>";
    text_input="<br> Answer = <input id='input_check_box' type='text'></input>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + text_input + check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}
