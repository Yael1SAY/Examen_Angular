import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatillosGeneralComponent } from './platillos-general.component';

describe('PlatillosGeneralComponent', () => {
  let component: PlatillosGeneralComponent;
  let fixture: ComponentFixture<PlatillosGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatillosGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatillosGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
