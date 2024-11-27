import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternacionaisComponent } from './internacionais.component';

describe('InternacionaisComponent', () => {
  let component: InternacionaisComponent;
  let fixture: ComponentFixture<InternacionaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternacionaisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InternacionaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
