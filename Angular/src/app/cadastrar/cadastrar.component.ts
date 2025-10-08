import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
user: User = new User
confirmarSenha: string
tipoUsuario: string


  constructor(
private authService: AuthService,
private router: Router
  ) { }

  ngOnInit(){
window.scroll(0,0)
}
confirmSenha(event:any){
this.confirmarSenha=event.target.value
}
}