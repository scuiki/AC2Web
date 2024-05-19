import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users = [
    { id: 1, name: 'John Doe', email: 'johndoe@example.com', role: 'FE' },
    { id: 2, name: 'Jane Smith', email: 'janesmith@example.com', role: 'BE' },
    { id: 3, name: 'Mike Johnson', email: 'mikejohnson@example.com', role: 'Data Analyst' },
    { id: 4, name: 'Emily Davis', email: 'emilydavis@example.com', role: 'Technical Lead' }
  ];

  constructor(private router: Router) {}

  addUser() {
    this.router.navigate(['/app/add-user']);
  }

  editUser(userId: number) {
    this.router.navigate(['/app/edit-user']);
  }

  deleteUser(userId: number) {
    this.users = this.users.filter(user => user.id !== userId);
  }
}

