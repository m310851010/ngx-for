import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  link = 'https://github.com/m310851010/ngx-for';
  title = 'ngx-for-demo';
  myList: string[] = ['张三', '李四', '王五'];
  ngxForText = JSON.stringify(this.myList);
  ngxForMessage = '';

  myObject: Record<string, string> = {
    zhangsan: '张三',
    lisi: '李四',
    wangwu: '王五'
  };
  ngxForObjectText = JSON.stringify(this.myObject, null, 1);
  ngxForObjectMessage = '';

  myMap = new Map<string, string>([
    ['zhangsan', '张三'],
    ['lisi', '李四'],
    ['wangwu', '王五']
  ]);
  ngxForMapText = JSON.stringify(
    Array.from(this.myMap.entries()).reduce((prev, [key, value]) => {
      prev[key] = value;
      return prev;
    }, {}),
    null,
    1
  );
  ngxForMapMessage = '';

  constructor() {}

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

  onNgxForMapTextChange(text: string) {
    this.ngxForMapMessage = '';
    try {
      this.myMap.clear();
      const kv = JSON.parse(text);
      for (const key in kv) {
        this.myMap.set(key, kv[key]);
      }
    } catch (e) {
      this.ngxForMapMessage = e.message;
    }
  }
}
