import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewsresponseComponent } from './addnewsresponse.component';

describe('AddnewsresponseComponent', () => {
  let component: AddnewsresponseComponent;
  let fixture: ComponentFixture<AddnewsresponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnewsresponseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddnewsresponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
