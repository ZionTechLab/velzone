import { SlickCarouselModule } from "ngx-slick-carousel";
import { CountUpModule } from "ngx-countup";
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobcategoriesComponent } from './jobcategories.component';

describe('JobcategoriesComponent', () => {
  let component: JobcategoriesComponent;
  let fixture: ComponentFixture<JobcategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobcategoriesComponent ], imports: [SlickCarouselModule, CountUpModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
