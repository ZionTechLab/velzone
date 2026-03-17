import { SlickCarouselModule } from "ngx-slick-carousel";
import { CountUpModule } from "ngx-countup";
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkProcessComponent } from './work-process.component';

describe('WorkProcessComponent', () => {
  let component: WorkProcessComponent;
  let fixture: ComponentFixture<WorkProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkProcessComponent ], imports: [SlickCarouselModule, CountUpModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
