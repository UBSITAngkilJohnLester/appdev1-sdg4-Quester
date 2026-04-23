import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-quiz-home-component',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './quiz-home-component.html',
  styleUrl: './quiz-home-component.css',
})
export class QuizHomeComponent implements OnInit{
  
  progress: any = {};
  
  ngOnInit(): void {
    this.progress = JSON.parse(localStorage.getItem('quizProgress') || '{}');
  }
}
