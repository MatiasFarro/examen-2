import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { MeseroComponent } from './pages/mesero/mesero.component';
import { AddMeseroComponent } from './pages/add-mesero/add-mesero.component';
import { UpdateMeseroComponent } from './pages/update-mesero/update-mesero.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { AddclienteComponent } from './pages/addcliente/addcliente.component';
import { UpdateClienteComponent } from './pages/update-cliente/update-cliente.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { AddCategoriaComponent } from './pages/add-categoria/add-categoria.component';
import { UpdateCategoriaComponent } from './pages/update-categoria/update-categoria.component';
import { ErrorComponent } from './pages/error/error.component';


export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component:HomeComponent },
  { path: 'mesero', component: MeseroComponent},
  { path: 'addMesero', component: AddMeseroComponent},
  { path: 'updateMesero/:id', component: UpdateMeseroComponent},
  { path: 'clientes', component: ClientesComponent},
  { path: 'addCliente', component: AddclienteComponent},
  { path: 'updateCliente/:id', component: UpdateClienteComponent},
  { path: 'categorias', component: CategoriasComponent},
  { path: 'addCategoria', component: AddCategoriaComponent},
  { path: 'updateCategoria/:id', component: UpdateCategoriaComponent},
  { path: 'error', component: ErrorComponent},
];