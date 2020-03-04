import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MembersComponent implements OnInit {
  constructor() {}
  @Output()
  addMember = new EventEmitter();
  @Output()
  deleteMember = new EventEmitter();

  newMember = new FormGroup({
    name: new FormControl(''),
  });

  @Input() members: string[] = [];

  ngOnInit(): void {}
  clickAddButton() {
    this.addMember.emit(this.newMember.value.name);
    this.newMember.reset();
  }

  clickDeleteButton(name: string) {
    this.deleteMember.emit(name);
  }
}
