import { Component, inject } from '@angular/core';
import { TranslateContentService } from '../shared/translate-content.service';
import { CommonModule } from '@angular/common';

type ColleaguesValue = 'colleagueOne' | 'colleagueTwo' | 'colleagueThree';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})

export class ReferencesComponent {
  translateContent = inject(TranslateContentService);
  currentReference: 1 | 2 | 3 = 1;
  
  boxLeft:ColleaguesValue = 'colleagueOne';
  boxMiddle:ColleaguesValue = 'colleagueTwo';
  boxRight:ColleaguesValue = 'colleagueThree';

  previousReferences(){
    this.previousPointHighlight();
    this.previousSortingBoxes();
  }

  previousPointHighlight(){
    this.currentReference--;
    if(this.currentReference <1) this.currentReference = 3
  }

  previousSortingBoxes(){
    const previous: Record<ColleaguesValue, [ColleaguesValue, ColleaguesValue, ColleaguesValue]> = {
      'colleagueOne': ['colleagueThree', 'colleagueOne', 'colleagueTwo'],
      'colleagueTwo': ['colleagueOne', 'colleagueTwo', 'colleagueThree'],
      'colleagueThree': ['colleagueTwo', 'colleagueThree', 'colleagueOne']
    };
    [this.boxLeft, this.boxMiddle, this.boxRight] = previous[this.boxLeft];
  }

  nextReferences(){
    this.nextPointHighlight();
    this.nextSortingBoxes();    
  }

  nextPointHighlight(){
    this.currentReference++;
    if(this.currentReference >3) this.currentReference = 1
  }

  nextSortingBoxes(){
    const next: Record<ColleaguesValue, [ColleaguesValue, ColleaguesValue, ColleaguesValue]> = {
      'colleagueOne': ['colleagueTwo', 'colleagueThree', 'colleagueOne'],
      'colleagueTwo': ['colleagueThree', 'colleagueOne', 'colleagueTwo'],
      'colleagueThree': ['colleagueOne', 'colleagueTwo', 'colleagueThree']
    };
    [this.boxLeft, this.boxMiddle, this.boxRight] = next[this.boxLeft];
  }
}
