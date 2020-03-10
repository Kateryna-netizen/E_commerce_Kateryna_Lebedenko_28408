import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NazwaKomponentuComponent } from './nazwa-komponentu.component';

describe('NazwaKomponentuComponent', () => {
  let component: NazwaKomponentuComponent;
  let fixture: ComponentFixture<NazwaKomponentuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NazwaKomponentuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NazwaKomponentuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
