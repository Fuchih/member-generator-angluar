import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newMemberName: string = ''
  numberOfTeams: number | '' = ''
  members: string[] = []
  errorMessage = ''

  onInput(member: string) {
    this.newMemberName = member
  }

  onNumberOfTeamsInput(value: string) {
    this.numberOfTeams = Number(value)
  }

  addMember() {
    if (!this.newMemberName) {
      this.errorMessage = 'Name can not be empty'
      return
    }

    this.members.push(this.newMemberName)
    this.newMemberName = ''
    this.errorMessage = ''
  }
}
