import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-msitnet1-component',
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './msitnet1-component.html',
  styleUrl: './msitnet1-component.css',
})
export class MSitnet1Component {
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
      progress.sitnetMediumDone = true;
    }

    localStorage.setItem('quizProgress', JSON.stringify(progress));

    this.mode = 'result';
  }

  //all questions and options for the quiz
  questions = [
    {
      question: '1. What is the correct order of the OSI model from Layer 1 to Layer 7?',
      options: [
        'Physical, Data Link, Network, Transport, Session, Presentation, Application',
        'Data Link, Physical, Network, Transport, Application, Session, Presentation',
        'Application, Presentation, Session, Transport, Network, Data Link, Physical',
        'Physical, Network, Data Link, Transport, Session, Application, Presentation',
      ],
      answer: 0,
    },
    {
      question: '2. What is the main difference between IPv4 and IPv6?',
      options: [
        'IPv4 uses 128-bit addresses; IPv6 uses 32-bit addresses', 
        'IPv4 uses 32-bit addresses (~4.3B addresses); IPv6 uses 128-bit addresses, allowing far more addresses', 
        'IPv6 is slower than IPv4', 
        'IPv6 is only used in Asia'
      ],
      answer: 1,
    },
    {
      question: '3. What is the key difference between TCP and UDP?',
      options: [
        'TCP is faster but unreliable; UDP is slower but guarantees delivery',
        'TCP guarantees delivery and order; UDP is connectionless and does not guarantee delivery',
        'UDP is only used for file downloads; TCP is for streaming',
        'They are the same protocol with different names',
      ],
      answer: 1,
    },
    {
      question: '4. How does a switch differ from a hub?',
      options: [
        'A hub forwards data only to the intended recipient; a switch broadcasts to all devices',
        'Switches operate at Layer 3; hubs operate at Layer 2',
        'A switch learns MAC addresses and forwards data only to the intended device; a hub broadcasts to all connected devices',
        'Hubs are faster than switches',
      ],
      answer: 2,
    },
    {
      question: '5.' ,
      options: [
        'A unique hardware identifier used at Layer 2',
        'A unique hardware identifier used at Layer 3',
        'A unique hardware identifier used at Layer 5',
        'A unique hardware identifier used at Layer 4',
      ],
      answer: 0,
    },
    {
      question: '6. What is NAT and why is it used?',
      options: [
        'Network Allocation Technique; assigns IPs to new devices',
        'Node Authentication Token; used to verify device identity on a network',
        'Network Access Table; used to store routing information',
        'Translates private IPs to a public IP',
      ],
      answer: 3,
    },
    {
      question: '7. What does the Transport Layer (Layer 4) of the OSI model provide?',
      options: [
        'Routing packets between networks',
        'Translating domain names to IP addresses',
        'End-to-end communication, error checking, and flow control using TCP or UDP',
        'Physical transmission of raw bits',
      ],
      answer: 2,
    },
    {
      question: '8. What is DHCP and what problem does it solve?',
      options: [
        'Direct Hardware Communication Protocol; it manages hardware drivers',
        'Data Handling and Caching Protocol; it speeds up file transfers',
        'Dynamic Host Configuration Protocol; it automatically assigns IP addresses, ',
        'Dynamic Host Control Protocol; it encrypts network traffic',
      ],
      answer: 2,
    },
    {
      question: '9. What is a subnet used for?',
      options: [
        'Encrypting data packets during transmission',
        'Storing routing tables on a router',
        'Logically dividing an IP network ',
        'Connecting two different WANs together',
      ],
      answer: 2,
    },
    {
      question: '10. What does a router use to decide where to forward a packet?',
      options: [
        'The MAC address table',
        'The routing table',
        'The ARP cache',
        'The DNS record',
      ],
      answer: 1,
    },
    {
      question: '11. What is a default gateway?',
      options: [
        'The DNS server address',
        'The device that assigns IP addresses via DHCP',
        'The first switch in a LAN',
        'The router a device uses to send traffic to destinations outside its local network',
      ],
      answer: 3,
    },
    {
      question: '12. What is the function of DNS?',
      options: [
        'The first switch in a LAN', 
        'The device that assigns IP addresses via DHCP', 
        'The router a device uses to send traffic to destinations outside its local network', 
        'The DNS server address'
      ],
      answer: 2,
    },
    {
      question: '13. What is a collision domain, and how does a switch reduce collisions compared to a hub?',
      options: [
        'A collision domain is a group of users; switches assign each user a separate login',
        'Switches eliminate collision domains by broadcasting to all ports simultaneously',
        'A collision domain is a network segment where simultaneous transmissions cause collisions; switches create a separate collision domain per port, unlike hubs which share one',
        'Collision domains only apply to wireless networks',
      ],
      answer: 2,
    },
    {
      question: '14. What is the significance of port numbers in network communication?',
      options: [
        'Port numbers are only used in UDP, not TCP',
        'Port numbers identify the specific application or service data is destined for on a device',
        'Port numbers are the same as IP addresses',
        'Port numbers determine the physical connection speed',
      ],
      answer: 1,
    },
    {
      question: '15. What is network topology?',
      options: [
        "The physical location of a network's servers",
        'The protocol used to assign IP addresses',
        'The speed of data transmission on a network',
        'The physical or logical arrangement of devices in a network',
      ],
      answer: 3,
    },
    {
      question: '16. What does the Physical Layer (Layer 1) of the OSI model handle?',
      options: [
        'Encrypting data before transmission',
        'Managing TCP connections',
        'Actual transmission of raw bits over a physical medium like cables or radio waves',
        'Assigning IP addresses to devices',
      ],
      answer: 2,
    },
    {
      question: '17. At which OSI layer do protocols like HTTP and SMTP operate?',
      options: [
        'Layer 3 - Network',
        'Layer 4 - Transport',
        'Layer 6 - Presentation',
        'Layer 7 - Application',
      ],
      answer: 3,
    },
    {
      question: '18. Why is the OSI model still useful even though real networks use TCP/IP?',
      options: [
        'It provides a universal conceptual framework for understanding, troubleshooting, and designing network systems',
        'Because the OSI model is faster than TCP/IP',
        'Because TCP/IP will be replaced by OSI soon',
        'It is not useful; it is only taught for historical reasons',
      ],
      answer: 0,
    },
    {
      question: '19. What type of network covers a small geographic area like a single building?',
      options: [
        'WAN',
        'MAN',
        'LAN',
        'PAN',
      ],
      answer: 2,
    },
    {
      question: '20. What is the role of the Presentation Layer (Layer 6) in the OSI model?',
      options: [
        'Data formatting, translation, and encryption/decryption',
        'Managing network sessions between applications',
        'Routing packets between networks',
        'Physical transmission of electrical signals',
      ],
      answer: 0,
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