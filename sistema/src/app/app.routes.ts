import { Routes } from '@angular/router';
import { ListarCategoriaComponent } from 
import { LoginComponent } from './login/login.component';

export const routes: Routes = [

{path: '', component: LoginComponent},
{path: 'home', component: HomeComponent, canActivate: [userGuardGuard]},
{path: 'mesero', component: ListarCategoriaComponent, canActivate: [userGuardGuard]},
{path: 'addMesero', component: AddMeserosComponent, canActivate: [userGuardGuard]},
{path: 'upfateMesero/:id', component: UpdateMeseroComponent, canActivate: [userGuardGuard]},
{path: 'clientes', component: ListarCategoriaComponent, canActivate: [userGuardGuard]},
{path: 'addCliente', component: AddClientesComponent, canActivate: [userGuardGuard]},
{path: 'updateCliente/:id', component: UpdateClienteComponent, canActivate: [userGuardGuard]},
{path: 'categorias', component: ListarClientesComponent, canActivate: [userGuardGuard]},
{path: 'addCategoria', component: AddCategoriasComponent, canActivate: [userGuardGuard]},
{path: 'updateCategoria/:id', component: UpdateCategoriaComponent, canActivate: [userGuardGuard]},
{path: '**', component: ErrorComponent}

];



