import { Component } from '@angular/core';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-eprogit1-component',
  imports: [RouterLink],
  templateUrl: './eprogit1-component.html',
  styleUrl: './eprogit1-component.css',
})
export class EProgit1Component {

  constructor(private router: Router){}

  startQuiz() {
    const progress = JSON.parse(localStorage.getItem('quizProgress') || '{}');

    progress.progitEasyDone = true;

    localStorage.setItem('quizProgress', JSON.stringify(progress));

    this.router.navigate(['/quizzes']);
  }

}