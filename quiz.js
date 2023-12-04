// Define quiz questions and answers
const quizData = [
    {
      question: "What is the capital of India?",
      options: ["Uttar pradesh", "Gujrat", "Delhi", "Maharashtra"],
      answer: "Delhi"
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Jupiter", "Saturn", "Neptune", "Uranus"],
      answer: "Jupiter"
    },
    {
      question: "What is the smallest country in the world?",
      options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
      answer: "Vatican City"
    },
    {
      question: "What is the highest mountain in the world?",
      options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
      answer: "Mount Everest"
    },
    {
      question: "What is the largest ocean in the world?",
      options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
      answer: "Pacific Ocean"
    },
    {
      question: "What is the currency of India?",
      options: ["Rupees", "Dollar", "Euro", "Pound"],
      answer: "Rupees"
    },
    
    {
      question: "What is the largest desert in the world?",
      options: ["Sahara Desert", "Arabian Desert", "Gobi Desert", "Antarctic Desert"],
      answer: "Antarctic Desert"
    },
    {
      question: "What is the highest waterfall in the world?",
      options: ["Angel Falls", "Niagara Falls", "Victoria Falls", "Iguazu Falls"],
      answer: "Angel Falls"
    },
    {
      question: "What is the largest country in the world by area?",
      options: ["Russia", "Canada", "China", "United States"],
      answer: "Russia"
    },
    {
      question: "Who is the President of India?",
      options: ["Narendra Modi","Droupadi Murmu","Sonia Gandhi","Jay Shankar"],
      answer:"Droupadi Murmu"
    }
  ];
  
  // Get HTML elements
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("answer-options");
  const scoreEl = document.getElementById("score");
  
  // Initialize quiz variables
  let currentQuestion = 0;
  let score = 0;
  
  // Load quiz data
  function loadQuiz() {
    // Load question
    questionEl.innerText = quizData[currentQuestion].question;
  
    // Load answer options
    optionsEl.innerHTML = "";
    quizData[currentQuestion].options.forEach((option, index) => {
      const optionEl = document.createElement("button");
      optionEl.classList.add("answer-option");
      optionEl.id = `option${index + 1}`;
      optionEl.innerText = option;
      optionEl.addEventListener("click", checkAnswer);
      optionsEl.appendChild(optionEl);
    });
  }
  
  // Check if selected answer is correct
  function checkAnswer(event) {
    const selectedOption = event.target;
    const correctAnswer = quizData[currentQuestion].answer;
  
    if (selectedOption.innerText === correctAnswer) {
      selectedOption.classList.add("correct");
      score++;
    } else {
      selectedOption.classList.add("incorrect");
    }
  
    // Disable answer options
    optionsEl.childNodes.forEach(option => {
      option.disabled = true;
      if (option.innerText === correctAnswer) {
        option.classList.add("correct");
      }
    });
  
    // Update score
    scoreEl.innerText = `Score: ${score}`;
  
    // Load next question after 1 second
    setTimeout(() => {
      currentQuestion++;
      if (currentQuestion < quizData.length) {
        loadQuiz();
      } else {
        endQuiz();
      }
    }, 1000);
  }
  
  // End quiz and display final score
function endQuiz() {
    questionEl.innerText = "Quiz complete!";
    optionsEl.innerHTML = "";
    scoreEl.innerText = `Final score: ${score}`;
  }
    
  // Load first question
  loadQuiz();