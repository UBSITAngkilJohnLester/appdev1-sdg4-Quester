import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-msitnet1-component',
  imports: [RouterLink],
  templateUrl: './msitnet1-component.html',
  styleUrl: './msitnet1-component.css',
})
export class MSitnet1Component {
  constructor(private router: Router){}

  startQuiz() {
    
    const progress = JSON.parse(localStorage.getItem('quizProgress') || '{}');

    progress.sitnetMediumDone = true;

    localStorage.setItem('quizProgress', JSON.stringify(progress));

    this.router.navigate(['/quizzes']);
  }
}