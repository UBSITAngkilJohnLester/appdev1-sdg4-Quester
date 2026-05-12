import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-hprogit1-component',
  imports: [RouterLink,  FormsModule, CommonModule],
  templateUrl: './hprogit1-component.html',
  styleUrl: './hprogit1-component.css',
})
export class HProgit1Component {
 constructor(private router: Router){}

  mode: 'intro' | 'quiz' | 'result' = 'intro'; //to distinguish where the user is
  score = 0;
  passingScore = 14;

  startQuiz() {
    //starts the quiz
    this.mode = 'quiz';
  }

  //allows the user to move to higher difficulty if he/she passed the quiz
  finishQuiz() {
    const progress = JSON.parse(localStorage.getItem('quizProgress') || '{}');

    if (this.score >= this.passingScore) {
      progress.opsystMediumDone = true;
    }

    localStorage.setItem('quizProgress', JSON.stringify(progress));

    this.mode = 'result';
  }
  
  //all questions and options for the quiz
  questions = [
    {
      question: '1. Trace the following code. What is the output? \nint x = 10; \nint y = 3; \nSystem.out.println(x + y); \nSystem.out.println(x - y);',
      options: [
        '13 and 17',
        '30 and 13',
        '7 and 13',
        '13 and 30',
      ],
      answer: 0,
    },
    {
      question: '2. Trace this code. What is printed? \nboolean a = true; \nboolean b = false; \nSystem.out.println(a && b); \nSystem.out.println(a || b);',
      options: [
        'true, true', 
        'false, true', 
        'true, false', 
        'false, false'
      ],
      answer: 1,
    },
    {
      question: '3. Trace the following if/else code. What does it print? \nint score = 75; \nif (score >= 90) { \nSystem.out.println("A"); \n} else if (score >= 75) { \nSystem.out.println("B"); \n} else { \nSystem.out.println("C"); \n}',
      options: [
        'A',
        'B',
        'C',
        'Nothing is printed',
      ],
      answer: 1,
    },
    {
      question: '4. Trace this for loop. How many lines are printed and what is the last value? \nfor (int i = 0; i < 5; i++) { \nSystem.out.println(i * 2); \n}',
      options: [
        '5 lines, last value is 10',
        '4 lines, last value is 8',
        '5 lines, last value is 8',
        '6 lines, last value is 10',
      ],
      answer: 2,
    },
    {
      question: '5. Trace this while loop. What is the final output? \nint count = 1; \nwhile (count <= 3) { \nSystem.out.println("Count: " + count); \ncount++; \n}',
      options: [
        'Count: 0, Count: 1, Count: 2',
        'Count: 1, Count: 2, Count: 3',
        'Count: 1, Count: 2, Count: 3, Count: 4',
        'The loop runs infinitely',
      ],
      answer: 1,
    },
    {
      question: '6. Given int[] nums = {4, 8, 15, 16, 23}, what does nums[0] + nums[2] evaluate to?',
      options: [
        '12',
        '23',
        '19',
        '31',
      ],
      answer: 2,
    },
    {
      question: '7. What is the return value of this function when called as add(3, 7)? \nint add(int a, int b) { \nreturn a + b; \n}',
      options: [
        '3',
        '7',
        '21',
        '10',
      ],
      answer: 3,
    },
    {
      question: '8. What is the bug in this code? \nint result = 0; \nfor (int i = 1; i = 10; i++) { \nresult += i; \n}',
      options: [
        'result is initialized to the wrong value',
        'i = 10 should be i <= 10;',
        'i++ should be i--',
        'result += i should be result = i',
      ],
      answer: 1,
    },
    {
      question: '9. Trace this nested if code. What is printed? \nint x = 5; \nif (x > 0) { \nif (x > 10) { \nSystem.out.println("Large"); \n} else { \nSystem.out.println("Small"); \n} \n} else { \nSystem.out.println("Negative"); \n}',
      options: [
        'Large',
        'Small',
        'Negative',
        'Nothing is Printed',
      ],
      answer: 1,
    },
    {
      question: '10. Trace this loop. What gets printed on the last iteration? \nfor (int i = 5; i >= 1; i--) { \nSystem.out.println(i); \n}',
      options: [
        '0',
        '5',
        '1',
        '2',
      ],
      answer: 2,
    },
    {
      question: '11. A function has no return statement. What return type should it be declared with in Java?',
      options: [
        'null',
        'void',
        '0',
        'empty',
      ],
      answer: 1,
    },
    {
      question: '12. What would happen if count++ is removed from the following loop? \nint count = 1; \nwhile (count <= 10) { \nSystem.out.println(count); \n}',
      options: [
        'The loop runs exactly once', 
        'The program skips the loop entirely', 
        'count becomes negative', 
        'The loop runs forever because count never changes'
      ],
      answer: 3,
    },
    {
      question: '13. Trace this code. What is the last thing printed? \nString[] fruits = {"apple", "banana", "cherry"}; \nfor (int i = 0; i < fruits.length; i++) { \nSystem.out.println(fruits[i]); \n}',
      options: [
        'apple',
        'banana',
        'cherry',
        'fruits[3]',
      ],
      answer: 2,
    },
    {
      question: '14. What is the result of !true in Java?',
      options: [
        'true',
        '1',
        'false',
        'null',
      ],
      answer: 2,
    },
    {
      question: '15. You call a function but ignore its return value. What happens?',
      options: [
        'The program crashes',
        'The function does not execute',
        'The function still runs',
        'The return value is automatically printed',
      ],
      answer: 2,
    },
    {
      question: '16. Trace this: int x = 4; System.out.println(x * x - 1); What is the output?',
      options: [
        '15',
        '17',
        '16',
        '8',
      ],
      answer: 0,
    },
    {
      question: '17. Which of the following correctly builds an expression using arithmetic, comparison, AND logical operators?',
      options: [
        '(x + 5) > 10 && y != 0',
        'x + y',
        'x == y',
        'x && y + 1',
      ],
      answer: 0,
    },
    {
      question: '18. A for loop runs from i = 0 to i < 10 stepping by 2 (i += 2). How many times does the loop body execute?',
      options: [
        '10',
        '4',
        '5',
        '6',
      ],
      answer: 2,
    },
    {
      question: '19. When should a while loop be preferred over a for loop?',
      options: [
        'When looping through all items in an array',
        'When you know exactly how many iterations are needed',
        'When the number of iterations depends on a condition that changes at runtime',
        'When you need to count backwards',
      ],
      answer: 2,
    },
    {
      question: '20. Trace this code. What is stored in result after it runs? \nint result = 0; \nfor (int i = 1; i <= 4; i++) { \nresult += i; \n}',
      options: [
        '4',
        '10',
        '16',
        '6',
      ],
      answer: 1,
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