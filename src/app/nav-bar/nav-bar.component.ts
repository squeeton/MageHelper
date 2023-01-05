import { Component, OnInit } from '@angular/core';
import { ModalService } from '../services/modal.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(
    public modal: ModalService,
    public auth: AuthService) { 

    }

  ngOnInit(): void {
  }


  
  openModal($event: Event) {
    $event.preventDefault();
    this.modal.toggleModal('auth');
  }


}
