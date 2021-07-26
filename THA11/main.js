const quizDB = [{
        question: "HTML stands for -",
        a: "HighText Machine Language",
        b: "HyperText and links Markup Language",
        c: "HyperText Markup Language",
        d: "None of these",
        ans: "ans3",

    },
    {
        question: "The correct sequence of HTML tags for starting a webpage is -",
        a: "Head, Title, HTML, body",
        b: "HTML, Body, Title, Head",
        c: "HTML, Head, Title, Body",
        d: "HTML, Head, Title, Body",
        ans: "ans4",

    },
    {
        question: "Which of the following tag is used for inserting the largest heading in HTML?",
        a: "<h3>",
        b: "<h1>",
        c: "<h5>",
        d: "<h6>",
        ans: "ans2",

    },
    {
        question: "<input> is -",
        a: "a format tag.",
        b: "an empty tag.",
        c: "All of the above",
        d: "None of the above",
        ans: "ans2",

    },
    {
        question: "The <hr> tag in HTML is used for -",
        a: "new line",
        b: "vertical ruler",
        c: "new paragraph",
        d: "horizontal ruler",
        ans: "ans4",

    }
    // {
    //     question: "",
    //     a: "",
    //     b: "",
    //     c: "",
    //     d: "",
    //     ans: "",

    // }


]
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.option');
const showscore = document.querySelector('#show-score');
const reload = document.querySelector('#reload');

let questioncount = 0;
let score = 0;
const loadQuestion = () => {
    question.innerText = quizDB[questioncount].question;
    option1.innerText = quizDB[questioncount].a;
    option2.innerText = quizDB[questioncount].b;
    option3.innerText = quizDB[questioncount].c;
    option4.innerText = quizDB[questioncount].d;

    // console.log(quizDB);
}
loadQuestion();

const getCheckAns = () => {
    let Answer;
    answers.forEach((currentAns) => {
        if (currentAns.checked) {
            Answer = currentAns.id;
        }

    })
    return Answer;
}
const deselectAll = () => {
    answers.forEach((currentAns) => currentAns.checked = false);
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAns();
    console.log(checkedAnswer);
    if (checkedAnswer === quizDB[questioncount].ans) {
        score++;
    };
    questioncount++;
    if (questioncount < quizDB.length) {
        deselectAll();
        loadQuestion();
    } else {
        showscore.innerHTML = `
            <h3> Score = ${score}/${quizDB.length}</h3>
            <button class="btn" id="reload" onclick = 'location.reload()'> Play again </button>
        `;
    }
})