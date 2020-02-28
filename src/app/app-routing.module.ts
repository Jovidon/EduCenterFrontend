import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main-sign-in',
    pathMatch: 'full'
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule)
  },
  {
    path: 'schedule',
    loadChildren: () => import('./pages/schedule/schedule.module').then(m => m.ScheduleModule)
  },
  {
    path: 'speakers',
    loadChildren: () => import('./pages/speaker-list/speaker-list.module').then(m => m.SpeakerListModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'report',
    loadChildren: () => import('./pages/report/report.module').then( m => m.ReportPageModule)
  },
  {
    path: 'students',
    loadChildren: () => import('./pages/students/students.module').then( m => m.StudentsPageModule)
  },
  {
    path: 'groups',
    loadChildren: () => import('./pages/groups/groups.module').then( m => m.GroupsPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./pages/main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'main-sign-in',
    loadChildren: () => import('./pages/main-sign-in/main-sign-in.module').then( m => m.MainSignInPageModule)
  },
  {
    path: 'teacher-salary',
    loadChildren: () => import('./pages/teacher-salary/teacher-salary.module').then( m => m.TeacherSalaryPageModule)
  },
  {
    path: 'add-teacher',
    loadChildren: () => import('./pages/add-teacher/add-teacher.module').then( m => m.AddTeacherPageModule)
  },
  {
    path: 'about-student',
    loadChildren: () => import('./pages/about-student/about-student.module').then( m => m.AboutStudentPageModule)
  },
  {
    path: 'teacher-salary-history',
    loadChildren: () => import('./pages/teacher-salary-history/teacher-salary-history.module').then( m => m.TeacherSalaryHistoryPageModule)
  },
  {
    path: 'groups',
    loadChildren: () => import('./pages/groups/groups.module').then( m => m.GroupsPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./pages/main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'main-sign-in',
    loadChildren: () => import('./pages/main-sign-in/main-sign-in.module').then( m => m.MainSignInPageModule)
  },
  {
    path: 'teacher-salary',
    loadChildren: () => import('./pages/teacher-salary/teacher-salary.module').then( m => m.TeacherSalaryPageModule)
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
