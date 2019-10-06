import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenesisBlockComponent } from './genesis-block/genesis-block.component';



const routes: Routes = [
  { path: "", redirectTo: "/genesis-block", pathMatch: "full" },
  { path: "genesis-block", component: GenesisBlockComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
