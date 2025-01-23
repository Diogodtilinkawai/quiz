import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  nombre = new FormControl('');
  fechainicio = new FormControl('');
  fechafin = new FormControl('');
  ubicacion = new FormControl('');
  encargado = new FormControl('');
  numero = new FormControl('');

  items: any = [];

  agregar() {
    if (this.nombre.value && this.fechainicio.value && this.fechafin.value && this.ubicacion.value && this.encargado.value && this.numero.value) {
      this.items.push({ nombre: this.nombre.value, fecha1: this.fechainicio.value, fecha2: this.fechafin.value, ubicacion: this.ubicacion.value, encargado: this.encargado.value, numero: this.numero.value });
      this.nombre.setValue('');
      this.fechainicio.setValue('');
      this.fechafin.setValue('');
      this.ubicacion.setValue('');
      this.encargado.setValue('');
      this.numero.setValue('');
    }
    else {
      alert('Llene todos los campos');
    }
  }
  constructor() { }

}
