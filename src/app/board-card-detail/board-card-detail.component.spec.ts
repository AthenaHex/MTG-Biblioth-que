import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardCardDetailComponent } from './board-card-detail.component';

describe('BoardCardDetailComponent', () => {
  let component: BoardCardDetailComponent;
  let fixture: ComponentFixture<BoardCardDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardCardDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardCardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
