import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponentsComponent } from './footer-components.component';

describe('FooterComponentsComponent', () => {
  let component: FooterComponentsComponent;
  let fixture: ComponentFixture<FooterComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
