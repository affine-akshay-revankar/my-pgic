import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsStoredTrafficComponent } from './ins-stored-traffic.component';

describe('InsStoredTrafficComponent', () => {
  let component: InsStoredTrafficComponent;
  let fixture: ComponentFixture<InsStoredTrafficComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsStoredTrafficComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsStoredTrafficComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
