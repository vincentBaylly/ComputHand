import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SysDiagramComponent } from './sys-diagram.component';

describe('SysDiagramComponent', () => {
  let component: SysDiagramComponent;
  let fixture: ComponentFixture<SysDiagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysDiagramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
