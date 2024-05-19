import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  userForm: FormGroup;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      role: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
    });
  }

  ngOnInit() {
    const userId = this.route.snapshot.paramMap.get('id');
    // Simule a obtenção dos dados do usuário a partir do ID. Normalmente, você faria uma chamada de API aqui.
    const user = this.getUserById(userId);
    this.userForm.setValue({
      name: user.name,
      email: user.email,
      role: user.role,
      password: user.password
    });
  }

  getUserById(id: string | null) {
    return {
      name: 'Teste',
      email: 'teste@example.com',
      role: 'FE',
      password: '123456'
    };
  }

  saveUser() {
    if (this.userForm.valid) {
      console.log('Edited User:', this.userForm.value);
      this.router.navigate(['/app/users']);
    }
  }
}
