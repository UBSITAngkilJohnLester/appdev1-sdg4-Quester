import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-hsitnet1-component',
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './hsitnet1-component.html',
  styleUrl: './hsitnet1-component.css',
})

export class HSitnet1Component {
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
      question: '1. How does ARP bridge the gap between Layer 3 and Layer 2?',
      options: [
        'ARP converts domain names to IP addresses for routing',
        'ARP resolves IP addresses to MAC addresses so frames can be properly addressed on a LAN',
        'ARP encrypts packets before they reach the Data Link layer',
        'ARP assigns IP addresses from a DHCP pool',
      ],
      answer: 1,
    },
    {
      question: '2. How would you interpret the network address 192.168.10.0/24 in CIDR notation?',
      options: [
        '24 hosts are available on this network', 
        '24 bits are the host portion, leaving 8 bits for the network', 
        '24 bits are the network portion, 8 bits remain for hosts,', 
        'The network has 24 subnets'
      ],
      answer: 2,
    },
    {
      question: '3. What is the difference between a Layer 2 and Layer 3 switch?',
      options: [
        'A Layer 3 switch uses MAC addresses; a Layer 2 switch uses IP addresses',
        'A Layer 2 switch forwards frames based on MAC addresses within a LAN; a Layer 3 switch can also route traffic between subnets using IP addresses',
        'Layer 3 switches are slower but more secure',
        'They are functionally identical',
      ],
      answer: 1,
    },
    {
      question: '4. What is the purpose of each step in the TCP three-way handshake?',
      options: [
        'SYN initiates, SYN-ACK confirms routing path, ACK assigns port numbers',
        "SYN initiates the connection, SYN-ACK acknowledges and responds with server's SYN, ACK confirms both sides are ready — ensuring reliable communication",
        'SYN assigns IPs, SYN-ACK encrypts the channel, ACK begins data transfer',
        'All three steps happen simultaneously',
      ],
      answer: 1,
    },
    {
      question: '5. What is the main difference between BGP and OSPF?',
      options: [
        "BGP routes traffic between different autonomous systems on the internet; OSPF is used within a single organization's network",
        'BGP is used within a single organization; OSPF routes traffic between ISPs on the internet',
        'OSPF is faster globally; BGP is only for local networks',
        'They are the same protocol with different naming conventions in different regions',
      ],
      answer: 0,
    },
    {
      question: '6. How is inter-VLAN routing achieved?',
      options: [
        'By connecting each VLAN to a separate internet connection',
        'VLANs can communicate natively without any additional hardware',
        'Through a router-on-a-stick configuration or a Layer 3 switch',
        'By disabling the VLAN on the switch and using hubs instead',
      ],
      answer: 2,
    },
    {
      question: '7. What is a routing loop and which two techniques prevent it?',
      options: [
        'A loop in switch cabling; prevented by VLANs and NAT',
        'When a router table overflows; prevented by increasing RAM and using STP',
        'When packets circulate between routers indefinitely; prevented by TTL decrementing and split horizon',
        'A misconfigured DHCP pool; prevented by static IP assignment and DNS',
      ],
      answer: 2,
    },
    {
      question: '8. What is the Spanning Tree Protocol (STP) used for?',
      options: [
        'To prioritize VoIP traffic over regular data',
        'To prevent broadcast storms by detecting and blocking redundant links in a switched network',
        'To assign IP addresses across multiple VLANs',
        'To encrypt traffic between switches',
      ],
      answer: 1,
    },
    {
      question: '9. What is encapsulation in the OSI model?',
      options: [
        'Encrypting data before sending it over a public network',
        'Adding headers (and trailers) at each OSI layer as data travels from sender to receiver, with each layer wrapping the data for its own protocol',
        'Compressing data to reduce bandwidth usage',
        'Splitting a large file into smaller packets',
      ],
      answer: 1,
    },
    {
      question: '10. What is QoS and why is it critical for VoIP?',
      options: [
        'Quality of Service; it encrypts voice traffic to prevent eavesdropping',
        'Queue of Sessions; it manages the number of active connections on a router',
        'Quality of Service; it increases bandwidth by compressing audio packets',
        'Quality of Service; it prioritizes time-sensitive traffic like VoIP over bulk transfers, preventing delays and packet loss that would degrade call quality',
      ],
      answer: 3,
    },
    {
      question: '11. How does NAT break the end-to-end principle of the internet?',
      options: [
        'NAT prevents encryption from working correctly',
        'NAT slows down connections by adding processing overhead',
        'NAT blocks all incoming traffic by default',
        'NAT modifies IP addresses in packet headers, hiding private IPs and causing issues for protocols that embed IP addresses in their payload',
      ],
      answer: 3,
    },
    {
      question: "12. What happens during de-encapsulation at the receiver's end?",
      options: [
        'Each layer adds a new header to the data', 
        'Each layer strips its corresponding header in reverse order until the original application data is recovered', 
        'All headers are stripped simultaneously by the Transport layer', 
        'De-encapsulation only occurs at Layer 3'
      ],
      answer: 1,
    },
    {
      question: '13. A host sends a packet to a destination outside its subnet. What does it do first?',
      options: [
        'It broadcasts the packet to all devices on the LAN',
        "It checks that the destination is outside its subnet using the subnet mask, then sends the packet to its default gateway",
        "It sends the packet directly to the destination using the destination's MAC address",
        "It contacts the DNS server to find the destination's MAC address",
      ],
      answer: 2,
    },
    {
      question: '14. What is the difference between OSPF and RIP in terms of scalability?',
      options: [
        'RIP scales to large networks; OSPF is only for small offices',
        'OSPF uses hop count with a max of 15; RIP uses link-state and scales to enterprise networks',
        'RIP has a maximum hop count of 15 and slow convergence, making it unsuitable for large networks; OSPF uses link-state algorithms and scales well to large enterprise environments',
        'They have identical scalability; the difference is only in the metrics used',
      ],
      answer: 2,
    },
    {
      question: '15. How does traceroute use ICMP to discover the path to a destination?',
      options: [
        'It sends SYN packets and records which routers respond',
        'It uses ARP requests to identify each router in the path',
        'It sends packets with incrementing TTL values; each router that reduces TTL to 0 replies with an ICMP Time Exceeded message, revealing the path hop by hop',
        'It reads the routing table of each router directly',
      ],
      answer: 2,
    },
    {
      question: '16. What is the advantage of a stateful firewall over a stateless one?',
      options: [
        'Stateful firewalls are faster because they process fewer rules',
        'Stateful firewalls track the state of active connections and only allow packets that are part of a legitimate session, blocking packets that match rules but are not part of a valid connection',
        'Stateless firewalls are more secure because they inspect packet contents',
        'Stateful firewalls eliminate the need for port-based filtering',
      ],
      answer: 1,
    },
    {
      question: '17. If you subnet 192.168.1.0/24 into /26 subnets, how many subnets are created and how many usable hosts does each have?',
      options: [
        '2 subnets, 126 usable hosts each',
        '8 subnets, 30 usable hosts each',
        '4 subnets, 64 usable hosts each',
        '4 subnets, 62 usable hosts each',
      ],
      answer: 3,
    },
    {
      question: '18. What is full-duplex communication and why do modern switches support it?',
      options: [
        'Data flows in only one direction at a time; modern switches use it to simplify network design',
        'Full-duplex requires two separate physical cables; modern switches have dual ports for this',
        'Data flows in both directions simultaneously; modern switches support it to eliminate collisions and effectively double throughput compared to half-duplex',
        'It is a wireless-only communication mode',
      ],
      answer: 1,
    },
    {
      question: '19. What happens during the TLS handshake when you access an HTTPS website?',
      options: [
        "The browser downloads the server's IP address from DNS and opens an encrypted socket",
        "The server verifies the client's password before sending any data",
        'The client encrypts the URL with a public key before sending the HTTP request',
        'The server sends its TLS certificate, the client verifies it, they negotiate encryption keys, and a symmetric encrypted channel is established for all subsequent communication',
      ],
      answer: 3,
    },
    {
      question: '20. What is a broadcast domain and how do VLANs reduce them?',
      options: [
        'A broadcast domain is the area where all devices share one IP subnet; VLANs reduce them by assigning unique IPs to each VLAN',
        'A broadcast domain is where broadcast frames reach all devices; VLANs logically segment a switch into multiple broadcast domains so broadcasts stay within a VLAN',
        'Broadcast domains are only a concern in routed networks, not switched ones',
        'VLANs merge broadcast domains to simplify network management',
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
