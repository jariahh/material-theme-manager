import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeThumbnailComponent } from './theme-thumbnail.component';

describe('ThemeThumbnailComponent', () => {
  let component: ThemeThumbnailComponent;
  let fixture: ComponentFixture<ThemeThumbnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeThumbnailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
