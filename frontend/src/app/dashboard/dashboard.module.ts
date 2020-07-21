import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { DashboardComponent } from './dashboard.component';


import { NgbModule, NgbTabset} from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Dashboard',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Dashboard' }
      ]
    },
    component: DashboardComponent
  }
];

@NgModule({
  imports: [NgbModule, FormsModule, CommonModule, RouterModule.forChild(routes), ChartsModule
  ],
  declarations: [DashboardComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule {

}
