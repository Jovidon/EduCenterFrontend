import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TeacherSalaryHistoryPage } from './teacher-salary-history.page';

describe('TeacherSalaryHistoryPage', () => {
  let component: TeacherSalaryHistoryPage;
  let fixture: ComponentFixture<TeacherSalaryHistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherSalaryHistoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TeacherSalaryHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
