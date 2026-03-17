import { SlickCarouselModule } from "ngx-slick-carousel";
import { CountUpModule } from "ngx-countup";
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketPlaceComponent } from './market-place.component';

describe('MarketPlaceComponent', () => {
  let component: MarketPlaceComponent;
  let fixture: ComponentFixture<MarketPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketPlaceComponent ], imports: [SlickCarouselModule, CountUpModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
