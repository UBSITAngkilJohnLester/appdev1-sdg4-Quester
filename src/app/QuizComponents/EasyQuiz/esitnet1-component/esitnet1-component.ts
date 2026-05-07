import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-esitnet1-component',
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './esitnet1-component.html',
  styleUrl: './esitnet1-component.css',
})
export class ESitnet1Component {
  constructor(private router: Router){}

  mode: 'intro' | 'quiz' | 'result' = 'intro';
  score = 0;
  passingScore = 7;

  startQuiz() {
    this.mode = 'quiz';
  }

  finishQuiz() {
    const progress = JSON.parse(localStorage.getItem('quizProgress') || '{}');

    if (this.score >= this.passingScore) {
      progress.sitnetEasyDone = true;
    }

    localStorage.setItem('quizProgress', JSON.stringify(progress));

    this.mode = 'result';
  }

  questions = [
    {
      question: '1. What is a computer network?',
      options: [
        'A single computer with multiple monitors',
        'A collection of interconnected computers and devices that can share data and resources',
        'A type of operating system',
        'Software used to create websites',
      ],
      answer: 1,
    },
    {
      question: '2. What does IP stand for in networking?',
      options: [
        'Internal Processing', 
        'Internet Protocol', 
        'Input/Process', 
        'Interface Port'
      ],
      answer: 1,
    },
    {
      question: '3. How many layers does the OSI model have?',
      options: [
        '4',
        '5',
        '6',
        '7',
      ],
      answer: 3,
    },
    {
      question: '4. What is the primary function of a router?',
      options: [
        'Connecting devices within the same LAN',
        'Storing data on the network',
        'Forwarding data packets between different netowrks',
        'Providing wireless signals to devices',
      ],
      answer: 2,
    },
    {
      question: '5. What is a network switch?',
      options: [
        'A device that broadcasts data to all connected devices',
        'A device that connects multiple devices in a LAN and forwards data only to the intended recipient',
        'A wireless access point',
        'A device that assigns IP addresses',
      ],
      answer: 1,
    },
    {
      question: '6. What does LAN stand for?',
      options: [
        'Large Access Network',
        'Local Area Network',
        'Link and Node',
        'Layered Address Network',
      ],
      answer: 1,
    },
    {
      question: '7. At which OSI layer does the Internet Protocol (IP) operate?',
      options: [
        'Layer 1 - Physical',
        'Layer 2 - Data Link',
        'Layer 3 - Network',
        'Layer 4 - Transport',
      ],
      answer: 2,
    },
    {
      question: '8. What is a data packet?',
      options: [
        'A physical cable used to connect computers',
        'A small unit of data with source and destination addresses transmitted over a network',
        'A type of network switch',
        'An IP address format',
      ],
      answer: 1,
    },
    {
      question: '9. What is the basic difference between a router and a switch?',
      options: [
        'A switch connects different networks; a router connects devices within the same network',
        'A router connects different networks; a switch connects devies within the same LAN',
        'They perform identical functions',
        'A switch is used only in wireless networks',
      ],
      answer: 1,
    },
    {
      question: '10. What does WAN stand for?',
      options: [
        'Wireless Area Node',
        'Wide Area Network',
        'Wired Access Network',
        'Web Address Node',
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