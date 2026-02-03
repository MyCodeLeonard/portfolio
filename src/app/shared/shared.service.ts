import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class SharedService {
  public readonly sectionHandover = signal<0 | 1 | 2 | 3>(0);
  setSectionHandover(number: 0 | 1 | 2 | 3){
    this.sectionHandover.set(number);
  }
}