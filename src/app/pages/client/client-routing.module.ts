import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { VideoComponent } from './video/video.component';
import { ComplaintfrontComponent } from './components/complaintfront/complaintfront.component';
import { CompanyfrontComponent } from './components/companyfront/companyfront.component';
import { EventfrontComponent } from './components/eventfront/eventfront.component';
import { PowerbiComponent } from './components/powerbi/powerbi.component';
import { SponsoresComponent } from './components/sponsores/sponsores.component';
import { TeamCardComponent } from './components/team-card/team-card.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', component: VideoComponent },
      { path: 'complaint', component: ComplaintfrontComponent },
      { path: 'company', component: CompanyfrontComponent },
      { path: 'events', component: EventfrontComponent },
      { path: 'Powerbi', component: PowerbiComponent },
      {path:'sponsers',component:SponsoresComponent},
      {path:'app-home',component:HomeComponent},
      {path:'teamCard',component:TeamCardComponent},
      { path: '**', component: VideoComponent },
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
