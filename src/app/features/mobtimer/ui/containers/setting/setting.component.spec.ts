import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MobtimerQuery } from '../../../applications/mobtimer.query';
import { MobtimerUsecase } from '../../../applications/mobtimer.usecase';
import { SettingComponent } from './setting.component';

class MockMobtimerQuery {}

class MockMobtimerUsecase {
  changeTime() {}
  createMember() {}
  deleteMember() {}
}

describe('SettingComponent', () => {
  let component: SettingComponent;
  let fixture: ComponentFixture<SettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SettingComponent],
      providers: [
        { provide: MobtimerUsecase, useClass: MockMobtimerUsecase },
        { provide: MobtimerQuery, useClass: MockMobtimerQuery },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
