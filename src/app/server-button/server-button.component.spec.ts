import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerButtonComponent } from './server-button.component';

describe('ServerButtonComponent', () => {
  let component: ServerButtonComponent;
  let fixture: ComponentFixture<ServerButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServerButtonComponent]
    });
    fixture = TestBed.createComponent(ServerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
