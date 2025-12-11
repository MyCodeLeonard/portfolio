import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HamburgerButtonV2Component } from './hamburger-button-v2.component';

describe('HamburgerButtonV2Component', () => {
  let component: HamburgerButtonV2Component;
  let fixture: ComponentFixture<HamburgerButtonV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HamburgerButtonV2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HamburgerButtonV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
