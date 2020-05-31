import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MobtimerUsecase } from '../../../applications/mobtimer.usecase';
import { MobtimerComponent } from './mobtimer.component';

class MockMobtimerUsecase {
  initialize() {}
}

describe('MobtimerComponent', () => {
  let component: MobtimerComponent;
  let fixture: ComponentFixture<MobtimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MobtimerComponent],
      providers: [{ provide: MobtimerUsecase, useClass: MockMobtimerUsecase }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobtimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
