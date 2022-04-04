import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { forbiddenNameValidator } from 'src/app/theme/directives';
import moment from 'moment';

@Component({
  selector: 'app-first-form',
  templateUrl: './first-form.component.html',
  styleUrls: ['./first-form.component.scss']
})
export class FirstFormComponent implements OnInit, OnDestroy {
  heroForm!: FormGroup;
  hero = { name: 'Dr.', date: new Date(), dropdown: 'Two' };
  items = ['One', 'Two', 'Three', 'Four', 'Five']
  private $subscription = new Subscription();
  constructor() { }

  ngOnInit(): void {
    this.heroForm = new FormGroup({
      name: new FormControl(this.hero.name, [
        Validators.required,
        Validators.minLength(4),
        forbiddenNameValidator(/bob/i)
      ]),
      date: new FormControl(moment(this.hero.date).format('yyyy-MM-DD')),
      dropdown: new FormControl('Two')
    }); // <-- add custom validator at the FormGroup level

    this.$subscription.add(this.heroForm.valueChanges.subscribe(data => {
      console.log(data);
    }))
  }

  ngOnDestroy(): void {
    if (!!this.$subscription){
      this.$subscription.unsubscribe();
    }
  }
}
