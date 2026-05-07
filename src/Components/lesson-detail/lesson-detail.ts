import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { Lesson } from '../../app/Services/lesson';
@Component({
  selector: 'app-lesson-detail',
  imports: [RouterLink, NgFor, NgIf],
  templateUrl: './lesson-detail.html',
  styleUrl: './lesson-detail.css',
})
export class LessonDetail {
  private route = inject(ActivatedRoute);
  private lessonService = inject(Lesson);

  lessonId = this.route.snapshot.paramMap.get('lessonId');
  subject = this.route.snapshot.url[1]?.path;
  lesson = this.lessonService.getLesson(this.subject || '', this.lessonId || '');
}