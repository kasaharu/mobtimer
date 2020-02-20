import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MembersComponent implements OnInit {
  constructor() {}
  newMember = new FormGroup({
    name: new FormControl(''),
  });

  @Input() members: string[] = [];

  ngOnInit(): void {}
  clickAddButton() {
    console.log('click add button');
  }
}
