import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPanelTitleBarComponent } from './main-panel-title-bar.component';

describe('MainPanelTitleBarComponent', () => {
  let component: MainPanelTitleBarComponent;
  let fixture: ComponentFixture<MainPanelTitleBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainPanelTitleBarComponent]
    });
    fixture = TestBed.createComponent(MainPanelTitleBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
