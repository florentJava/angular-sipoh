import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Article1Component } from './article1.component';

describe('Article1Component', () => {
  let component: Article1Component;
  let fixture: ComponentFixture<Article1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Article1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Article1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
