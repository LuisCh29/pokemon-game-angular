import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-iniciar-sessio',
  templateUrl: './iniciar-sessio.component.html',
  styleUrls: ['./iniciar-sessio.component.css']
})
export class IniciarSessioComponent implements OnInit {

  constructor(private router: Router) { }

  Iniciar(){
    this.router.navigate(['/home'])
  }

  ngOnInit(): void {
  }

}
