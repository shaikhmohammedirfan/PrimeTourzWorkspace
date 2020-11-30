import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { globals } from '../../../../shared/others/globals';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.scss']
})
export class AdminSidebarComponent implements OnInit {
  env = globals;

  constructor(
              // private afAuth: AngularFireAuth,
              private router: Router) { }


  ngOnInit() {

  }
  LogOut() {
    // this.afAuth.auth.signOut();
    this.router.navigate(['/']);
    }
}
