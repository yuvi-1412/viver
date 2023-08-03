import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListResourcesColorComponent } from './list-resources-color.component';

describe('ListResourcesColorComponent', () => {
  let component: ListResourcesColorComponent;
  let fixture: ComponentFixture<ListResourcesColorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListResourcesColorComponent]
    });
    fixture = TestBed.createComponent(ListResourcesColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
