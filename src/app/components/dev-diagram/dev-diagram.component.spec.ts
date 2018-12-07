import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevDiagramComponent } from './dev-diagram.component';

describe('DevDiagramComponent', () => {
  let component: DevDiagramComponent;
  let fixture: ComponentFixture<DevDiagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevDiagramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
