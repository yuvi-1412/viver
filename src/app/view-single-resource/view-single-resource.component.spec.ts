import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSingleResourceComponent } from './view-single-resource.component';

describe('ViewSingleResourceComponent', () => {
  let component: ViewSingleResourceComponent;
  let fixture: ComponentFixture<ViewSingleResourceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewSingleResourceComponent]
    });
    fixture = TestBed.createComponent(ViewSingleResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
