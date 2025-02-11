import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBodyComponent } from './top-body.component';

describe('TopBodyComponent', () => {
  let component: TopBodyComponent;
  let fixture: ComponentFixture<TopBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopBodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
