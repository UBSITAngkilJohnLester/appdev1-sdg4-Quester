import { Component, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  visitorCount = signal(0);
  message = computed(() =>
    this.visitorCount() === 0
      ? 'Be the first to explore Quester!'
      : `${this.visitorCount()} students have explored Quester today!`
  );

  constructor() {
    const count = parseInt(localStorage.getItem('visitorCount') || '0') + 1;
    localStorage.setItem('visitorCount', count.toString());
    this.visitorCount.set(count);
  }
}