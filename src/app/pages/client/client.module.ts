import { ComplaintComponent } from './../ui-components/complaint/complaint.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ClientRoutingModule } from './client-routing.module';
import { MainComponent } from './main/main.component';
import { VideoComponent } from './video/video.component';
// import { FooterComponent } from './footer/footer.component';
import { CompanyfrontComponent } from './components/companyfront/companyfront.component';
import { ComplaintfrontComponent } from './components/complaintfront/complaintfront.component';
import { EventfrontComponent } from './components/eventfront/eventfront.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { PowerbiComponent } from './components/powerbi/powerbi.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MaterialModule } from 'src/app/material.module'; // adjust path if needed
import { ReactiveFormsModule } from '@angular/forms';
import { SponsoresComponent } from './components/sponsores/sponsores.component';
import { TeamCardComponent } from './components/team-card/team-card.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    NavbarComponent,
    MainComponent,
    VideoComponent,
    CompanyfrontComponent,
    ComplaintfrontComponent,
    EventfrontComponent,
    FooterComponent,
    PowerbiComponent,
    AboutUsComponent,
    ContactUsComponent,
    SponsoresComponent,
    TeamCardComponent,
    HomeComponent,
    
   
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ClientRoutingModule,
    FormsModule,
    MaterialModule ],
})
export class ClientModule {}
