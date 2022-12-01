import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeblockcategoryComponent } from './homeblockcategory.component';

describe('HomeblockcategorieComponent', () => {
  let component: HomeblockcategoryComponent;
  let fixture: ComponentFixture<HomeblockcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeblockcategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeblockcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
