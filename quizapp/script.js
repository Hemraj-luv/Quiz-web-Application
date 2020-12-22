import {quiz} from 'quizapp/static/quizapp/quiz'

let attempt = 0;
let index = 0;
let score = 0;
let wrong = 0;
let questions = quiz.sort(function () {
    return 0.5 - Math.random();
});
$(function () {
    let totaltime = 200;
    let min = 0;
    let sec = 0;
    let counter = 0;

    let timer = setInterval(function () {
        counter++;
        min = Math.floor((totaltime - counter) / 60);
        sec = totaltime - (min * 60) - counter;

        $(".timerbox span").text(min + ":" + sec);

        if (counter === totaltime) {
            clearInterval(timer);
        }
    }, 1000);

    printquestion(index);
});

function printquestion(i) {

    $(".questionbox").text(questions[i].question);
    $(".optionbox span").eq(0).text(questions[i].option[0]);
    $(".optionbox span").eq(1).text(questions[i].option[1]);
    $(".optionbox span").eq(2).text(questions[i].option[2]);
    $(".optionbox span").eq(3).text(questions[i].option[3]);
}

function checkAnswer(option) {
    attempt++;
    let optionClicked = $(option).data("opt");
    console.log(questions[index]);
    if (optionClicked == questions[index].answer) {
        $(option).addClass("right");
        score++;
    } else {
        $(option).addClass("wrong");
        wrong++;
    }
    $(".scorebox span").text("score");
}
