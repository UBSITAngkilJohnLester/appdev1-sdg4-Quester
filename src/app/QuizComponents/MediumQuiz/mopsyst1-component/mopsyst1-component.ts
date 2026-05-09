import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-mopsyst1-component',
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './mopsyst1-component.html',
  styleUrl: './mopsyst1-component.css',
})
export class MOpsyst1Component {
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
      progress.opsystMediumDone = true;
    }

    localStorage.setItem('quizProgress', JSON.stringify(progress));

    this.mode = 'result';
  }

  questions = [
    {
      question: '1. Whats the key difference between a process and a program?',
      options: [
        'A program is actively running; a process is stored on disk',
        'A process is a program in active execution; a program is a static set of instructions on disk',
        'They are the same thing',
        'A program is larger than a process',
      ],
      answer: 1,
    },
    {
      question: '2. What is multitasking in an operating system?',
      options: [
        'Running two CPU at the same time', 
        'Saving multiple files simultaniously', 
        'The ability to run multiple processes at the same time', 
        'Opening multiple browser tabs'
      ],
      answer: 2,
    },
    {
      question: '3. What is virtual memory?',
      options: [
        'memory stored inside the CPU',
        'A technique that uses part of the hard disk as if it were RAM',
        'The memory used by virtual machines only',
        'RAM that is shared between two computers',
      ],
      answer: 1,
    },
    {
      question: '4. What is the kernal of an operating system?',
      options: [
        'The user interface of the OS',
        'A type of file system',
        'The core component that directly manages hardware and system resources',
        'The process schedulers',
      ],
      answer: 2,
    },
    {
      question: '5. What is process scheduling?',
      options: [
        'Organizing processes into folders',
        'Determining which process gets CPU time and in what order',
        'Allocating memory to a new program',
        'Saving process data to a hard drive',
      ],
      answer: 1,
    },
    {
      question: '6. What is a deadlock in process management?',
      options: [
        'A process that runs too slowly',
        'A loop never ends',
        'When two processes wait for each other indefinitely',
        'When a process is forcebly terminated by the OS',
      ],
      answer: 2,
    },
    {
      question: '7. What happens to a process`s resources when it terminates?',
      options: [
        'They remain allocated until the computer restarts',
        'The OS reclaims them',
        'They are transfered to the next running process',
        'They are stored in a log file',
      ],
      answer: 1,
    },
    {
      question: '8. What is the purpose of file permissions in an OS?',
      options: [
        'To speed up file access',
        'To control who can read, write, or execute a file',
        'To compress files to save space',
        'To backup files automatically',
      ],
      answer: 1,
    },
    {
      question: '9. What is paging in memory management?',
      options: [
        'Dividing memory into fixed-sized box',
        'Sending a message to another process',
        'Saving a document to a specific page number',
        'Restarting a process after it crashes',
      ],
      answer: 0,
    },
    {
      question: '10. What is context switching?',
      options: [
        'Converting a file to a different format',
        'Moving a file from one folder to another',
        'Switching between different operating systems',
        'Saving the state of a running process and loading the state of another',
      ],
      answer: 3,
    },
    {
      question: '11. Which of the following best describes the role of an OS between the user and hardware?',
      options: [
        'The OS has no direct relationship with hardware',
        'The OS acts as an intermediary',
        'Users communicate with hardware directly without needing an OS',
        'The os only manages network connections',
      ],
      answer: 1,
    },
    {
      question: '12. What is the difference between RAM and storage in memory management?',
      options: [
        'RAM is temporary; storage is permanent', 
        'RAM is where the OS is installed; storage is where programs run', 
        'RAM is permanent; storage is temporary', 
        'They serve the same purpose'
      ],
      answer: 0,
    },
    {
      question: '13. What are the three common process state?',
      options: [
        'Loading, Saving, Closing',
        'Running, Ready, Waiting',
        'Active, Passive, Idle',
        'Open, Closed, Pending',
      ],
      answer: 1,
    },
    {
      question: '14. What is internal fragmentation in memory management?',
      options: [
        'When free memory is scattered in small pieces across RAM',
        'When allocated memory blocks are larger than what the process needs',
        'When a process uses more memory than requested',
        'When the hard drive splits a file across multiple sectors',
      ],
      answer: 1,
    },
    {
      question: '15. Why do experienced users often prefer a CLI over a DUI?',
      options: [
        'CLIs have better graphics',
        'CLIs are easier for beginners',
        'CLIs allow automation through scripts and give more direct control with fewer system resources used',
        'GUIs are unstable on modern operating systems',
      ],
      answer: 2,
    },
    {
      question: '16. What does an OS use to prevent one process from accessing another`s memory?',
      options: [
        'Encryption keys',
        'File permissions',
        'Memory protection',
        'The file System',
      ],
      answer: 2,
    },
    {
      question: '17. Which of the following best describes a journaling file system?',
      options: [
        'A file system that logs user activity',
        'A file system that keeps a log of changes before committing them',
        'A file system that uses compression for all stored files',
        'A file system designed only for flash drives',
      ],
      answer: 1,
    },
    {
      question: '18. What is a system call?',
      options: [
        'A type of network request',
        'A request made by a program that crosses into kernel space to access OS services',
        'A function call that stays entirely within user space',
        'A phone call made to tech support',
      ],
      answer: 1,
    },
    {
      question: '19. In Round Robin scheduling, what determines when the CPU switches to the next process?',
      options: [
        'A fixed time slice assigned to each process',
        'The size of the process in memory',
        'Whether the process made a file access request',
        'The priority assigned by the user',
      ],
      answer: 0,
    },
    {
      question: '20. What is a broadcast domain in the context of networking (as covered through Wikipedia in OPSYST1)?',
      options: [
        'A region of RAM reserved for system calls',
        'A process scheduling algorithm',
        'A type of file system partition',
        'A segment where all broadcast frames are delivered to every device',
      ],
      answer: 3,
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
