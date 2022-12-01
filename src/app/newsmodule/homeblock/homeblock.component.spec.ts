import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeblockComponent } from './homeblock.component';

describe('HomeblockComponent', () => {
  let component: HomeblockComponent;
  let fixture: ComponentFixture<HomeblockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeblockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
