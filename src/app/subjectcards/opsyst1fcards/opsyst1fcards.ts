import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-opsyst1fcards',
  imports: [RouterLink, CommonModule],
  templateUrl: './opsyst1fcards.html',
  styleUrl: './opsyst1fcards.css',
})
export class OPSYST1fcards {

  currentIndex = 0;

  cards = [
    {
      title: 'OPSYST1',
      subtitle: 'Introduction to Programming',
      content: 'Programming = step-by-step instructions for computers.'
    },
    {
      title: 'OPSYST1',
      subtitle: 'Variables & Data Types',
      content: 'A variable stores data; type defines what kind of data.'
    },
    {
      title: 'OPSYST1',
      subtitle: 'Operators',
      content: 'Tools for math, comparison, and logic.'
    },
    {
      title: 'OPSYST1',
      subtitle: 'Control Structures',
      content: 'Let programs make decisions based on conditions.'
    },
    {
      title: 'OPSYST1',
      subtitle: 'Loops',
      content: 'Repeat actions automatically instead of rewriting code.'
    },
    {
      title: 'OPSYST1',
      subtitle: 'Functions',
      content: 'Reusable blocks of code you can call anytime.'
    },
    {
      title: 'OPSYST1',
      subtitle: 'Arrays',
      content: 'A list of values stored in one variable.'
    },
    {
      title: 'OPSYST1',
      subtitle: 'Input & Output',
      content: 'Input gets data, output shows results.'
    }
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