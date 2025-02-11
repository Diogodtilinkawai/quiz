import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ExamenService } from '../examen.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  nombre = new FormControl('');
  ano = new FormControl('');
  productora = new FormControl('');
  casa = new FormControl('');
  prota = new FormControl('');


  items: any = [];
  quotes: any;
  agregar() {
    if (this.nombre.value && this.ano.value && this.productora.value && this.casa.value && this.prota.value ) {
      this.items.push({ nombre: this.nombre.value, fecha1: this.ano.value, fecha2: this.productora.value, casa: this.casa.value, prota: this.prota.value});
      this.nombre.setValue('');
      this.ano.setValue('');
      this.productora.setValue('');
      this.casa.setValue('');
      this.prota.setValue('');

    }
    else {
      alert('Llene todos los campos');
    }
  }
  constructor(private router:Router, private examenservice:ExamenService) { }
  redirect()
  {
    this.router.navigate(['/formulario'])
  }
  ngOnInit() {
    this.examenservice.quotes().subscribe((data) => {
      this.quotes = data;
      console.log(this.quotes);
    });
  }
}
