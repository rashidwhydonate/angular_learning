import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from '../../models/user.model';
import { CommonModule } from '@angular/common';
import { DUMMY_USERS } from '../../mock/users.mock';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{
  users: User[] = [];
  selectedUser: string | null = null;

  @Output() notifyTasks = new EventEmitter<User>();

  ngOnInit(){
    this.users = DUMMY_USERS;
  }

  selectUser(user: User): void {
    this.selectedUser = user.id
    this.notifyTasks.emit(user)
  }
}
