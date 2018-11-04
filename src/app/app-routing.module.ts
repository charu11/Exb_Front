import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoComponent} from './info/info.component';
import { ExploreComponent } from './explore/explore.component';

const routes: Routes = [
  {
    path:'info',
    component:InfoComponent
  },

   {
     path:'explore',
     component: ExploreComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
