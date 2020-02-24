import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TeacherSalaryPage } from './teacher-salary.page';

describe('TeacherSalaryPage', () => {
  let component: TeacherSalaryPage;
  let fixture: ComponentFixture<TeacherSalaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherSalaryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TeacherSalaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
