import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerryLibComponent } from './terry-lib.component';

describe('TerryLibComponent', () => {
  let component: TerryLibComponent;
  let fixture: ComponentFixture<TerryLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerryLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerryLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
