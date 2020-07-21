import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterListeComponent } from './ajouter-liste.component';

describe('AjouterListeComponent', () => {
  let component: AjouterListeComponent;
  let fixture: ComponentFixture<AjouterListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
