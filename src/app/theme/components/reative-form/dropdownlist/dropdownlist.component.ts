import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ControlContainer, ControlValueAccessor, FormControl, FormControlDirective, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-dropdownlist',
  templateUrl: './dropdownlist.component.html',
  styleUrls: ['./dropdownlist.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: DropdownlistComponent,
      multi: true,
    },
  ],
})
export class DropdownlistComponent implements ControlValueAccessor {
  @Input() label!: string;
  @Input() formControl!: FormControl;
  @Input() formControlName!: string;
  @Input() items: Array<any> = [];
  //
  @ViewChild(FormControlDirective, { static: true })
  formControlDirective!: FormControlDirective;
  private value!: string;
  private disabled!: boolean;
  get control() {
    return (
      this.formControl ||
      this.controlContainer.control?.get(this.formControlName)
    );
  }

  constructor(private controlContainer: ControlContainer) {}

  registerOnTouched(fn: any): void {
    this.formControlDirective?.valueAccessor?.registerOnTouched(fn);
  }

  registerOnChange(fn: any): void {
    this.formControlDirective?.valueAccessor?.registerOnChange(fn);
  }

  writeValue(obj: any): void {
    this.formControlDirective?.valueAccessor?.writeValue(obj);
  }
}
