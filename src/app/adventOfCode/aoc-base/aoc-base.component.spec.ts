import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AocBaseComponent } from './aoc-base.component';

describe('AocBaseComponent', () => {
  let component: AocBaseComponent;
  let fixture: ComponentFixture<AocBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AocBaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AocBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
