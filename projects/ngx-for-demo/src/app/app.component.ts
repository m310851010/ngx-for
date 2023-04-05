import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  link = 'https://github.com/m310851010/ngx-for';
  title = 'ngx-for-demo';
  myList: string[] = [];
  ngxForText = `["张三", "李四", "王五"]`;
  ngxForMessage = '';

  myObject: string[] = [];
  ngxForObjectText = `{
   "zhangsan": "张三",
   "lisi": "李四",
   "wangwu": "王五"
}`;
  ngxForObjectMessage = '';

  constructor() {
    this.onNgxForTextChange(this.ngxForText);
    this.onNgxForObjectTextChange(this.ngxForObjectText);
  }

  onNgxForTextChange(text: string) {
    this.ngxForMessage = '';
    try {
      this.myList = JSON.parse(text);
    } catch (e) {
      this.ngxForMessage = e.message;
    }
  }

  onNgxForObjectTextChange(text: string) {
    this.ngxForObjectMessage = '';
    try {
      this.myObject = JSON.parse(text);
    } catch (e) {
      this.ngxForObjectMessage = e.message;
    }
  }
}
