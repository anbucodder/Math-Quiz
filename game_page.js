player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

player1_score = "0";
player2_score = "0";

document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("player2_name").innerHTML=player2_name+" : ";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

question_turn="player1";
answer_turn="player2";

document.getElementById("player_question").innerHTML="Question turn - "+player1_name;
document.getElementById("player_answer").innerHTML="Answer turn - "+player2_name;

function send(){
    num1=document.getElementById("num1").value;
    num2=document.getElementById("num2").value;
    actual_answer=parseInt(num1)*parseInt(num2);
    console.log("number1 = "+num1+" | number2 = "+num2);
    console.log(actual_answer);
    question=num1+" x "+num2;
    console.log(question);

    question_word="<h4 id='word_display'>Q."+question+"</h4>";
    text_input="<br> Answer = <input id='input_check_box' type='text'></input>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + text_input + check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("num1").innerHTML="";
    document.getElementById("num2").innerHTML="";
}
function check(){
    get_answer=document.getElementById("input_check_box").value;
    answer=get_answer.toLowerCase();
    console.log("answer = "+answer);
    if(answer==actual_answer){
        if(answer_turn=="player1"){
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
            answer_turn="player2";
            question_turn="player1";
            document.getElementById("player_question").innerHTML="Question turn - "+player1_name;
            document.getElementById("player_answer").innerHTML="Answer turn - "+player2_name;
        }
        else{
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
            answer_turn="player1";
            question_turn="player2";
            document.getElementById("player_question").innerHTML="Question turn - "+player2_name;
            document.getElementById("player_answer").innerHTML="Answer turn - "+player1_name;
        }
        document.getElementById("output").innerHTML="";
    }
else{
    if(answer_turn=="player1"){
        player1_score=player1_score+1;
        document.getElementById("player1_score").innerHTML=player1_score;
        answer_turn="player2";
        question_turn="player1";
        document.getElementById("player_question").innerHTML="Question turn - "+player1_name;
        document.getElementById("player_answer").innerHTML="Answer turn - "+player2_name;
    }
    else{
        player2_score=player2_score+1;
        document.getElementById("player2_score").innerHTML=player2_score;
        answer_turn="player1";
        question_turn="player2";
        document.getElementById("player_question").innerHTML="Question turn - "+player2_name;
        document.getElementById("player_answer").innerHTML="Answer turn - "+player1_name;
    }
    document.getElementById("output").innerHTML="";
}
}
