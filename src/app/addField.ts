import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

export class AddFields {

    constructor(private fb: FormBuilder, private form: FormGroup ) {}

    initItemRows(): FormGroup {
        return this.fb.group({
            item: [''] // add more components
        });
    }

    // add new item in array
    addItems(): void {
        const control = <FormArray>this.form.controls['itemRows'];
        control.push(this.initItemRows());
    }

    // remove controls form array
    removeItems(index: number): void {
        const control = <FormArray>this.form.controls['itemRows'];
        control.removeAt(index);
    }

    createForm() {
        return this.form = new FormGroup({
            email: new FormControl(),
            itemRows: this.fb.array([this.initItemRows()])
        });
    }

}
