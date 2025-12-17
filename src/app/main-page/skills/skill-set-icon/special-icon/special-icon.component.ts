import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateContentService } from '../../../../shared/translate-content.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-special-icon',
  standalone: true,
  imports: [CommonModule, FormsModule ],
  templateUrl: './special-icon.component.html',
  styleUrl: './special-icon.component.scss'
})
export class SpecialIconComponent {
  @ViewChild('infoBox') infoBoxDivRef!:ElementRef<HTMLElement>;
  
  translateContent = inject(TranslateContentService);
  infoBoxDiv!:HTMLElement;
  
  onHover(){
    this.customizationInfoBox();
  }

  onLeave(){
    this.removeMargin();
  }

  customizationInfoBox(){
    this.infoBoxDiv = this.infoBoxDivRef.nativeElement;
    let left = this.infoBoxDiv.getBoundingClientRect().left;
    let right = this.infoBoxDiv.getBoundingClientRect().right;
    
    if(right +10 >= window.innerWidth){
      this.infoBoxDiv.style.marginRight = '160px';
    } 
    else if(left -10 <= 0){
      this.infoBoxDiv.style.marginLeft = '160px';
    }
  }

  removeMargin(){
    this.infoBoxDiv?.style.removeProperty('margin-left');
    this.infoBoxDiv?.style.removeProperty('margin-right');
  }
}
