let questions = [
    {
        'question': 'Wofür steht die Abkürzung CSS?',
        'answer_1': 'Computer System Security',
        'answer_2': 'Call Server Script',
        'answer_3': 'Cascading Style Sheets',
        'answer_4': 'Create Separate Section',
        'right_answer': 3
    },
    {
        'question': 'Welche Textausgabe lernt man in den meisten Programmiersprachen als erstes?',
        'answer_1': 'Welcome',
        'answer_2': 'Hello World',
        'answer_3': 'Hey Coder',
        'answer_4': 'New Website',
        'right_answer': 2
    },
    {
        'question': 'Wer hat JavaScript erfunden?',
        'answer_1': 'Dave Mustaine',
        'answer_2': 'Marshall Mathers',
        'answer_3': 'Yuddai Miyamoto',
        'answer_4': 'Brendan Eich',
        'right_answer': 4
    },
    {
        'question': 'Was bedeutet HTML ausgeschrieben',
        'answer_1': 'Hardware Trends Manager List',
        'answer_2': 'Hypertext Main Logic',
        'answer_3': 'Highend Text Manager Language',
        'answer_4': 'Hypertext Markup Language',
        'right_answer': 4
    },
    {
        'question': 'Wofür steht das HTML-Tag "a"?',
        'answer_1': 'Link',
        'answer_2': 'Bild',
        'answer_3': 'Text in Fettschrift',
        'answer_4': 'CSS-Class',
        'right_answer': 1
    }
];


let currentQuestion = 0;
let rightAnswers = 0;
let AUDIO_SUCCESS = new Audio('audio/right_answer.mp3');
let AUDIO_FAIL = new Audio('audio/wrong_answer.mp3');


function init() {
    let questionFooter = document.getElementById('questionFooter');
    questionFooter.innerHTML = generateQuestionFooter();
    showQuestion();
    resetAnswers();
}


function generateQuestionFooter() {
    return `
        <span>
            <b>${currentQuestion + 1}</b> von <b>${questions.length}</b> Fragen
        </span>
        <button type="button" class="btn btn-primary" id="nextQuestionButton" onclick="nextQuestion()" disabled>Nächste Frage</button>
        `;
}


function showQuestion() {
    if (currentQuestion >= questions.length) {
        document.getElementById('questionBody').style.display = 'none';
        document.getElementById('cardImgTop').style.display = 'none';
        document.getElementById('endScreen').style.display = 'block';
        endScreenScore();
        return;
    }
    let progressPercent = (currentQuestion + 1) / questions.length;
    progressPercent = Math.round(progressPercent * 100);
    document.getElementById('progressBar').innerHTML = `${progressPercent}%`;
    document.getElementById('progressBar').style.width = `${progressPercent}%`;
    let question = questions[currentQuestion];
    document.getElementById('questionText').innerHTML = `${question['question']}`;
    document.getElementById('answer_1').innerHTML = `${question['answer_1']}`;
    document.getElementById('answer_2').innerHTML = `${question['answer_2']}`;
    document.getElementById('answer_3').innerHTML = `${question['answer_3']}`;
    document.getElementById('answer_4').innerHTML = `${question['answer_4']}`;
    addOnclick();
}



function answer(selection) {
    let question = questions[currentQuestion];
    // slice(-1) - extract the last char of the string ('answer1'.slice(-1) = '1')
    let selectedAnswerNumber = selection.slice(-1);
    let rightAnswer = `answer_${question['right_answer']}`;
    let nextQuestionButton = document.getElementById('nextQuestionButton');
    // check if the number of the selected answer is the same as the number in 'right_answer'
    if (selectedAnswerNumber == question['right_answer']) {
        // selection in this case is the id of the card, parentNode means adding the class to the parrent element of the answer
        document.getElementById(selection).parentNode.classList.add('bg-success'); // bg-success is a bootstrap class
        AUDIO_SUCCESS.play();
        rightAnswers++;
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(rightAnswer).parentNode.classList.add('bg-success');
        AUDIO_FAIL.play();
    }
    nextQuestionButton.disabled = false;
    removeOnclick();
}


function removeOnclick() {
    document.getElementById('answer_1').onclick = null;
    document.getElementById('answer_2').onclick = null;
    document.getElementById('answer_3').onclick = null;
    document.getElementById('answer_4').onclick = null;
}


function addOnclick() {
    document.getElementById('answer_1').onclick = function () { answer('answer_1'); };
    document.getElementById('answer_2').onclick = function () { answer('answer_2'); };
    document.getElementById('answer_3').onclick = function () { answer('answer_3'); };
    document.getElementById('answer_4').onclick = function () { answer('answer_4'); };
}



function nextQuestion() {
    currentQuestion++;
    showQuestion();
    nextQuestionButton.disabled = true;
    resetAnswers();
    init();
}


function resetAnswers() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
}


function endScreenScore() {
    document.getElementById('rightAnswersAmount').innerHTML = rightAnswers;
    document.getElementById('questionsAmount').innerHTML = questions.length;
}


function restartGame() {
    document.getElementById('questionBody').style.display = 'block';
    document.getElementById('cardImgTop').style.display = 'block';
    document.getElementById('endScreen').style.display = 'none';
    currentQuestion = 0;
    rightAnswers = 0;
    init();
}