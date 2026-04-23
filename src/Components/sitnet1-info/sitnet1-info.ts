import { Component, inject } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { WikipediaService } from '../../app/Services/wikipedia';
import { SubjectHeaderComponent } from '../subject-header/subject-header';

@Component({
  selector: 'app-sitnet1-info',
  imports: [AsyncPipe, NgFor, NgIf, RouterLink, SubjectHeaderComponent],
  templateUrl: './sitnet1-info.html',
  styleUrl: './sitnet1-info.css',
})
export class Sitnet1Info {
  private wikipedia = inject(WikipediaService);
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/learn']);
  }

  topics = [
    { query: 'Computer_network', label: 'Computer Networks' },
    { query: 'Internet_protocol', label: 'Internet Protocol' },
    { query: 'OSI_model', label: 'OSI Model' },
    { query: 'Router_(computing)', label: 'Routers' },
    { query: 'Network_switch', label: 'Network Switches' },
  ];

  articles$ = this.topics.map(topic => ({
    label: topic.label,
    data$: this.wikipedia.getArticles(topic.query)
  }));
}