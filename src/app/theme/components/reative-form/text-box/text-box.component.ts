import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  FormGroup,
  NG_VALUE_ACCESSOR,
  FormControl,
  FormControlDirective,
  ControlContainer,
  ControlValueAccessor,
} from '@angular/forms';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: TextBoxComponent,
      multi: true,
    },
  ],
})
export class TextBoxComponent implements ControlValueAccessor {
  @Input() label!: string;
  @Input() formControl!: FormControl;
  @Input() formControlName!: string;
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
    this.formControlDirective.valueAccessor?.registerOnTouched(fn);
  }

  registerOnChange(fn: any): void {
    this.formControlDirective.valueAccessor?.registerOnChange(fn);
  }

  writeValue(obj: any): void {
    this.formControlDirective.valueAccessor?.writeValue(obj);
  }
}
