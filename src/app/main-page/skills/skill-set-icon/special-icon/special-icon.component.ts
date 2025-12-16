import { Component, inject } from '@angular/core';
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
  // @HostListener('window:resize') onResize() { 
  //   this.customizationInfoBox();
  // }

  translateContent = inject(TranslateContentService);
  
  // @ViewChild('infoBox') infoBoxDivRef!:ElementRef<HTMLElement>
  // infoBoxDiv!:HTMLElement;

  // ngAfterViewInit() {
  //   this.infoBoxDiv = this.infoBoxDivRef.nativeElement;
  //   this.customizationInfoBox();
  // }

  // customizationInfoBox(){
  //   let left = this.infoBoxDiv.getBoundingClientRect().left;
  //   let right = this.infoBoxDiv.getBoundingClientRect().right;

  //   this.infoBoxDiv?.style.removeProperty('margin-left');
  //   this.infoBoxDiv?.style.removeProperty('margin-right');

  //   // console.log('right');
  //   // console.log(right);
  //   // console.log('left');
  //   // console.log(left);
  //   // console.log('window.innerWidth');
  //   // console.log(window.innerWidth);
    
  //   if(right >= window.innerWidth){
  //     this.infoBoxDiv.style.marginRight = '160px';
  //   } 
  //   else if(left <= 0){
  //     this.infoBoxDiv.style.marginLeft = '160px';
  //   }
  // }
}
