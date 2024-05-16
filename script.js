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
        'question': 'sialala',
        'answer_1': 'asd',
        'answer_2': 'fgh',
        'answer_3': 'jkl',
        'answer_4': 'yxc',
        'right_answer': 4
    },
    {
        'question': 'sialala',
        'answer_1': 'asd',
        'answer_2': 'fgh',
        'answer_3': 'jkl',
        'answer_4': 'yxc',
        'right_answer': 1
    }
];


let currentQuestion = 0;


function init() {
    let questionFooter = document.getElementById('questionFooter');
    questionFooter.innerHTML = generateQuestionFooter();
    showQuestion();
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
    let question = questions[currentQuestion];
    document.getElementById('questionText').innerHTML = `${question['question']}`;
    document.getElementById('answer_1').innerHTML = `${question['answer_1']}`;
    document.getElementById('answer_2').innerHTML = `${question['answer_2']}`;
    document.getElementById('answer_3').innerHTML = `${question['answer_3']}`;
    document.getElementById('answer_4').innerHTML = `${question['answer_4']}`;
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
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(rightAnswer).parentNode.classList.add('bg-success');
    }
    nextQuestionButton.disabled = false;
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