/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { } from '../service/cafe.service';
import { faker } from '@faker-js/faker';
import { CafeComponent } from './cafe.component';
import { Observable, of } from 'rxjs';
import { Cafe } from '../model/cafe';
import { CafeService } from '../service/cafe.service';

export class MockCafeService {
  getAllCafes(): Observable<Array<Cafe>> {
    let cafes: Array<Cafe> = [];
    cafes.push(new Cafe(faker.datatype.number({'min': 1,'max': 100}), faker.name.jobArea(), faker.commerce.productName(), faker.address.state(), faker.word.adjective(), faker.datatype.number({'min': 500,'max': 1500}), faker.image.nature()));
    cafes.push(new Cafe(faker.datatype.number({'min': 1,'max': 100}), faker.name.jobArea(), faker.commerce.productName(), faker.address.state(), faker.word.adjective(), faker.datatype.number({'min': 500,'max': 1500}), faker.image.nature()));
    cafes.push(new Cafe(faker.datatype.number({'min': 1,'max': 100}), faker.name.jobArea(), faker.commerce.productName(), faker.address.state(), faker.word.adjective(), faker.datatype.number({'min': 500,'max': 1500}), faker.image.nature()));
    return of(cafes);
  }
}

describe('CafeComponent', () => {
  let component: CafeComponent;
  let fixture: ComponentFixture<CafeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers:  [{ provide: CafeService, useClass: MockCafeService }],
      declarations: [ CafeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should cargar los tres elementos del mockServicio en la table', () => {
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.cafes.length).toBe(3); //valida que llegue los tres datos del mock al objeto del controlador;
    expect(fixture.debugElement.nativeElement.querySelector('table.tamanioTable').children.length).toBe(2); //valida la tabla el titulo y el body donde van a ir los registros;
    expect(fixture.debugElement.nativeElement.querySelector('tbody').children.length).toBe(3); //valida los datos de la tabla
  });
});
