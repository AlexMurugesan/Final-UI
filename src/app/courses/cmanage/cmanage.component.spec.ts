import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmanageComponent } from './cmanage.component';

describe('CmanageComponent', () => {
  let component: CmanageComponent;
  let fixture: ComponentFixture<CmanageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmanageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
