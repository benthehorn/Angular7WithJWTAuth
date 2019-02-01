import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntiresComponent } from './entires.component';

describe('EntiresComponent', () => {
  let component: EntiresComponent;
  let fixture: ComponentFixture<EntiresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntiresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntiresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
