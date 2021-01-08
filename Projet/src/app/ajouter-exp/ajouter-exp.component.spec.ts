import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterExpComponent } from './ajouter-exp.component';

describe('AjouterExpComponent', () => {
  let component: AjouterExpComponent;
  let fixture: ComponentFixture<AjouterExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterExpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
