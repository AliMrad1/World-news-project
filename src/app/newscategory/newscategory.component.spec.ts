import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewscategoryComponent } from './newscategory.component';

describe('NewscategoryComponent', () => {
  let component: NewscategoryComponent;
  let fixture: ComponentFixture<NewscategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewscategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewscategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
