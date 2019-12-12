import { Component, OnInit } from '@angular/core';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
    public tableData1: TableData;
    public tableData2: TableData;

  constructor() { }

  ngOnInit() {
      this.tableData1 = {
          headerRow: [ 'ID', 'Producto', 'Cantidad', 'Descripción', 'Total'],
          dataRows: [
              ['1', 'Camiseta 1', '10', 'Camiseta estampada', '$300,738'],
              ['2', 'Camiseta 2', '11', 'Camiseta estampada', '$230,789'],
              ['3', 'Camiseta 3', '12', 'Camiseta estampada', '$560,142'],
              ['4', 'Buso 1', '13', 'Buso estampada', '$380,735'],
              ['5', 'Buso 2', '14', 'Buso estampada', '$603,542'],
              ['6', 'Buso 3', '15', 'Buso estampada', '$708,615']
          ]
      };
      this.tableData2 = {
          headerRow: [ 'ID', 'Name',  'Salary', 'Country', 'City' ],
          dataRows: [
              ['1', 'Dakota Rice','$300,738', 'Niger', 'Oud-Turnhout' ],
              ['2', 'Minerva Hooper', '$23,789', 'Curaçao', 'Sinaai-Waas'],
              ['3', 'Sage Rodriguez', '$56,142', 'Netherlands', 'Baileux' ],
              ['4', 'Philip Chaney', '$38,735', 'Korea, South', 'Overland Park' ],
              ['5', 'Doris Greene', '$63,542', 'Malawi', 'Feldkirchen in Kärnten', ],
              ['6', 'Mason Porter', '$78,615', 'Chile', 'Gloucester' ]
          ]
      };
  }

}
