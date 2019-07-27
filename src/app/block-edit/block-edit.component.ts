import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Item } from '../item';
import { AddressBookService } from '../address-book.service';

@Component({
  selector: 'app-block-edit',
  templateUrl: './block-edit.component.html',
  styleUrls: ['./block-edit.component.scss']
})
export class BlockEditComponent implements OnInit {
  
  editForm: FormGroup;
  item: Item;

  constructor(private formBuilder: FormBuilder, private abs: AddressBookService) { 

    this.editForm = this.formBuilder.group({
      name: ['', Validators.required],
      street: ['', Validators.required],
      zipcode: ['', [Validators.required, Validators.maxLength(5), Validators.pattern('^ABC.*$')]], 
      country: ['', Validators.required]
    });

    // Listen for changes to reload form inputs prefilled
    this.abs.changedEditList.subscribe( () => {
      this.ngOnInit();
    }),
    err => {
      console.log("Error");
    } 

  }

  ngOnInit() {

    // Init component with form prefilled
    this.item = this.abs.itemToEdit;
    this.editForm.get('name').setValue(this.item.name);
    this.editForm.get('street').setValue(this.item.address.street);
    this.editForm.get('zipcode').setValue(this.item.address.zipcode);
    this.editForm.get('country').setValue(this.item.address.country);

  }

  onSubmit(): void {

    // stop here if form is invalid
    if (this.editForm.invalid) {
      return;
    }

    // create Item from form
    let editedItem: Item = {
      name: this.editForm.value.name,
      address: {
        street: this.editForm.value.street,
        zipcode: this.editForm.value.zipcode,
        country: this.editForm.value.country
      }
    }

    // Update edited item on list
    this.abs.updateItem(editedItem, this.abs.indexItemToEdit);
  }
  
  // Getter to access form fields
  get f() { return this.editForm.controls; }
}
