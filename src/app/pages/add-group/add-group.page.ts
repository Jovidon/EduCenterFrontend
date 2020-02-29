import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'add-group',
  templateUrl: './add-group.page.html',
  styleUrls: ['./add-group.page.scss'],
})
export class AddGroupPage implements OnInit {
 public form = [
      { val: 'Dushanba', isChecked: false },
      { val: 'Seshanba', isChecked: false },
      { val: 'Chorshanba', isChecked: false },
      { val: 'Payshanba', isChecked: false },
      { val: 'Juma', isChecked: false },
      { val: 'Shanba', isChecked: false },
      { val: 'Yakshanba', isChecked: false }
    ];
  constructor() { }

  ngOnInit() {
  }

}

