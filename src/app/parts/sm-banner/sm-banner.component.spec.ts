import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmBannerComponent } from './sm-banner.component';

describe('SmBannerComponent', () => {
  let component: SmBannerComponent;
  let fixture: ComponentFixture<SmBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
