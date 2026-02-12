import { AfterViewInit, Component, ElementRef, HostListener, inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateContentService } from '../../shared/translate-content.service';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})

export class ReferencesComponent implements AfterViewInit{
  @ViewChild('track') track!: ElementRef<HTMLDivElement>
  @ViewChild('box') box!: ElementRef<HTMLDivElement>

  translateContent = inject(TranslateContentService);

  items: ('colleagueOne'| 'colleagueTwo' | 'colleagueThree')[] = ['colleagueThree', 'colleagueOne', 'colleagueTwo', ];
  loopItems: ('colleagueOne'| 'colleagueTwo' | 'colleagueThree')[] = [...this.items, ...this.items, ...this.items];

  step = 0;
  index = 3;
  currentReference: 1 | 2 | 3 = 1;

  isTransitioning = false;

  boxClick(i:number){
    if(i == this.index) this.prev();
    if(i == this.index +2) this.next();
  }
  
  next() {
    if (this.isTransitioning) return;
    this.onResize();
    this.isTransitioning = true;
    this.index++;
    this.track.nativeElement.style.transform = `translateX(${(this.index -3) * this.step *-1}px)`;

    this.currentReference++;
    if(this.currentReference >3) this.currentReference = 1
  }
  
  prev() {
    if (this.isTransitioning) return;
    this.onResize();
    this.isTransitioning = true;
    this.index--;
    this.track.nativeElement.style.transform = `translateX(${(this.index -3) * this.step *-1}px)`;

    this.currentReference--;
    if(this.currentReference <1) this.currentReference = 3
  }
  
  onTransitionEnd() {
    this.isTransitioning = false;
    this.endReached();
    this.beginningReached();
  }

  endReached(){
    if (this.index >= this.items.length + 3) {
      this.track.nativeElement.style.transition = 'none';
      this.index = 3;
      this.track.nativeElement.style.transform = `translateX(0)`;
      setTimeout(() => this.track.nativeElement.style.removeProperty('transition'));
    }
  }

  beginningReached(){
    if (this.index <= 0) {
      this.track.nativeElement.style.transition = 'none';
      this.index = 3;
      this.track.nativeElement.style.transform = `translateX(0)`;
      setTimeout(() => this.track.nativeElement.style.removeProperty('transition'));
    }
  }

  ngAfterViewInit(){
    this.track.nativeElement.style.transform = `translateX(0)`;
    this.onResize();
  }
  
  @HostListener('window:resize')
  onResize() {
    if (!this.track.nativeElement || !this.box.nativeElement) return;
    const widthBox = this.box.nativeElement.getBoundingClientRect().width;
    const betweenBoxGap = parseFloat(window.getComputedStyle(this.track.nativeElement).gap);
    
    this.step = widthBox + betweenBoxGap;
    this.track.nativeElement.style.transform = `translateX(${(this.index -3) * this.step *-1}px)`;
  }
}