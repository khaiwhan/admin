import { Component, OnInit, Inject } from '@angular/core';
import { NbSidebarService, NbMenuService, NB_WINDOW } from '@nebular/theme';
import { MENU_ITEMS } from './pages.menu';
import { AuthenticationService } from '../@service/authentication.service';
import { filter, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  menu = MENU_ITEMS;
  user;
  items = [
    { title: 'Profile' },
    { title: 'Logout' },
  ];
  constructor(
    private sidebarService: NbSidebarService,
    private authService:AuthenticationService,
    private nbMenuService: NbMenuService,
    private route:Router,
    @Inject(NB_WINDOW) private window
  ) { }

  ngOnInit() {
    this.user = this.authService.getActiveUser();
    this.nbMenuService.onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'my-context-menu'),
        map(({ item: { title } }) => title),
      )
      .subscribe(title =>
        //  this.window.alert(`${title} was clicked!`)
        {
          if(title === "Profile")
          {

          }
          else{
            this.authService.clearActiveUser();
            this.route.navigate(["login"])
          }
        }
         );
         if(!this.user){
          this.route.navigate(["login"])
         }
  }
  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }
}
