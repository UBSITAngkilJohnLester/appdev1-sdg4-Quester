import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { SubjectHeaderComponent } from '../subject-header/subject-header';

@Component({
  selector: 'app-progit1-info',
  imports: [RouterLink, SubjectHeaderComponent],
  templateUrl: './progit1-info.html',
  styleUrl: './progit1-info.css',
})
export class Progit1Info {
  constructor(private router: Router) {}

  lessons = [
    { id: 'intro', title: 'Introduction to Programming', description: 'What programming is and why it matters.' },
    { id: 'variables', title: 'Variables & Data Types', description: 'Storing and working with different kinds of data.' },
    { id: 'operators', title: 'Operators', description: 'Arithmetic, comparison, and logical operators.' },
    { id: 'control-structures', title: 'Control Structures', description: 'Making decisions with if/else statements.' },
    { id: 'loops', title: 'Loops', description: 'Repeating actions with for and while loops.' },
    { id: 'functions', title: 'Functions', description: 'Writing reusable blocks of code.' },
    { id: 'arrays', title: 'Arrays', description: 'Storing and managing lists of data.' },
    { id: 'input-output', title: 'Basic Input & Output', description: 'Reading input and displaying output.' },
  ];

  goBack() {
    this.router.navigate(['/learn']);
  }
}