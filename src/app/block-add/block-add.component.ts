import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Item } from '../item';
import { AddressBookService } from '../address-book.service';

@Component({
  selector: 'app-block-add',
  templateUrl: './block-add.component.html',
  styleUrls: ['./block-add.component.scss']
})
export class BlockAddComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private abs: AddressBookService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      street: ['', Validators.required],
      zipcode: ['', [Validators.required, Validators.maxLength(5), Validators.pattern('^ABC.*$')]], 
      country: ['', Validators.required]
    });
  }

  onSubmit(): void {
    
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // create Item from form
    let item: Item = {
      name: this.registerForm.value.name,
      address: {
        street: this.registerForm.value.street,
        zipcode: this.registerForm.value.zipcode,
        country: this.registerForm.value.country
      }
    }

    // add item to items list
    this.abs.addToList(item);
  }
  
  // Getter to access form fields
  get f() { return this.registerForm.controls; }
}
