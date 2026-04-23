import { Component, inject } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { WikipediaService } from '../../app/Services/wikipedia';
import { SubjectHeaderComponent } from '../subject-header/subject-header';

@Component({
  selector: 'app-opsyst1-info',
  imports: [AsyncPipe, NgFor, NgIf, RouterLink, SubjectHeaderComponent],
  templateUrl: './opsyst1-info.html',
  styleUrl: './opsyst1-info.css',
})
export class Opsyst1Info {
  private wikipedia = inject(WikipediaService);
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/learn']);
  }

  topics = [
    { query: 'Operating_system', label: 'Operating Systems' },
    { query: 'Process_management', label: 'Process Management' },
    { query: 'Memory_management', label: 'Memory Management' },
    { query: 'File_system', label: 'File Systems' },
    { query: 'Command-line_interface', label: 'Command Line Interface' },
  ];

  articles$ = this.topics.map(topic => ({
    label: topic.label,
    data$: this.wikipedia.getArticles(topic.query)
  }));
}