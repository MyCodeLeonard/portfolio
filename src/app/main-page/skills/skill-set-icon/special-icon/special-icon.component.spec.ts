import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialIconComponent } from './special-icon.component';

describe('SpecialIconComponent', () => {
  let component: SpecialIconComponent;
  let fixture: ComponentFixture<SpecialIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpecialIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
