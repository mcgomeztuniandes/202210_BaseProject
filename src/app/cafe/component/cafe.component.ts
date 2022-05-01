import { Component, OnInit } from '@angular/core';
import { CafeService } from '../service/cafe.service';
import { Cafe } from '../model/cafe';

@Component({
  selector: 'app-cafe',
  templateUrl: './cafe.component.html',
  styleUrls: ['./cafe.component.css']
})
export class CafeComponent implements OnInit {
  cafes:Array<Cafe> = [];
  cantidadCafeTipo:Array<any> = [];

  constructor(private cafeService:CafeService) { }

  ngOnInit() {
    this.getAllCafe();
  }

  getAllCafe():void {
    this.cafeService.getAllCafes().subscribe(cafes => {
      this.cafes = cafes;
      if(this.cafes.length > 0)
        this.getCantidadCafeTipo();
    })
  }

  getCantidadCafeTipo():any {
    let cafeTipo: Array<any> = [];
    this.cafes.forEach(function(valor, index, array) {
      if(cafeTipo.length == 0) {
        cafeTipo.push({'tipo': valor.tipo,'cantidad': 1});
      } else {
        if(cafeTipo.filter(c => c.tipo == valor.tipo).length > 0) {
          cafeTipo.find(c => c.tipo == valor.tipo).cantidad++;
        } else {
          cafeTipo.push({'tipo': valor.tipo,'cantidad': 1});
        }
      }
    });
    this.cantidadCafeTipo = cafeTipo;
  }
}
