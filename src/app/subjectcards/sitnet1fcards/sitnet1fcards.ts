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
      subtitle: 'Introduction to Programming',
      content: 'Programming = step-by-step instructions for computers.',
    },
    {
      title: 'SITNET1',
      subtitle: 'Variables & Data Types',
      content: 'A variable stores data; type defines what kind of data.',
    },
    {
      title: 'SITNET1',
      subtitle: 'Operators',
      content: 'Tools for math, comparison, and logic.',
    },
    {
      title: 'SITNET1',
      subtitle: 'Control Structures',
      content: 'Let programs make decisions based on conditions.',
    },
    {
      title: 'SITNET1',
      subtitle: 'Loops',
      content: 'Repeat actions automatically instead of rewriting code.',
    },
    {
      title: 'SITNET1',
      subtitle: 'Functions',
      content: 'Reusable blocks of code you can call anytime.',
    },
    {
      title: 'SITNET1',
      subtitle: 'Arrays',
      content: 'A list of values stored in one variable.',
    },
    {
      title: 'SITNET1',
      subtitle: 'Input & Output',
      content: 'Input gets data, output shows results.',
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
