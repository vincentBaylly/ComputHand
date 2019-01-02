import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { DiagramComponent } from './diagram.component';

@Component({
  selector: 'carousel',
  template: '<div id="archiDiagram"></div><div id="devOpsDiagram"></div><div id="databaseDiagram"></div>'
})
class MockCarouselComponent {
}


describe('DiagramComponent', () => {
  let component: DiagramComponent;
  let fixture: ComponentFixture<DiagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DiagramComponent,
        MockCarouselComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
