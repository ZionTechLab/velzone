import { SlickCarouselModule } from "ngx-slick-carousel";
import { CountUpModule } from "ngx-countup";
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobFooterComponent } from './job-footer.component';

describe('JobFooterComponent', () => {
  let component: JobFooterComponent;
  let fixture: ComponentFixture<JobFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobFooterComponent ], imports: [SlickCarouselModule, CountUpModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
