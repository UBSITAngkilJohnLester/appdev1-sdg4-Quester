import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-fcards-components',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './fcards-components.html',
  styleUrl: './fcards-components.css',
})
export class FCardsComponents {
  decks = [
    {
      title: 'PROGRAMMING',
      desc: 'Flashcards',
      link: '/progit1fcards',
      buttonText: 'Go to Flashcards',
    },
    {
      title: 'NETWORKING',
      desc: 'Flashcards',
      link: '/sitnet1fcards',
      buttonText: 'Go to Flashcards',
    },
    {
      title: 'OPERATING SYSTEM',
      desc: 'Flashcards',
      link: '/opsyst1fcards',
      buttonText: 'Go to Flashcards',
    },
    {
      title: 'CUSTOM',
      desc: 'Flashcards',
      link: '/customfcards',
      buttonText: 'Edit Cards',
    },
  ];
}
