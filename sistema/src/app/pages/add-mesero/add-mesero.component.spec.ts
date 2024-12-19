import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMeseroComponent } from './add-mesero.component';

describe('AddMeseroComponent', () => {
  let component: AddMeseroComponent;
  let fixture: ComponentFixture<AddMeseroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMeseroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMeseroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
