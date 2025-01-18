import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsShopComponent } from './kids-shop.component';

describe('KidsShopComponent', () => {
  let component: KidsShopComponent;
  let fixture: ComponentFixture<KidsShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KidsShopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KidsShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
