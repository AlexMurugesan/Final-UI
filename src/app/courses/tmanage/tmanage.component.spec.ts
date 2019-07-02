import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmanageComponent } from './tmanage.component';

describe('TmanageComponent', () => {
  let component: TmanageComponent;
  let fixture: ComponentFixture<TmanageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmanageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
