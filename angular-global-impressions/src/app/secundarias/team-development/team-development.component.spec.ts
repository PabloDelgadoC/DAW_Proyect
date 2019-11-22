import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamDevelopmentComponent } from './team-development.component';

describe('TeamDevelopmentComponent', () => {
  let component: TeamDevelopmentComponent;
  let fixture: ComponentFixture<TeamDevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamDevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
