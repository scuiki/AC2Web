import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  users = [
    { id: 1, name: 'John Doe', email: 'johndoe@example.com', role: 'Engenheiro de FE' },
    { id: 2, name: 'Jane Smith', email: 'janesmith@example.com', role: 'Engenheiro de BE' },
    { id: 3, name: 'Mike Johnson', email: 'mikejohnson@example.com', role: 'Analista de dados' },
    { id: 4, name: 'Emily Davis', email: 'emilydavis@example.com', role: 'Líder Técnico' },
    { id: 5, name: 'Alice Brown', email: 'alicebrown@example.com', role: 'Engenheiro de FE' }
  ];

  totalUsers: number = 0;
  userRoles: { name: string, count: number }[] = [];

  ngOnInit() {
    this.calculateUserSummary();
  }

  calculateUserSummary() {
    this.totalUsers = this.users.length;

    const roleCounts: { [key: string]: number } = {};
    this.users.forEach(user => {
      if (roleCounts[user.role]) {
        roleCounts[user.role]++;
      } else {
        roleCounts[user.role] = 1;
      }
    });

    this.userRoles = Object.keys(roleCounts).map(role => ({
      name: role,
      count: roleCounts[role]
    }));
  }
}
