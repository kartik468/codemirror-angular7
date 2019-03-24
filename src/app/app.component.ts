import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren, AfterContentInit } from '@angular/core';
import { CodemirrorComponent } from '@ctrl/ngx-codemirror';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, AfterContentInit {

  content = `select firstname
from Patient`;

content1 = 'var a = 3;';

  @ViewChildren(CodemirrorComponent) codemirrorComponent: CodemirrorComponent[];

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    // console.log(this.codemirrorComponent);
    this.codemirrorComponent.forEach(a => console.log(a.codeMirror));
  }

  ngAfterContentInit() {

  }
}
