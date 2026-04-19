import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({

  selector: 'app-inventario',

  standalone: true,

  imports: [CommonModule],

  templateUrl: './inventario.component.html',

  styleUrl: './inventario.component.css'

})

export class InventarioComponent {

  inventario = [

    { nombre: 'Laptop', stock: 12 },
    { nombre: 'Mouse', stock: 18 },
    { nombre: 'Teclado', stock: 8 },
    { nombre: 'Monitor', stock: 6 },
    { nombre: 'Disco SSD', stock: 15 },
    { nombre: 'Impresora', stock: 4 },
    { nombre: 'Router', stock: 10 },
    { nombre: 'Webcam', stock: 7 },
    { nombre: 'Audifonos', stock: 13 },
    { nombre: 'Memoria USB', stock: 20 }

  ];

}