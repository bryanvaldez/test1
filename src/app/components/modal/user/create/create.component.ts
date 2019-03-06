import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { User } from 'src/app/models/user.model';
import { Directive, ElementRef, HostListener } from '@angular/core';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html'
})
export class CreateComponent implements OnInit {
  form: FormGroup;
  user = {
    'SApaterno': '',
    'SAmaterno': '',
    'SNombres': '',
    'SMail': '',
    'SDireccion': '',
    'STmovil': '',
  };
  word = '';

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      sapaterno: ['', Validators.required],
      samaterno: ['', Validators.required],
      snombres: ['', Validators.required],
      smail: ['', [Validators.required, Validators.email]],
      // spwd: ['', [Validators.required, this.forbiddenNameValidator()]],
      spwd: ['', Validators.required ]
    });
  }

  // forbiddenNameValidator(): ValidatorFn {
  //   return (control: AbstractControl): {[key: string]: boolean} | null => {
  //     if (control.value === this.word) {
  //       return {'same': false};
  //     } else {
  //       return {'same': true};
  //     }
  //     return null;
  //   };
  // }

  get f() { return this.form.controls; }

  onNoClick() {
    this.dialogRef.close();
  }

  onSubmit() {
    this.dialogRef.close(this.form.value);
  }
}

// @Directive({
//   selector: '[appUpper]'
// })
// export class UpperDirective {

//   constructor(public ref: ElementRef) { }

//   @HostListener('input', ['$event']) onInput(event) {
//     this.ref.nativeElement.value = event.target.value.toUpperCase();
//   }

// }
