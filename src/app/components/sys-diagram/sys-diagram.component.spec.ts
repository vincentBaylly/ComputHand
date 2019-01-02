import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { SysDiagramComponent } from './sys-diagram.component';

@Component({
  selector: 'carousel',
  template: ''
})
class MockCarouselComponent {
}

describe('SysDiagramComponent', () => {
  let component: SysDiagramComponent;
  let fixture: ComponentFixture<SysDiagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SysDiagramComponent,
        MockCarouselComponent
      ]
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
