import { CarouselItemDirective } from './carousel-item.directive';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';

@Component({
  template: '<carousel><div>item1</div><div>item2</div></carousel>'
})
class TestCarouselItemsComponent {
}

@Component({
  selector: 'carousel',
  template: ''
})
class MockCarouselComponent {
}

describe('Directive: CarouselItem', () => {

  let component: TestCarouselItemsComponent;
  let fixture: ComponentFixture<TestCarouselItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CarouselItemDirective,
        TestCarouselItemsComponent,
        MockCarouselComponent
      ]
    });
    fixture = TestBed.createComponent(TestCarouselItemsComponent);
    component = fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });
});
