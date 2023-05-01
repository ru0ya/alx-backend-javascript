/// <reference path ="./crud.d.ts"/>
import {rowID, rowElement} from './interface.ts'
import * from './crud.js' as CRUD

let row: RowElement = {
	firstName: "Guillaume";
	lastName: "Salva";
}

const newRowID: RowID = insertRow();
const updatedRow: RowElement = {
	...row,
	age: 23;
};

updateRow();
deleteRow();
