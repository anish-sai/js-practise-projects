const answers = {
  q1: "Sachin Tendulkar",
  q2: "11",
  q3: "West Indies",
  q4: "50",
  q5: "Brian Lara",
  q6: "6",
  q7: "MS Dhoni",
  q8: "Leg Before Wicket",
  q9: "Muttiah Muralitharan",
  q10: "6"
};


const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const data = new FormData(form)
  let finalScore = 0;

  for (let [name, value] of data.entries()) {
    if (answers[name] == value)
      finalScore++;
  }

  document.getElementById('output').textContent = `Your score is ${finalScore} out of 10`

  form.reset()

})

// 100 questions ka array hai user aaya use randomly 10 questions show kiya aur uska result
// make the quiz dynamically


