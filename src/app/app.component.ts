import {Component, ViewChild} from '@angular/core';
import {ColumnMode, SelectionType} from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rows = [
    { 'Username': 'user1', 'Name': 'John Doe', 'Roles & Area': 'Swimlane',
      'Status': 'single', 'Last login': '1 min ago', 'Created by': 'peter_file', 'Modified by': 'Dow Jones',
      suspended: false },
    { 'Username': 'user2', 'Name': 'John Donne', 'Roles & Area': 'Swimlane',
      'Status': 'married', 'Last login': '1 min ago', 'Created by': 'peter_file', 'Modified by': 'John Donne',
      suspended: false},
    { 'Username': 'user3', 'Name': 'Dow Jones', 'Roles & Area': 'Swimlane',
      'Status': 'index', 'Last login': '1 min ago', 'Created by': 'peter_file', 'Modified by': 'John Doe',
      suspended: false}
  ];
  columns = [{ prop: 'Username' }, { prop: 'Name' }, { prop: 'Roles & Area' }
  , {prop: 'Status'}, {prop:'Last login'}, {prop: 'Created by'}, {prop: 'Modified by'}];

  SelectionType = SelectionType;

  getRowClass = (row) => {
    return {
      'row-class-suspended': row.suspended == true,
    };
  }

  deleteUser(i) {
    this.rows.splice(i,1);
    this.rows = [...this.rows];
  }
  suspendUser(i){
    this.rows[i].suspended = !this.rows[i].suspended;
  }
}
