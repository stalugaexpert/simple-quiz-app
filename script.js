const questionData = [
  {
    question: 'In 1768, Captain James Cook set out to explore which ocean?',
    a: 'A. Pacific Ocean',
    b: 'B. Atlantic Ocean',
    c: 'C. Indian Ocean',
    d: 'D. Arctic Ocean',
    correct: 'a',
  },

  {
    question: 'What is actually electricity?',
    a: 'A. A flow of water',
    b: 'B. A flow of air',
    c: 'C. A flow of electrons',
    d: 'D. A flow of atoms',
    correct: 'c',
  },

  {
    question: 'What is the speed of sound?',
    a: 'A. 120 km/h',
    b: 'B. 1200 km/h',
    c: 'C. 400 km/h',
    d: 'D. 700 km/h',
    correct: 'b',
  },

  {
    question: 'Which is the easiest way to tell the age of many trees?',
    a: 'A. To measure the width of the tree',
    b: 'B. To count the rings on the trunk',
    c: 'C. To count the number of leaves',
    d: 'D. To measure the height of the tree',
    correct: 'b',
  },

  {
    question: 'Where did the powers of Spiderman come from?',
    a: 'A. He was born with them',
    b: 'B. He was bitten by a radioactive spider',
    c: 'C. He went through a scientific experiment',
    d: 'D. He woke up with them after a dream',
    correct: 'b',
  },
];

let actualQuestion = 0;
let score = 0;
const answerEls = document.querySelectorAll('.answer');

const quizEl = document.getElementById('quiz');
const submitBtnEl = document.getElementById('submitBtn');
const questionEl = document.getElementById('question');

const aText = document.getElementById('a_text');
const bText = document.getElementById('b_text');
const cText = document.getElementById('c_text');
const dText = document.getElementById('d_text');

loadData();

function loadData() {
  deselectAnswers();

  const actualData = questionData[actualQuestion];

  questionEl.innerText = actualData.question;
  aText.innerText = actualData.a;
  bText.innerText = actualData.b;
  cText.innerText = actualData.c;
  dText.innerText = actualData.d;
}

function getSelectedAnswer() {
  let answer = null;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtnEl.addEventListener('click', () => {
  const answer = getSelectedAnswer();

  if (answer === null) {
    alert('Please select an answer first!');
  }
  //console.log(answer);

  if (answer) {
    if (answer === questionData[actualQuestion].correct) {
      score++;
    }

    actualQuestion++;
    if (actualQuestion < questionData.length) {
      loadData();
    } else {
      quizEl.innerHTML = `<h2 class="result">You answered corretly at ${score} / ${questionData.length} questions!</h2>
      <button onclick="location.reload()">Reload</button>`;
    }
  }
});
