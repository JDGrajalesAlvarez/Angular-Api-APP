import { Routes } from '@angular/router';
import { ProductosComponent } from './components/productos/productos.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { MovimientosComponent } from './components/movimientos/movimientos.component'

export const routes: Routes = [
    {
        path: '',
        component: ProductosComponent
    },
    {
        path: 'inventario',
        component: InventarioComponent
    },
    {
        path: 'movimientos',
        component: MovimientosComponent
    }
];