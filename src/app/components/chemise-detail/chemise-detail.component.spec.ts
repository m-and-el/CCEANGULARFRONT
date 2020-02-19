import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemiseDetailComponent } from './chemise-detail.component';

describe('ChemiseDetailComponent', () => {
  let component: ChemiseDetailComponent;
  let fixture: ComponentFixture<ChemiseDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChemiseDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChemiseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
