import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuralVagasComponent } from './mural-vaga.component';

describe('MuralDeVagasComponent', () => {
  let component: MuralVagasComponent;
  let fixture: ComponentFixture<MuralVagasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuralVagasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuralVagasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
