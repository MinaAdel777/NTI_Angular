import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenShopComponent } from './men-shop.component';

describe('MenShopComponent', () => {
  let component: MenShopComponent;
  let fixture: ComponentFixture<MenShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenShopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
