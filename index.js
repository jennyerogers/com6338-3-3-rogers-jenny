// Your code here
var questionsArr = [
    {
        question: 'Welcome! This quiz is true or false. Select "OK" to choose true and "cancel" to choose false. Select true to start. Enjoy!',
        answer: true
    },
    {
        question: 'Dinosaurs exist',
        answer: false
    },
    {
        question: 'Birds are descendants of dinosaurs',
        answer: true
    },
    {
        question: 'T-Rex is short for Tyrannosaurus Rex',
        answer: true
    },
    {
        question: 'The popular movie "Jurassic Park" stars Chris Pratt',
        answer: false
    },
    {
        question: 'The brachiosaurus is an herbivore',
        answer: true
    },    
]


function runQuiz () {
    var correctanswer = 0
    for (var i=0; i<questionsArr.length; i++) {
        if (confirm(questionsArr[i].question) === questionsArr[i].answer) { correctanswer++
        }
    }

    percent = Math.round((correctanswer/questionsArr.length) * 100)+'%'
    alert('Nice work! Your score is ' + percent);

}