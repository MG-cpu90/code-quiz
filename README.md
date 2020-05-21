# Assignment 4: Code Quiz

## Summary

* The following application is a code quiz created using html, bootstrap, css, javascript, and jQuery, which presents five pages of multiple questions to a user.

* The landing page contains: 

    * Instructions

    * A link to a "high-scores" page 

    * A button that will lead to the next page to staart the quiz

* Each of the subsequent five pages has four questions which should all be completed within the time limit of 75 seconds; 

    * When a user clicks on the correct response, the text "correct" will appear below the buttons

    * When a user clicks on the incorrect response, the text "wrong" will appear below the buttons, and 10 seconds will be subtracted from the timer

* The final page takes the user's time and lists it as their score, and includes a form for them to submit their initials and inclue their score in the "high-scores" page


## Usage
### User Story

```
AS A coding bootcamp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

### Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
```

## Successes

* I was successfully able to use bootstrap (as well as columns and rows), combined with CSS, to style the page

* I was successfully able to use separate &ltdiv&gt containers in the html to act as the pages of the quiz

    * Through CSS, I was able to hide and render each &ltdiv&gt visible when the "next" button on each page was clicked

* I was successfully able to make the timer count down, deduct 10 seconds from each incorrect answer, and stop at the end of the quiz

* I was able to append the time to the user's listed score on the final page, and was able to have it append to the "high-scores" page

* On the "high-scores" page, I was also able to add buttons which removed scores or allowed a user to return to the landing page

* I was able to use jQuery to render the questions of the quiz


## Bugs
* Although I was able to use the DOM form submit() method and prevent the page from refreshing if the "submit" button on the form was clicked, I was unable to make the form submit the user's initials and save them to the "high-scores"

* I was also unable to have the correct score append to the "high-scores" page; the initial time appends

* I was also unable to write a function that would determine that a user would receive a score of 0 if none of the responses were clicked

* I was unable to clean up the JavaScript and HTML code so as to avoid so much lengthy repetition

## Links
* Deployed URL link: https://mg-cpu90.github.io/code-quiz/index.html
* GitHub Repository link: https://github.com/MG-cpu90/code-quiz