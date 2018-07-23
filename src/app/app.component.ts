import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AddFields } from './addField';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  form: FormGroup;

  private addFields = new AddFields(this.fb, this.form);

  constructor(private fb: FormBuilder) {}

  addItems(): void {
    this.addFields.addItems();
  }

  removeItems(index): void {
    this.addFields.removeItems(index);
  }

  submitForm(form: FormGroup) {
    console.dir(form);
  }
  ngOnInit() {
    this.form = this.addFields.createForm();
  }
}
