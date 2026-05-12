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
      subtitle: 'Operating Systems',
      content: 'The operating system is the “boss” that manages everything inside the computer and makes it possible for programs to work.'
    },
    {
      title: 'OPSYST1',
      subtitle: 'Process Management',
      content: 'Process management is how the operating system organizes and controls running programs so they work smoothly together.'
    },
    {
      title: 'OPSYST1',
      subtitle: 'Memory Management',
      content: 'Memory management makes sure programs get the memory they need, and that unused memory is recycled for others.'
    },
    {
      title: 'OPSYST1',
      subtitle: 'File Systems',
      content: ' A file system is the “filing cabinet” of a computer, and distributed file systems are like shared cabinets that multiple computers can use together.'
    },
    {
      title: 'OPSYST1',
      subtitle: 'Command Line Interface',
      content: 'The CLI is a text-based tool that lets you talk directly to the computer by typing commands, making computing more interactive and efficient.'
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