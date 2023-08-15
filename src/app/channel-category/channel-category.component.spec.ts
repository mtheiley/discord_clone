import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelCategoryComponent } from './channel-category.component';

describe('ChannelCategoryComponent', () => {
  let component: ChannelCategoryComponent;
  let fixture: ComponentFixture<ChannelCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChannelCategoryComponent]
    });
    fixture = TestBed.createComponent(ChannelCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
