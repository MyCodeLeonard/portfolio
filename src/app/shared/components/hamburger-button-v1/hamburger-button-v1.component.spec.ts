import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HamburgerButtonV1Component } from './hamburger-button-v1.component';

describe('HamburgerButtonV1Component', () => {
  let component: HamburgerButtonV1Component;
  let fixture: ComponentFixture<HamburgerButtonV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HamburgerButtonV1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HamburgerButtonV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
