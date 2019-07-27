import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Item } from '../item';
import { AddressBookService } from '../address-book.service';

@Component({
  selector: 'app-block-list',
  templateUrl: './block-list.component.html',
  styleUrls: ['./block-list.component.scss']
})
export class BlockListComponent implements OnInit {
  
  @Output() changeAdd = new EventEmitter();
  itemList: Item[];

  constructor(private abs: AddressBookService) {
    this.itemList = abs.getItemList();
  }

  ngOnInit() {
  }

  // Toggle Add Item On
  showAddBlock(): void{
    this.changeAdd.emit(true);
  }

  // Toggle Edit Item On
  editAddress(item: Item, index: number): void {
    this.changeAdd.emit(false);
    this.abs.setItemToEdit(item, index);
  }
}
