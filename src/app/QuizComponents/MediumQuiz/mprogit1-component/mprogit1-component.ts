import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-mprogit1-component',
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './mprogit1-component.html',
  styleUrl: './mprogit1-component.css',
})
export class MProgit1Component {

  constructor(private router: Router){}

  mode: 'intro' | 'quiz' | 'result' = 'intro';
  score = 0;
  passingScore = 14;

  startQuiz() {
    this.mode = 'quiz';
  }

  finishQuiz() {
    const progress = JSON.parse(localStorage.getItem('quizProgress') || '{}');

    if (this.score >= this.passingScore) {
      progress.progitMediumDone = true;
    }

    localStorage.setItem('quizProgress', JSON.stringify(progress));

    this.mode = 'result';
  }

  questions = [
    {
      question: '1. What does an if/else control structure do?',
      options: [
        'Repeats a block of code a set number of times',
        'Checks a condition and runs different code depending on whether it is true or false',
        'Stores multiple values in a single variable',
        'Groups code into reusable functions',
      ],
      answer: 1,
    },
    {
      question: '2. What is the key difference between a for loop and a while loop?',
      options: [
        'A for loop uses conditions; a while loop uses counters', 
        'A for loop runs a set number of times; a while loop runs until a condition becomes false', 
        'A while loop is faster than a for loop', 
        'There is no difference between them'
      ],
      answer: 1,
    },
    {
      question: '3. What does it mean for a function to "return a value"?',
      options: [
        'The function prints a value to the screen',
        'The function takes a value from the user',
        'The function stores a value in an array',
        'The function sends a result back to the code that called it',
      ],
      answer: 3,
    },
    {
      question: '4. Why are infinite loops problematic?',
      options: [
        'They run too slowly',
        'They skip certain lines of code',
        'They run forever, causing the program to freeze or crash',
        'They cause variables to reset to zero',
      ],
      answer: 2,
    },
    {
      question: '5. At what index does the first element of an array sit?',
      options: [
        '1',
        '0',
        '-1',
        '-2',
      ],
      answer: 1,
    },
    {
      question: '6. What is the purpose of parameters in a function?',
      options: [
        'To allow the function to accept input values',
        "To define the function's return type",
        'To make the function run faster',
        'To prevent the function from being called more than once',
      ],
      answer: 0,
    },
    {
      question: '7. 	Which of the following is a common output method mentioned in the lesson?',
      options: [
        'input()',
        'scanf()',
        'console.log()',
        'read()',
      ],
      answer: 2,
    },
    {
      question: '8. What happens when a condition in an if statement is false and there is no else block?',
      options: [
        'The program repeats the if block until the condition is true',
        'The program throws an error',
        'The if block runs anyway',
        'The program skips the if block ',
      ],
      answer: 3,
    },
    {
      question: '9. What does the logical operator && do?',
      options: [
        'Returns true if at least one condition is true',
        'Compares two numbers',
        'Reverses the result of a condition',
        'Returns true only if both conditions are true',
      ],
      answer: 3,
    },
    {
      question: '10. What distinguishes an array from a regular variable?',
      options: [
        'Arrays can only be used inside loops',
        'A regular variable is faster than an array',
        'An array stores multiple values in a single variable',
        'An array can only store numbers',
      ],
      answer: 2,
    },
    {
      question: '11. What does I/O stand for in the context of programming?',
      options: [
        'Integer/Object',
        'Internal/Optional',
        'Index/Offset',
        'Input/Output',
      ],
      answer: 3,
    },
    {
      question: '12. Which operator would you use to check if two values are NOT equal?',
      options: [
        '==', 
        '>=', 
        '!=', 
        '&&'
      ],
      answer: 2,
    },
    {
      question: '13. What is the main benefit of using functions in a program?',
      options: [
        'They allow code to be reused without rewriting it',
        'They replace the need for variables',
        'They make loops run faster',
        'They make variables accessible from anywhere',
      ],
      answer: 0,
    },
    {
      question: '14. Which loop type is best suited when the number of iterations is unknown in advance?',
      options: [
        'while loop',
        'repeat loop',
        'do loop',
        'for loop',
      ],
      answer: 0,
    },
    {
      question: '15. What does the ! (NOT) logical operator do?',
      options: [
        'Checks if two values are equal',
        'Combines two conditions',
        'Returns true if either condition is true',
        'Reverses the boolean result of a condition',
      ],
      answer: 3,
    },
    {
      question: '16. Given int x = 5; and int y = 2;, what does x + y evaluate to?',
      options: [
        '52',
        '7',
        '3',
        '10',
      ],
      answer: 1,
    },
    {
      question: '17. What kind of data does the || operator work with?',
      options: [
        'Numbers',
        'Strings',
        'Booleans',
        'Arrays',
      ],
      answer: 2,
    },
    {
      question: '18. "Computers only do exactly what they are told." What does this imply?',
      options: [
        'Computers will fix errors automatically',
        'Computers can guess what the programmer intended',
        'Computers will stop running if given incorrect code',
        'If the programmer makes an error, the computer still executes it exactly as written',
      ],
      answer: 3,
    },
    {
      question: '19. What is the difference between = and == in programming?',
      options: [
        '= assigns a value to a variable; == compares two values',
        '= compares two values; == assigns a value',
        'They are interchangeable',
        '== is only used in loops'
      ],
      answer: 0,
    },
    {
      question: '20. Which statement about arrays is TRUE?',
      options: [
        'Array indexes start at 1',
        'You can loop through arrays using for loops',
        'Arrays cannot store strings',
        'Arrays can only store numbers',
      ],
      answer: 1,
    },
  ];

  selectedAnswers: number[] = new Array(this.questions.length).fill(-1);
  currentQuestionIndex = 0;

  calculateScore() {
    this.score = 0;

    this.questions.forEach((q, i) => {
      if (this.selectedAnswers[i] === q.answer) {
        this.score++;
      }
    });

    console.log('Score:', this.score);
  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      this.calculateScore();
      this.finishQuiz();
    }
  }
}