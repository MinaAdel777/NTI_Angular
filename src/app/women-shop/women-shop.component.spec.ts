import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenShopComponent } from './women-shop.component';

describe('WomenShopComponent', () => {
  let component: WomenShopComponent;
  let fixture: ComponentFixture<WomenShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WomenShopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomenShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
