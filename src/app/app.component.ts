import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  // title = 'MyProject';
  private defaultTitle = '.Shop';

  constructor(private router: Router, private titleService: Title) {}
  ngOnInit() {
    this.titleService.setTitle(this.defaultTitle);

    this.router.events.pipe().subscribe(() => {
      const currentRoute = this.router.routerState.snapshot.root.firstChild;
      if (currentRoute?.data['title']) {
        this.titleService.setTitle(currentRoute.data['title']);
      } else {
        this.titleService.setTitle(this.defaultTitle);
      }
    });
  }
}
