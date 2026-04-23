import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-eopsyst1-component',
  imports: [RouterLink],
  templateUrl: './eopsyst1-component.html',
  styleUrl: './eopsyst1-component.css',
})
export class EOpsyst1Component {
  constructor(private router: Router){}

  startQuiz() {
    const progress = JSON.parse(localStorage.getItem('quizProgress') || '{}');

    progress.opsystEasyDone = true;

    localStorage.setItem('quizProgress', JSON.stringify(progress));

    this.router.navigate(['/quizzes']);
  }
}
