import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Auth2Guard } from './service/auth2.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule', 
    canActivate: [Auth2Guard]
  },
  { path: 'logoff', loadChildren: './logoff/logoff.module#LogoffPageModule', 
    canActivate: [Auth2Guard] 
  },
  { path: 'lista-de-clientes', 
  loadChildren: './lista-de-clientes/lista-de-clientes.module#ListaDeClientesPageModule',
  },
  { path: 'cadastrdo-de-clientes', 
  loadChildren: './cadastrdo-de-clientes/cadastrdo-de-clientes.module#CadastrdoDeClientesPageModule'
 }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
