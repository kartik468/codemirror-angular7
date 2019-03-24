import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren, AfterContentInit } from '@angular/core';
import { CodemirrorComponent } from '@ctrl/ngx-codemirror';

import * as CodeMirror from 'codemirror/lib/codemirror';
// import * as CodeMirror from 'codemirror/addon/hint/sql-hint';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, AfterContentInit {

  content = `select firstname
from Patient`;

content1 = 'var a = 3;';

  options1: any;

  @ViewChildren(CodemirrorComponent) codemirrorComponent: CodemirrorComponent[];

  ngOnInit(): void {
    this.options1 = {
      lineNumbers: true,
      theme: 'material',
      mode: 'sql',
      extraKeys: {'Ctrl-Space': 'autocomplete'},
      hint: CodeMirror.hint.sql,
      hintOptions: {
        tables: {
          table1: [ 'col_A', 'col_B', 'col_C' ],
          table2: [ 'other_columns1', 'other_columns2' ]
        }
      }
    };
  }

  ngAfterViewInit(): void {
    // console.log(this.codemirrorComponent);
    this.codemirrorComponent.forEach((a: any) => console.log(a.codeMirror.options));


    const editor = CodeMirror(document.getElementById('codeeditor'), {
      value: '',
      mode: 'sql',
      theme: 'material',
      tabSize: 5,
      lineNumbers: true,
      // firstLineNumber: 50,
      extraKeys: {'Ctrl-Space': 'autocomplete'},
      hint: CodeMirror.hint.sql,
          hintOptions: {
              tables: {
                  table1: [ 'col_A', 'col_B', 'col_C' ],
                  table2: [ 'other_columns1', 'other_columns2' ]
              }
          }
    });
  }

  ngAfterContentInit() {

  }
}
