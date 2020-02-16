async function getQuizes () {
    const data = await fetch ('https://opentdb.com/api.php?amount=10')
    const response = await data.json()
    return response.results;
}

/**
 * 
 var a = async function() {
    return 1;
}
var b = 2
var c = a.then(result => {
    result + b
}).catch(err => {
    console.log(err)
    b + 3
})
*/

// function fetchcreateData() {
//     fetch('https://opentdb.com/api.php?amount=10')
//     .then(response => response.json())
//     .then(data => {
//     console.log(data)})
//     }


let quizes = [] 
let questionNumber = 0; 
let totalNumOfQuiz = 0;
let correctAnswer = 0;

getQuizes().then(function(data) {
    quizes = data
    totalNumOfQuiz = data.length
}) 


function displayQuiz () {
    if (questionNumber + 1 === totalNumOfQuiz) {
        alert('Thanks for completing the quiz, refresh the page for more Trivia Questions')
        //document.getElementById('button').innerText = 'Next Question'
       // document.getElementById('button').innerText = 'Play again'
    } else if (quizes.length > 0) {
        const correct = quizes[questionNumber].correct_answer;
        const incorrect = quizes[questionNumber].incorrect_answers;
        const options = incorrect
        options.push(correct)
        const answer = prompt(`
         ${questionNumber + 1}: ${quizes[questionNumber].question}
         Options: \n 
         ${options.join(' \n')}
        `);
        

        if (answer === correct) {
            alert('Correct answer, you deserve some confetti')
        } else {
            alert(`Wrong answer! Correct answer is ${correct}`)
        }
    } else {
        alert('Trivia is still loading! Please try again in a second...')
    }
    questionNumber++

    //document.getElementById('button').innerText = 'Next Question'
    document.getElementById('button').innerText = 'Play again'
}
