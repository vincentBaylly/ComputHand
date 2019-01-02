import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { DevDiagramComponent } from './dev-diagram.component';

@Component({
  selector: 'carousel',
  template: ''
})
class MockCarouselComponent {
}

describe('DevDiagramComponent', () => {
  let component: DevDiagramComponent;
  let fixture: ComponentFixture<DevDiagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DevDiagramComponent,
        MockCarouselComponent
      ]
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
