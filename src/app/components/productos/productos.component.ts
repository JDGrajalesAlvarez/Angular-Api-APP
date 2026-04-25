import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosService } from '../../services/productos'

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: any[] = [];
  constructor(private productosService: ProductosService, private cdr: ChangeDetectorRef) { }
  ngOnInit() {
    this.productosService.obtenerProductos()
      .subscribe(data => {
        this.productos = data.slice(0, 4);
        this.cdr.detectChanges();
      });
  }
  crearProducto() {
    const nuevo = {
      nombre: 'Producto Nuevo',
      precio: 100
    };
    this.productosService.crearProducto(nuevo)
      .subscribe(() => {
        console.log('Producto creado');
        this.productosService.obtenerProductos()
          .subscribe(data => {
            this.productos = data;
            this.cdr.detectChanges();
          });
      });
  }
  eliminarProducto(id: number) {
    this.productosService.eliminarProducto(id)
      .subscribe(() => {
        console.log('Producto eliminado');
        this.productosService.obtenerProductos()
          .subscribe(data => {
            this.productos = this.productos.filter(p => p.id !== id);
            this.productos = data;
            this.cdr.detectChanges();
          });
      });
  }
}