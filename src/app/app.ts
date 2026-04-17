import { Component, signal } from '@angular/core';
import { RouterOutlet, } from '@angular/router';
import { Navbar } from '../Components/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
import { RouterOutlet } from '@angular/router';
import { QuizHomeComponent } from './QuizComponents/quiz-home-component/quiz-home-component';
import { EOpsyst1Component } from './QuizComponents/EasyQuiz/eopsyst1-component/eopsyst1-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, QuizHomeComponent, EOpsyst1Component],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Quester');
}
