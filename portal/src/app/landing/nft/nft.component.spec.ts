import { SlickCarouselModule } from "ngx-slick-carousel";
import { CountUpModule } from "ngx-countup";
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftComponent } from './nft.component';

describe('NftComponent', () => {
  let component: NftComponent;
  let fixture: ComponentFixture<NftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftComponent ], imports: [SlickCarouselModule, CountUpModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
