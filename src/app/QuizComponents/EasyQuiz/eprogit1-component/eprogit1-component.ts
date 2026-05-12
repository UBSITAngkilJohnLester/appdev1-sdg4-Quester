import { Component } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-eprogit1-component',
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './eprogit1-component.html',
  styleUrl: './eprogit1-component.css',
})
export class EProgit1Component {

  constructor(private router: Router){}

  mode: 'intro' | 'quiz' | 'result' = 'intro'; //to distinguish where the user is
  score = 0;
  passingScore = 7;

  startQuiz() {
    //starts the quiz
    this.mode = 'quiz';
  }

  //allows the user to move to higher difficulty if he/she passed the quiz
  finishQuiz() {
    const progress = JSON.parse(localStorage.getItem('quizProgress') || '{}');

    if (this.score >= this.passingScore) {
      progress.progitEasyDone = true;
    }

    localStorage.setItem('quizProgress', JSON.stringify(progress));

    this.mode = 'result';
  }

  //all questions and options for the quiz
  questions = [
    {
      question: '1. What is programming?',
      options: [
        'A process of designing computer hardware',
        'Writing instructions that a computer can execute',
        'Managing files and folders on a computer',
        'Connecting devices to a network',
      ],
      answer: 1,
    },
    {
      question: '2. Which of the following is NOT a programming language mentioned in the Introduction Lesson?',
      options: [
        'Python', 
        'Java', 
        'HTML', 
        'C++'
      ],
      answer: 2,
    },
    {
      question: '3. What is a variable in programming?',
      options: [
        'A fixed value that never changes', 
        'A container that stores data with a name and value', 
        'A type of loop', 
        'A method of compairing two numbers'
      ],
      answer: 1,
    },
    {
      question: '4. Which data type stores whole numbers like 1, 2, and 3?',
      options: [
        'String', 
        'boolean', 
        'float', 
        'int'
      ],
      answer: 3,
    },
    {
      question: '5. What data type would you use to store the text "hello"?',
      options: [
        'int', 
        'float', 
        'String', 
        'boolean'
      ],
      answer: 2,
    },
    {
      question: '6. What does boolean data type store?',
      options: [
        'Decimal numbers', 
        'Whole numbers', 
        'Test values', 
        'True or false'
      ],
      answer: 3,
    },
    {
      question: '7. Which of the following is an arithmetic operator?',
      options: [
        '==', 
        '&&', 
        '*', 
        '!='
      ],
      answer: 2,
    },
    {
      question: '8. Which symbol is a comparison operator?',
      options: [
        '+', 
        '||', 
        '-', 
        '*'
      ],
      answer: 1,
    },
    {
      question: '9. What is the data type for decimal numbers like 3.14?',
      options: [
        'int', 
        'float', 
        'String', 
        'boolean'
      ],
      answer: 1,
    },
    {
      question: '10. At its core, what is programming fundamentally about?',
      options: [
        'Writing code as fast as possible', 
        'using the most programming languages', 
        'Problem-solving', 
        'Designing user interfaces'
      ],
      answer: 2,
    },
  ];

  selectedAnswers: number[] = new Array(this.questions.length).fill(-1);
  currentQuestionIndex = 0;

  //score calculation
  calculateScore() {
    this.score = 0;

    this.questions.forEach((q, i) => {
      if (this.selectedAnswers[i] === q.answer) {
        this.score++;
      }
    });

    console.log('Score:', this.score);
  }

  //moves the quiz forward when button is clicked
  //Ends it if there's no more questions, proceeds to score calculation
  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      this.calculateScore();
      this.finishQuiz();
    }
  }
}