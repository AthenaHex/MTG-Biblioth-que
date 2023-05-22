import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardCardsComponent } from './board-cards.component';

describe('BoardCardsComponent', () => {
  let component: BoardCardsComponent;
  let fixture: ComponentFixture<BoardCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
