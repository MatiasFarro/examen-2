import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AddMeseroComponent } from './pages/add-mesero/add-mesero.component';
import { UpdateMeseroComponent } from './pages/update-mesero/update-mesero.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { AddclienteComponent } from './pages/addcliente/addcliente.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { AddCategoriaComponent } from './pages/add-categoria/add-categoria.component';
import { ErrorComponent } from './pages/error/error.component';
import { MeseroComponent } from './pages/mesero/mesero.component';
import { UpdateClientComponent } from './pages/update-cliente/update-cliente.component';
import { UpdateCategoryComponent } from './pages/update-categoria/update-categoria.component';
import { HomeComponent } from './pages/home/home.component';



export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component:HomeComponent },
  { path: 'meseros', component: MeseroComponent},
  { path: 'addMesero', component: AddMeseroComponent},
  { path: 'updateMesero/:id', component: UpdateMeseroComponent},
  { path: 'clientes', component: ClientesComponent},
  { path: 'addCliente', component: AddclienteComponent},
  { path: 'updateCliente/:id', component: UpdateClientComponent},
  { path: 'categorias', component: CategoriasComponent},
  { path: 'addCategoria', component: AddCategoriaComponent},
  { path: 'updateCategoria/:id', component: UpdateCategoryComponent},
  { path: 'error', component: ErrorComponent},
];