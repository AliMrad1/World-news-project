import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsmoduleComponent } from './newsmodule.component';

describe('NewsmoduleComponent', () => {
  let component: NewsmoduleComponent;
  let fixture: ComponentFixture<NewsmoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsmoduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
