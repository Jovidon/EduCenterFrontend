import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AboutStudentPage } from './about-student.page';

describe('AboutStudentPage', () => {
  let component: AboutStudentPage;
  let fixture: ComponentFixture<AboutStudentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutStudentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AboutStudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
