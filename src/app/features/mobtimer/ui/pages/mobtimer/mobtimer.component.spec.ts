import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobtimerComponent } from './mobtimer.component';

describe('MobtimerComponent', () => {
  let component: MobtimerComponent;
  let fixture: ComponentFixture<MobtimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobtimerComponent ],
    })
    .compileComponents();
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
