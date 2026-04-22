import { Component, inject } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { WikipediaService } from '../../app/Services/wikipedia';

@Component({
  selector: 'app-sitnet1-info',
  imports: [AsyncPipe, NgFor, NgIf, RouterLink],
  templateUrl: './sitnet1-info.html',
  styleUrl: './sitnet1-info.css',
})
export class Sitnet1Info {
  private wikipedia = inject(WikipediaService);

  topics = [
    { query: 'Computer_network', label: 'Computer Networks' },
    { query: 'IP_address', label: 'IP Addressing' },
    { query: 'Subnetwork', label: 'Subnetting' },
    { query: 'Router_(computing)', label: 'Routing' },
    { query: 'Network_switch', label: 'Switching' },
  ];

  articles$ = this.topics.map(topic => ({
    label: topic.label,
    data$: this.wikipedia.getArticles(topic.query)
  }));
}