import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosService } from '../../services/productos'

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
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
}