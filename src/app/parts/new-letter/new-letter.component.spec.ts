import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLetterComponent } from './new-letter.component';

describe('NewLetterComponent', () => {
  let component: NewLetterComponent;
  let fixture: ComponentFixture<NewLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewLetterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
