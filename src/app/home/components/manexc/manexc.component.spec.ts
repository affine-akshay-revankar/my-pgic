import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManexcComponent } from './manexc.component';

describe('ManexcComponent', () => {
  let component: ManexcComponent;
  let fixture: ComponentFixture<ManexcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManexcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManexcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
