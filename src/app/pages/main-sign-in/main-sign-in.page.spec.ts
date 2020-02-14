import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MainSignInPage } from './main-sign-in.page';

describe('MainSignInPage', () => {
  let component: MainSignInPage;
  let fixture: ComponentFixture<MainSignInPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainSignInPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MainSignInPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
