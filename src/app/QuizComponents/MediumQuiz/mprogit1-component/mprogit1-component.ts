import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-mprogit1-component',
  imports: [RouterLink],
  templateUrl: './mprogit1-component.html',
  styleUrl: './mprogit1-component.css',
})
export class MProgit1Component {

  constructor(private router: Router){}

  startQuiz() {
    
    const progress = JSON.parse(localStorage.getItem('quizProgress') || '{}');

    progress.progitMediumDone = true;

    localStorage.setItem('quizProgress', JSON.stringify(progress));

    this.router.navigate(['/quizzes']);
  }
}