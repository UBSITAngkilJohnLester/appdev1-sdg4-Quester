import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  members = [
    {
      name: 'Angkil, John Lester',
      role: 'Project Lead',
      description: 'Handled routing, navigation, the Learn section, and overall project structure.',
      facebook: 'https://www.facebook.com/johnlester.p.angkil.7/'
    },
    {
      name: 'Isar, Jada Mayumi',
      role: 'UI Developer',
      description: 'Designed the UI and built the Quizzes section including all difficulty levels.',
      facebook: 'https://www.facebook.com/jada.mayumi'
    },
    {
      name: 'Dugyawe, Carlo Nash',
      role: 'Data Engineer',
      description: 'Built the Flashcards section and managed study content.',
      facebook: 'https://www.facebook.com/carlo.dugyawe'
    }
  ];
}