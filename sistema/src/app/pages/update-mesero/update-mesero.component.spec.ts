import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMeseroComponent } from './update-mesero.component';

describe('UpdateMeseroComponent', () => {
  let component: UpdateMeseroComponent;
  let fixture: ComponentFixture<UpdateMeseroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateMeseroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateMeseroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
