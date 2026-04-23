import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-mopsyst1-component',
  imports: [RouterLink],
  templateUrl: './mopsyst1-component.html',
  styleUrl: './mopsyst1-component.css',
})
export class MOpsyst1Component {
  constructor(private router: Router){}

  startQuiz() {
    
    const progress = JSON.parse(localStorage.getItem('quizProgress') || '{}');

    progress.opsystMediumDone = true;

    localStorage.setItem('quizProgress', JSON.stringify(progress));

    this.router.navigate(['/quizzes']);
  }
}
