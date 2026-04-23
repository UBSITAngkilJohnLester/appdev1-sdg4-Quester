import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-esitnet1-component',
  imports: [RouterLink],
  templateUrl: './esitnet1-component.html',
  styleUrl: './esitnet1-component.css',
})
export class ESitnet1Component {
  constructor(private router: Router){}

  startQuiz() {
    const progress = JSON.parse(localStorage.getItem('quizProgress') || '{}');

    progress.sitnetEasyDone = true;

    localStorage.setItem('quizProgress', JSON.stringify(progress));

    this.router.navigate(['/quizzes']);
  }
}