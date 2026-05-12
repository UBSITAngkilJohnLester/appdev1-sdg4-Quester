import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sitnet1fcards',
  imports: [RouterLink, CommonModule],
  templateUrl: './sitnet1fcards.html',
  styleUrl: './sitnet1fcards.css',
})
export class SITNET1fcards {
  currentIndex = 0;

  cards = [
    {
      title: 'SITNET1',
      subtitle: 'Computer Networks',
      content: 'A network is just computers and devices linked together so they can exchange data.',
    },
    {
      title: 'SITNET1',
      subtitle: 'Internet Protocol',
      content: 'IP is the system that lets computers send data to each other across different networks, making the Internet possible.',
    },
    {
      title: 'SITNET1',
      subtitle: 'OSI Model',
      content: 'The OSI model is a guide that standardizes how computers connect and share data, making sure different systems can communicate smoothly.',
    },
    {
      title: 'SITNET1',
      subtitle: 'Routers',
      content: 'A router is a device that guides data between networks, making the Internet work.',
    },
    {
      title: 'SITNET1',
      subtitle: 'Network Switches',
      content: 'A switch is like a smart hub that makes sure data gets to the exact device it’s supposed to reach.',
    },
  ];

  next() {
    if (this.currentIndex < this.cards.length - 1) {
      this.currentIndex++;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}
