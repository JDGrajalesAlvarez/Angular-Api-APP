import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosService } from '../../services/productos';

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})

export class InventarioComponent implements OnInit {
  inventario: any[] = [];

  constructor(
    private productosService: ProductosService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.productosService.obtenerInventario()
      .subscribe(data => {
        this.inventario = data;
        this.cdr.detectChanges();
      });
  }
}