import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { LoginComponent } from './login/login.component';
import { PlantsComponent } from './plants/plants.component';
import { PlantDetailsComponent } from './plant-details/plant-details.component'
import { MyPlantsComponent } from './my-plants/my-plants.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AddPlantComponent } from './add-plant/add-plant.component';
import { SuggestionPageComponent } from './suggestion-page/suggestion-page.component';
import { PlantService } from './plant.service';
import { MyplaService } from './mypla.service';
import { WishlistService } from './wishlist.service';
import { TrefleService } from './trefle.service';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    LoginComponent,
    PlantsComponent,
    PlantDetailsComponent,
    MyPlantsComponent,
    WishlistComponent,
    AddPlantComponent,
    SuggestionPageComponent
   
 
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: PlantsComponent },
      { path: 'login', component: LoginComponent },
      { path: 'plant-details', component: PlantDetailsComponent },
      { path: 'my-plants', component: MyPlantsComponent },
      { path: 'wishlist', component: WishlistComponent },
      { path: 'add-plant', component: AddPlantComponent },
      { path: 'suggestion-page', component: SuggestionPageComponent },
    
    ])
  ],
  providers: [PlantService, TrefleService, WishlistService, MyplaService],
  bootstrap: [AppComponent],

})
export class AppModule { }
