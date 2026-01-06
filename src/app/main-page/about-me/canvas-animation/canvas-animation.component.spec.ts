import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasAnimationComponent } from './canvas-animation.component';

describe('CanvasAnimationComponent', () => {
  let component: CanvasAnimationComponent;
  let fixture: ComponentFixture<CanvasAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CanvasAnimationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CanvasAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
