import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-hopsyst1-component',
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './hopsyst1-component.html',
  styleUrl: './hopsyst1-component.css',
})
export class HOpsyst1Component {
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
      question: '1. What is the main difference between preemptive and non-preemptive CPU scheduling?',
      options: [
        'Preemptive scheduling only works on multi-core CPUs',
        'In preemptive scheduling, the OS can forcibly remove a process from the CPU; in non-preemptive, a process keeps the CPU until it voluntarily releases it',
        'Non-preemptive scheduling is used in modern OSes because it is faster',
        'Preemptive scheduling does not use a process queue',
      ],
      answer: 1,
    },
    {
      question: '2. Which type of memory fragmentation does paging eliminate?',
      options: [
        'Internal fragmentation', 
        'External fragmentation', 
        'Both internal and external', 
        'Neither; paging introduces new fragmentation'
      ],
      answer: 1,
    },
    {
      question: '3. What is thrashing and what causes it?',
      options: [
        'A CPU overheating due to excessive multitasking',
        'A virus that corrupts file system metadata',
        'When a system spends more time swapping pages than executing processes, usually due to too many processes competing for limited RAM',
        'When two processes write to the same memory address simultaneously',
      ],
      answer: 2,
    },
    {
      question: '4. Which of the four Coffman conditions is broken by enforcing a fixed ordering of resource acquisition?',
      options: [
        'Mutual exclusion',
        'Hold and wait',
        'No preemption',
        'Circular wait',
      ],
      answer: 3,
    },
    {
      question: '5. What is a race condition?',
      options: [
        'When two CPUs compete to run the same process',
        'When a process runs faster than expected',
        'When two or more processes access shared data simultaneously and the result depends on execution order',
        'When the OS scheduler skips a process',
      ],
      answer: 2,
    },
    {
      question: '6. What happens at the OS level when a page fault occurs?',
      options: [
        'The OS terminates the process that caused the fault',
        'The OS pauses the process, loads the required page from disk into RAM, and resumes it',
        'The OS sends an error message to the user',
        'The OS copies all RAM to disk and restarts',
      ],
      answer: 1,
    },
    {
      question: '7. What is the trade-off of a microkernel compared to a monolithic kernel?',
      options: [
        'Microkernels are less stable but faster',
        'Monolithic kernels are more secure but slower due to message-passing',
        'Microkernels are more stable and secure but slower due to message-passing overhead between user-space services',
        'There is no performance difference between them',
      ],
      answer: 2,
    },
    {
      question: '8. What does the principle of least privilege mean in OS context?',
      options: [
        'The OS should limit the number of users allowed to log in',
        'Users and processes should only have the minimum permissions needed to perform their tasks',
        'Every process should run with full administrator rights for reliability',
        'File permissions should be set to read-only for all users',
      ],
      answer: 1,
    },
    {
      question: '9. How does a journaling file system protect against data corruption after a crash?',
      options: [
        'It creates a backup copy of all files on a separate drive',
        'It prevents any write operations until the system is verified clean',
        'It maintains a log of changes before committing them, so incomplete writes can be rolled back or replayed',
        'It uses RAID to mirror data across multiple disks',
      ],
      answer: 2,
    },
    {
      question: '10. What is the "convoy effect" in CPU scheduling?',
      options: [
        'When multiple processes finish at exactly the same time',
        'When the scheduler runs out of processes to assign',
        'When a large, slow process holds the CPU in FIFO scheduling, causing all shorter processes to wait',
        'When CPU context switches happen too frequently',
      ],
      answer: 2,
    },
    {
      question: '11. What type of IPC mechanism connects the standard output of one process to the standard input of another?',
      options: [
        'Shared memory',
        'Semaphore',
        'Pipe',
        'Message queue',
      ],
      answer: 2,
    },
    {
      question: "12. Why can't virtual memory and paging be used on an embedded system with no disk storage?",
      options: [
        'Because virtual memory relies on disk storage for page swapping, which would not exist on that system', 
        'Because embedded systems have too much RAM', 
        'Because paging requires a multi-core CPU', 
        'Because embedded systems already use segmentation'
      ],
      answer: 0,
    },
    {
      question: '13. What is the purpose of a semaphore in process synchronization?',
      options: [
        'To control access to a shared resource by multiple processes, preventing race conditions',
        'To increase the speed of a process',
        'To terminate a deadlocked process',
        'To allocate additional RAM to a high-priority process',
      ],
      answer: 0,
    },
    {
      question: '14. What distinguishes Shortest Job First (SJF) from Round Robin scheduling?',
      options: [
        'SJF gives every process an equal time slice; Round Robin executes the shortest job first',
        'SJF minimizes average wait time by running the shortest job first but requires knowing job lengths; Round Robin gives each process equal time slices regardless of length',
        'Round Robin is only used in single-core systems',
        'SJF uses a queue; Round Robin does not',
      ],
      answer: 1,
    },
    {
      question: '15. When a process is in the "waiting" state, what can transition it to the "ready" state?',
      options: [
        'The user pressing a key on the keyboard',
        'The OS terminating another process',
        'An I/O operation it was waiting for completing, or a signal/timer it was waiting on expiring',
        'The CPU becoming idle',
      ],
      answer: 1,
    },
    {
      question: '16. What is the hold-and-wait condition in deadlock?',
      options: [
        'A process holds one resource and waits to acquire another that is held by a different process',
        'A process holds the CPU and waits for user input',
        'Two processes both hold the same resource',
        'A process waits for memory to be freed before it can start',
      ],
      answer: 0,
    },
    {
      question: '17. What is the key security advantage of system calls over direct hardware access by programs?',
      options: [
        'Only administrators can make system calls',
        'System calls are faster than direct hardware access',
        'The OS validates system calls before execution, preventing programs from performing unauthorized or dangerous hardware operations',
        'System calls encrypt all data before writing to disk',
      ],
      answer: 2,
    },
    {
      question: '18. Which file system is associated with Linux and is known for journaling and efficient handling of many small files?',
      options: [
        'NTFS',
        'FAT32',
        'ext4',
        'HFS+',
      ],
      answer: 2,
    },
    {
      question: '19. An I/O-bound process spends most of its time waiting. How does a scheduler typically handle it?',
      options: [
        'It deprioritizes I/O-bound processes to avoid overhead',
        'It assigns I/O-bound processes to a separate CPU core',
        'It terminates I/O-bound processes if they wait too long',
        'It prioritizes I/O-bound processes quickly when they become ready to minimize idle time',
      ],
      answer: 3,
    },
    {
      question: '20. What is external fragmentation in memory management?',
      options: [
        'Memory used by background OS processes',
        'Free memory scattered in small pieces that cannot satisfy a large contiguous request',
        'Wasted space inside an allocated memory block',
        'Swap space on the hard drive',
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
