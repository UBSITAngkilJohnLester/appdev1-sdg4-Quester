import { Component, inject } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { WikipediaService } from '../../app/Services/wikipedia';

@Component({
  selector: 'app-opsyst1-info',
  imports: [AsyncPipe, NgFor, NgIf, RouterLink],
  templateUrl: './opsyst1-info.html',
  styleUrl: './opsyst1-info.css',
})
export class Opsyst1Info {
  private wikipedia = inject(WikipediaService);

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