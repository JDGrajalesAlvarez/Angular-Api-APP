import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosService } from '../../services/productos'

@Component({
  selector: 'app-movimientos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.css',]
})

export class MovimientosComponent implements OnInit {
  movimientos: any[] = [];
  constructor(private productosService: ProductosService, private cdr: ChangeDetectorRef) { }
  ngOnInit() {
    this.productosService.obtenerMovimientos()
      .subscribe(data => {
        this.movimientos = data;
        this.cdr.detectChanges();
      });
  }
}
