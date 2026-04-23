import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-subject-header',
  imports: [],
  templateUrl: './subject-header.html',
  styleUrl: './subject-header.css'
})
export class SubjectHeaderComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Output() backClicked = new EventEmitter<void>();

  onBack() {
    this.backClicked.emit();
  }
}