import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateContentService } from '../../../shared/translate-content.service';

@Component({
  selector: 'app-overlay',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './overlay.component.html',
  styleUrl: './overlay.component.scss'
})
export class OverlayComponent {
  @Input() isOpen!: boolean;
  @Output() isOpenChange = new EventEmitter<boolean>();
  
  // @Input() selectedProject!: "projectOne" | "projectTwo" | "projectThree";
  @Input() selectedProject!: "projectOne" | "projectTwo";
  
  translateContent = inject(TranslateContentService);

  closed() {
    this.isOpen = false;
    this.isOpenChange.emit(this.isOpen);
    document.body.style.removeProperty('overflow');
  }

  stopClickBubbling(event: MouseEvent) {
    event.stopPropagation();
  }

  nextProject(){
    const nextValue = {
      projectOne: 'projectTwo',
      projectTwo: 'projectOne',
    } as const;

    this.selectedProject = nextValue[this.selectedProject] ?? this.selectedProject;
  }
}
