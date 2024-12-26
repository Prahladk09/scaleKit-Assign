import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'assignment';

  data = [
      "dir.group.create",
      "dir.group.delete",
      "dir.group.update",
      "dir.user.create",
      "dir.user.delete",
      "dir.user.update",
      "org.conn.create",
      "org.conn.delete",
      "org.conn.disable",
      "org.conn.enable",
      "org.conn.update",
      "org.create",
      "org.delete",
      "org.update"
    ];

    treeData = this.transformData(this.data);

    ngOnInit() {
      // this.transformData(this.data);
    }

  transformData(data: string[]) {
    const tree: any = {};
  
    data.forEach((path) => {
      const parts = path.split(".");
      let current = tree;
  
      parts.forEach((part, index) => {
        if (!current[part]) {
          current[part] = index === parts.length - 1 ? null : {};
        }
        current = current[part];
      });
    });
  
    return tree;
  }

  
}
