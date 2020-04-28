import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateClientComponent } from './client/create-client/create-client.component';
import { ShowClientComponent } from './client/show-client/show-client.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { ShowEmployeeComponent } from './employee/show-employee/show-employee.component';

const routes: Routes = [
	{path: '',component: HomepageComponent},
	{path: 'createclient',component: CreateClientComponent},
	{path: 'createemployee',component: CreateEmployeeComponent},
	{path: 'showclient',component: ShowClientComponent},
	{path: 'showemployee',component: ShowEmployeeComponent},
	{path: '**',component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CreateClientComponent,ShowClientComponent,PageNotFoundComponent,  HomepageComponent ,CreateEmployeeComponent,ShowEmployeeComponent]
