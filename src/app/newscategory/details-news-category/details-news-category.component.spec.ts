import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsNewsCategoryComponent } from './details-news-category.component';

describe('DetailsNewsCategoryComponent', () => {
  let component: DetailsNewsCategoryComponent;
  let fixture: ComponentFixture<DetailsNewsCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsNewsCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsNewsCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
