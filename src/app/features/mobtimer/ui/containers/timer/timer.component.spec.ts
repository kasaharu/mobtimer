import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CountdownUsecase } from '../../../applications/countdown.usecase';
import { MobtimerQuery } from '../../../applications/mobtimer.query';
import { TimerComponent } from './timer.component';

class MockMobtimerQuery {}

class MockCountdownUsecase {}

describe('TimerComponent', () => {
  let component: TimerComponent;
  let fixture: ComponentFixture<TimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TimerComponent],
      providers: [
        { provide: CountdownUsecase, useClass: MockCountdownUsecase },
        { provide: MobtimerQuery, useClass: MockMobtimerQuery },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
