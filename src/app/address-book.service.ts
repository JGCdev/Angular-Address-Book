import { Injectable, EventEmitter } from '@angular/core';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class AddressBookService {

  itemList: Item[];
  itemToEdit: Item;
  indexItemToEdit: number;
  changedEditList = new EventEmitter();

  constructor() {

    // Example item
    this.itemList = [
      {
        name: 'Jesús Giménez',
        address: {
          street: 'C/ Eduardo dato 18',
          zipcode: 'ABC22',
          country: 'Spain'
        }
      }
    ];
    
  }

  getItemList(): Item[] {
    return this.itemList;
  }

  addToList(item: Item): void {
    this.itemList.push(item);
  }

  setItemToEdit(item: Item, index: number): void {
    this.itemToEdit = item;
    this.indexItemToEdit = index;
    this.changedEditList.emit(true);
  }

  updateItem(editedItem: Item, index: number) {
    this.itemList[index] = editedItem;
  }
}
