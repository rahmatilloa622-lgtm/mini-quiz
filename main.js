const questions = [
	{
		question: 'JavaScript nima?',
		answers: [
			"Dasturlash tili",
      "Telefon",
      "Operatsion sistema",
      "Brauzer"
		],
		correctAnswer: 	"Dasturlash tili"
	},

	{
		question: 'HTML nima?',
		answers: [
			"Dasturlash tili",
      "Tuzilish tili",
      "Database",
      "Operatsion sistema"
		],
		correctAnswer: 'Tuzilish tili'
	},

	{
		question: 'Css nima?',
	answers: [
		'Dasturlash tili',
		'Dizayn tili',
		'Belgilash tili',
		'Database'
	],
	correctAnswer: 'Dizayn tili'
}
]


let currentQuestion = 0 

let score = 0

let answered = false

const nextButton = document.getElementById('next')

const questionElement = document.getElementById('question')

questionElement.textContent = questions[0].question

const  result = document.getElementById('result')

const scoreElement = document.getElementById('score')


const answerButtons = document.querySelectorAll('.answers button')

answerButtons.forEach((button, index) => {

  button.textContent = questions[currentQuestion].answers[index]

})

answerButtons.forEach((button) => {

	button.addEventListener('click', () => {

		if(answered){
			return
		}

		answered = true

		if(button.textContent === questions[currentQuestion].correctAnswer){

			result.textContent = "To'g'ri javob✅"

			score++

			scoreElement.textContent = `Natija: ${score}`

		}else{

			result.textContent = "Noto'g'ri javob❌"

		}

	})

})

nextButton.addEventListener('click', () => {

	currentQuestion++

	answered = false

	result.textContent = ''
	
	if(currentQuestion >= questions.length){

		questionElement.textContent = 'Savollar tugadi 🎉'

		return 
	}

	questionElement.textContent = questions[currentQuestion].question

	answerButtons.forEach((button, index) => {

		button.textContent = questions[currentQuestion].answers[index]

	})

})

console.log(answerButtons)

