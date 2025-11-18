import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillSetIconComponent } from './skill-set-icon.component';

describe('SkillSetIconComponent', () => {
  let component: SkillSetIconComponent;
  let fixture: ComponentFixture<SkillSetIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillSetIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkillSetIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
