import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhereIsMyTurtleComponent } from './where-is-my-turtle.component';

describe('WhereIsMyTurtleComponent', () => {
  let component: WhereIsMyTurtleComponent;
  let fixture: ComponentFixture<WhereIsMyTurtleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhereIsMyTurtleComponent]
    });
    fixture = TestBed.createComponent(WhereIsMyTurtleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
