import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
})
export class MembersComponent implements OnInit {
  @Input() members: string[] = []

  constructor() {}

  ngOnInit(): void {}
}
