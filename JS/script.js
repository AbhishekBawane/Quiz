const questions = [
    {
    text: "Which language is primarily used for web app development?",
    options: ["C#", "Python", "JavaScript", "Swift"],
    correct: 2
},
{
    text: "Which of the following is a relational database management system?",
    options: ["Oracle", "Scala", "Perl", "Java"],
    correct: 0
},
{
    text: "In which language is memory management provided by JVM?",
    options: ["Java", "C", "C++", "Python"],
    correct: 0
},
{
    text: "What does HTML stand for?",
    options: ["Hyperlink and Text Markup Language", "High Technology Modern Language", "Hyper Text Markup Language", "Home Tool Markup Language"],
    correct: 2
},
{
    text: "Which of the following is not a valid variable name in Python?",
    options: ["_myVar", "myVar2", "2myVar", "my_var"],
    correct: 2
},
{
    text: "Which of the following is not an object-oriented programming language?",
    options: ["Java", "C#", "Scala", "C"],
    correct: 3
},
{
    text: "Which tool is used to ensure code quality in JavaScript?",
    options: ["JSLint", "TypeScript", "Babel", "Webpack"],
    correct: 0
},
{
    text: "In which data structure, elements are added at one end and removed from the other?",
    options: ["Array", "Stack", "Queue", "LinkedList"],
    correct: 2
},
{
    text: "What is the primary use of the Git command 'clone'?",
    options: ["To stage changes", "To copy a repository", "To switch to a different branch", "To list all the files in a repository"],
    correct: 1
},
{
    text: "What does API stand for in the context of programming?",
    options: ["Apple Pie Interface", "Application Programming Interface", "Advanced Peripheral Integration", "Application Process Integration"],
    correct: 1
}
];

let submitButton = document.getElementById("submit");
let nextButton = document.getElementById("next");

let questionElement = document.getElementById("question");
let answerList = document.getElementById("answer-list");

let currentQuestion = 0;
let score = 0;


function displayQuestion() {
  const question = questions[currentQuestion];

  questionElement.innerText = question.text;
 while (answerList.firstChild) {
        answerList.removeChild(answerList.firstChild);}
  question.options.forEach((option, index) => {
      const li = document.createElement('li');
      li.innerHTML = `
          <input type="radio" name="answer" id="option${index}" value="${index}">
          <label for="option${index}">${option}</label>
      `;
      answerList.appendChild(li);
  });
}


function checkAnswer() {
  const selected = document.querySelector('input[name="answer"]:checked');
  if (!selected) {
      alert('Please select an answer!');
      return;
  }

  const correctIndex = questions[currentQuestion].correct;
  const listItems = answerList.querySelectorAll('li');
  listItems.forEach((li, index) => {
      li.classList.toggle('correct', index === correctIndex);
  });

  if (parseInt(selected.value) === correctIndex) score++;

  submitButton.classList.add('hidden');
  nextButton.classList.remove('hidden');
}

function handleNext() {
  currentQuestion++;
  
  if (currentQuestion < questions.length) {
      answerList.querySelectorAll('li').forEach(li => {
          li.classList.remove('correct');
      });
      displayQuestion();
      submitButton.classList.remove('hidden');
      nextButton.classList.add('hidden');
  } else {
      alert(`Quiz finished! Your score is: ${score}/${questions.length}`);
      currentQuestion = 0;
      score = 0;
      displayQuestion();
      submitButton.classList.remove('hidden');
      nextButton.classList.add('hidden');
  }
}

submitButton.addEventListener('click', checkAnswer);
nextButton.addEventListener('click', handleNext);

displayQuestion();
nextButton.classList.add('hidden');