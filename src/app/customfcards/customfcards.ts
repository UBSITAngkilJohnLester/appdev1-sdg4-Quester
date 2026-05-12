import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-customfcards',
  imports: [RouterLink],
  templateUrl: './customfcards.html',
  styleUrl: './customfcards.css',
})
export class Customfcards {
  
  cards = Array.from({ length: 18 }, (_, i) => ({
    title: `Card ${i + 1}`,
    content: 'Type your content here...',
  }));

  currentIndex = 0;

  next() {
    if (this.currentIndex < this.cards.length - 1) {
      this.currentIndex++;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}
