import { Component, OnInit } from '@angular/core';
import { ClubService } from '@app/services/club.service';
import { Club, ClubMemberVM, ClubVM } from '@app/shared/club-models';
@Component({
  selector: 'app-members-table',
  templateUrl: './members-table.component.html',
  styleUrls: ['./members-table.component.css'],
})
export class MembersTableComponent implements OnInit {
  clubs: ClubVM[] = [];

  i = 0;
  editId: string | null = null;

  compareFuncs = {
    compareClubName: (a: ClubVM, b: ClubVM) =>
      a.club_name.localeCompare(b.club_name),
    compareClubAddress: (a: ClubVM, b: ClubVM) =>
      a.club_address.localeCompare(b.club_address),
    compareClubSize: (a: ClubVM, b: ClubVM) =>
      a.club_members.length - b.club_members.length,
    compareMemberName: (a: ClubMemberVM, b: ClubMemberVM) =>
      a.name.localeCompare(b.name),
    compareMemberAge: (a: ClubMemberVM, b: ClubMemberVM) =>
      a.age - b.age,
  };

  constructor(private clubService: ClubService) {}

  save(): void {}

  // startEdit(event: any): void {
  //   console.log(event);
  // }

  // stopEdit(): void {
  //   this.editId = null;
  // }

  // addRow(): void {
  //   // this.listOfData = [
  //   //   ...this.listOfData,
  //   //   {
  //   //     id: `${this.i}`,
  //   //     name: `Edward King ${this.i}`,
  //   //     age: '32',
  //   //     address: `London, Park Lane no. ${this.i}`
  //   //   }
  //   // ];
  //   // this.i++;
  // }

  // deleteRow(id: string): void {
  //   // this.clubs = this.clubs.filter(d as Club => d.!== id);
  // }

  ngOnInit(): void {
    this.clubService.getClubs().subscribe((data) => {
      this.clubs = data.clubs.map((c: Club) => new ClubVM(c));
    });
  }
}
