import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatilloDescripcionComponent } from './platillo-descripcion.component';

describe('PlatilloDescripcionComponent', () => {
  let component: PlatilloDescripcionComponent;
  let fixture: ComponentFixture<PlatilloDescripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatilloDescripcionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatilloDescripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
