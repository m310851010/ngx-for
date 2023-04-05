<h1 align="center">ngx-for</h1>

<p align="center">和ngFor指令用法类似,同时支持多种数据结构,比如: Map,key/value,Iterable</p>

<p align="center">
  <a aria-label="build status" href="https://npmjs.com/package/@xmagic/ngx-for">
    <img alt="" src="https://img.shields.io/npm/v/@xmagic/ngx-for/latest.svg">
  </a>
  <a aria-label="last commit" href="https://www.github.com/angular/angular">
    <img alt="" src="https://img.shields.io/badge/Build%20with-Angular%20CLI-red?logo=angular">
  </a>

  <a aria-label="license" href="https://m310851010.github.io/ngx-for/LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="">
  </a>
</p>

## Demo

[Live Demo](https://m310851010.github.io/ngx-for)

## Usage

### 1. Install

```
npm install @xmagic/ngx-for --save
```

import `NgxForModule`。

```typescript
import { NgxForModule } from '@xmagic/ngx-for';

@NgModule({
    imports: [ BrowserModule, NgxForModule ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

### 2. Template and component

```html
<ul>
    <li *ngx-for="let value of myObject; index as index; key as key">
        {{ index }}. {{ key }}: {{ value }}
    </li>

    <li *ngx-for="let value of myList; index as index; key as key">
        {{ index }}. {{ key }}: {{ value }}
    </li>

    <li *ngxFor="let value of myObject; index as index; key as key">
        {{ index }}. {{ key }}: {{ value }}
    </li>

    <li *ngxFor="let value of myList; index as index; key as key">
        {{ index }}. {{ key }}: {{ value }}
    </li>
</ul>
```

```ts
import { Component } from '@angular/core';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    myObject = {
        name1: '张三',
        name2: '李四',
        name3: '王五'
    };

    myList = ['张三', '李四', '王五']
}
```

## API

完整参数请参见 [链接](https://angular.io/api/common/NgFor)

### Inputs
| 属性               | 类型                                                  | 说明                                                                                                                                                                                  |
|------------------|-----------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `ngxForOf`       | ngxForOf: NgIterable \| {[key: string]: any} \| Map | 对象或可迭代表达式的值，可以将其用作模板输入变量。                                                                                                                                                           |
| `ngx-forOf`      | ngxForOf: NgIterable \| {[key: string]: any} \| Map | 对象或可迭代表达式的值，可以将其用作模板输入变量。                                                                                                                                                           |
| `ngxForTrackBy`  | TrackByFunction\<T\>                                | 指定自定义 TrackByFunction 来计算 iterable 中条目的标识。 值是对象此参数无效。<br/><br/>如果未提供自定义 TrackByFunction ，NgxForOf 将使用条目的对象标识作为键。 参见: [TrackByFunction](https://angular.io/api/core/TrackByFunction) |
| `ngxForTemplate` | TemplateRef\<NgxForContext\>                        | 此模板引用用来为 iterable 中的生成每个条目。 参见: [模板引用变量](https://angular.io/guide/template-reference-variables)                                                                                     |

## 说明
`ngxForOf` 指令通常在 `*ngxFor` 的简写形式内部使用。在这种形式下，每次迭代要渲染的模板是包含指令的锚点元素的内容。

`<li>` 元素中包含一些选项的简写语法。

```html
<li *ngxFor="let item of items; index as i; trackBy: trackByFn">...</li>
```

简写形式会扩展为使用 `<ng-template>` 元素 `ngxForOf` 选择器的长形式。`<ng-template>` 元素的内容是包裹此简写格式指令的 `<li>` 元素。

这是简写形式示例的扩展版本。
```html
<ng-template ngxFor let-item [ngxForOf]="items" let-i="index" [ngxForTrackBy]="trackByFn">
  <li>...</li>
</ng-template>
```


`ngxFor` 有两种书写形式:

- `*ngxFor`
- `*ngx-for`

例如

```html
<li *ngx-for="let item of items; index as i; trackBy: trackByFn">...</li>
```

Angular 在编译模板时会自动扩展简写语法。每个嵌入式视图的上下文都会根据其词法位置在逻辑上合并到当前组件上下文。

使用简写语法时，Angular 在一个元素上只允许有一个结构型指令。比如，如果要根据条件进行迭代，请将 `*ngIf` 放在 `*ngxFor` 元素的容器元素上。欲知详情，请参见[《结构型指令》](https://angular.io/guide/structural-directives#one-per-element) 。

### 局部变量
`NgxForOf` 可以为所提供的导出值指定一个局部变量别名。比如：
```html
<li *ngxFor="let user of users; index as i; first as isFirst; count as c">
    {{i}}/{{c}}. {{user}} <span *ngIf="isFirst">default</span>
</li>
```

`NgxForOf` 导出了一系列值，可以指定别名后作为局部变量使用：

`$implicit: T`：迭代目标（绑定到 `ngxForOf`）中每个条目的值。

`ngxForOf: NgxIterable<T>`：迭代表达式的值。当表达式不局限于访问某个属性时，这会非常有用，比如在使用 `async` 管道时（userStreams | async）。

`index: number`：可迭代对象中当前条目的索引。

`count: number`：可迭代对象的长度。

`first: boolean`：如果当前条目是可迭代对象中的第一个条目则为 `true`。

`last: boolean`：如果当前条目是可迭代对象中的最后一个条目则为 `true`。

`even: boolean`：如果当前条目在可迭代对象中的索引号为偶数则为 `true`。

`odd: boolean`：如果当前条目在可迭代对象中的索引号为奇数则为 `true`。

**`key: string`：如果遍历的是 `key/value` 或 `Map` 对象, `key`为对象的属性名称；如果是迭代对象,`key`为当前条目的索引，此时`key`仍是`string`类型。**


### License

The MIT License (see the [LICENSE](https://github.com/m310851010/ngx-for/blob/master/LICENSE) file for the full text)
