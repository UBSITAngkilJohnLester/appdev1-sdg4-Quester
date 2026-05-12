import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-eopsyst1-component',
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './eopsyst1-component.html',
  styleUrl: './eopsyst1-component.css',
})
export class EOpsyst1Component {
  constructor(private router: Router) {}

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
      progress.opsystEasyDone = true;
    }

    localStorage.setItem('quizProgress', JSON.stringify(progress));

    this.mode = 'result';
  }

  //all questions and options for the quiz
  questions = [
    {
      question: '1. What is an operating system?',
      options: [
        'A type of application software used for word processing',
        'System software that manages hardware, software resources, and provides services for programs',
        'A programming language used to write apps',
        'A device that connects computers to a network',
      ],
      answer: 1,
    },
    {
      question: '2. Which of the following is NOT one of the five topics covered in the OPSYST1 lessons?',
      options: [
        'Process Management', 
        'File System',
        'Internet Protocol', 
        'Memory Management'
      ],
      answer: 2,
    },
    {
      question: '3. What is process in the context of an operating system?',
      options: [
        'A file saved on disk', 
        'A hardware component inside the computer',
        'A program that is currently being executed', 
        'A type of computer network'
      ],
      answer: 2,
    },
    {
      question: '4. What does memory management in an OS primarily deal with?',
      options: [
        'Organizing files on the hard drive', 
        'Controlling how RAM is allocated and freed for programs',
        'Managing the CPU clock speed', 
        'Connecting to the internet'
      ],
      answer: 1,
    },
    {
      question: '5. What is a file system?',
      options: [
        'A method for organizing, storing, and retrieving files on a storage device', 
        'A system for managing running process',
        'A type of RAM used in servers', 
        'Software that handles network connections'
      ],
      answer: 0,
    },
    {
      question: '6. What is a Command Line Interface )CLI)?',
      options: [
        'A visual interface with icons and buttons', 
        'A hardware device for keyboard input',
        'A text-based interface where users type commands to interact with the OS', 
        'A type of network protocol'
      ],
      answer: 2,
    },
    {
      question: '7. True or False: An operating system manages both hardware and software resources.',
      options: [
        'True', 
        'False',
        'It depends on the OS', 
        'Only for server operating systems'
      ],
      answer: 0,
    },
    {
      question: '8. Which of the following is a real-world example of an operating system?',
      options: [
        'Microsoft Word', 
        'Google Chrome',
        'Linux', 
        'Cisco Packet Tracer'
      ],
      answer: 2,
    },
    {
      question: '9. Why is an operating system called "system software"?',
      options: [
        'Because it costs a lot of money', 
        'Because ot forms the base layer that all other software runs on top of the operating system',
        'Because it was created by a large corporation', 
        'because it can only run on servers'
      ],
      answer: 1,
    },
    {
      question: '10. What does process management involve?',
      options: [
        'Saving and opening files', 
        'Connecting, scheduling, and terminating processes while managing multitasking',
        'Connecting devices to a network', 
        'Allocating RAM ro hardware components'
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
