let questions = [
    {
        'question': 'Wofür steht die Abkürzung CSS?',
        'answer1': 'Computer System Security',
        'answer2': 'Call Server Script',
        'answer3': 'Cascading Style Sheets',
        'answer4': 'Create Separate Section',
        'right_answer': 3
    },
    {
        'question': 'sialala',
        'answer1': 'asd',
        'answer2': 'fgh',
        'answer3': 'jkl',
        'answer4': 'yxc',
        'right_answer': 2
    },
    {
        'question': 'sialala',
        'answer1': 'asd',
        'answer2': 'fgh',
        'answer3': 'jkl',
        'answer4': 'yxc',
        'right_answer': 4
    },
    {
        'question': 'sialala',
        'answer1': 'asd',
        'answer2': 'fgh',
        'answer3': 'jkl',
        'answer4': 'yxc',
        'right_answer': 4
    },
    {
        'question': 'sialala',
        'answer1': 'asd',
        'answer2': 'fgh',
        'answer3': 'jkl',
        'answer4': 'yxc',
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
            <b>1</b> von <b>${questions.length}</b> Fragen
        </span>
        <button type="button" class="btn btn-primary">Nächste Frage</button>
        `;
}


function showQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('questionText').innerHTML = `${question['question']}`;
    document.getElementById('answer1').innerHTML = `${question['answer1']}`;
    document.getElementById('answer2').innerHTML = `${question['answer2']}`;
    document.getElementById('answer3').innerHTML = `${question['answer3']}`;
    document.getElementById('answer4').innerHTML = `${question['answer4']}`;
}



function answer(selection) {
    let question = questions[currentQuestion];
    // slice(-1) - extract the last char of the string ('answer1'.slice(-1) = '1')
    let selectedAnswerNumber = selection.slice(-1);
    // check if the number of the selected answer is the same as the number in 'right_answer'
    if(selectedAnswerNumber == question['right_answer']) {
        console.log('richtig');
        // selection in this case is the id of the card, parentNode means adding the class to the parrent element of the answer
        document.getElementById(selection).parentNode.classList.add('bg-success'); // bg-success is a bootstrap class
    } else {
        console.log('falsch');
        document.getElementById(selection).parentNode.classList.add('bg-danger');
    }
}