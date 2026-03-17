import { SlickCarouselModule } from "ngx-slick-carousel";
import { CountUpModule } from "ngx-countup";
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobComponent } from './job.component';

describe('JobComponent', () => {
  let component: JobComponent;
  let fixture: ComponentFixture<JobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobComponent ], imports: [SlickCarouselModule, CountUpModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
