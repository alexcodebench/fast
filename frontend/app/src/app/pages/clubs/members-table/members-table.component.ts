import { Component, OnInit } from '@angular/core';
import { ClubService } from '@app/services/club.service';
import {
  Club,
  ClubFileData,
  ClubMemberVM,
  ClubVM,
} from '@app/shared/club-models';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'app-members-table',
  templateUrl: './members-table.component.html',
  styleUrls: ['./members-table.component.css'],
})
export class MembersTableComponent implements OnInit {
  clubs: ClubVM[] = [];
  isLoading = false;

  tableEdited = false;
  compareFuncs = {
    compareClubName: (a: ClubVM, b: ClubVM) =>
      a.club_name.localeCompare(b.club_name),
    compareClubAddress: (a: ClubVM, b: ClubVM) =>
      a.club_address.localeCompare(b.club_address),
    compareClubSize: (a: ClubVM, b: ClubVM) =>
      a.club_members.length - b.club_members.length,
    compareMemberName: (a: ClubMemberVM, b: ClubMemberVM) =>
      a.name.localeCompare(b.name),
    compareMemberAge: (a: ClubMemberVM, b: ClubMemberVM) => a.age - b.age,
  };

  constructor(
    private clubService: ClubService,
    private message: NzMessageService
  ) {}

  save(): void {
    this.clubService
      .saveClubs({ clubs: this.clubs.map((c) => c.toDomainModel()) })
      .subscribe(
        (returnedValue: ClubFileData) => {
          this.message.create('success', 'Club data successfully updated');
          this.tableEdited = false;
          // console.log(returnedValue);
        },
        (error: any) => {
          this.message.create(
            'error',
            'There was some errors saving the changes'
          );
          console.error(error);
        }
      );
  }


  reload(): void {
    this.loadData();
    this.tableEdited = false;
  }

  onTableEdited(_): void {
    this.tableEdited = true;
    console.log(_);
  }

  private loadData(){
    this.isLoading = true;
    this.clubService.getClubs().subscribe(
      (data) => {
        this.clubs = data.clubs.map((c: Club) => new ClubVM(c));
        this.isLoading = false;
      },

      (error: any) => {
        this.message.create(
          'error',
          'Failed to retrieve club information'
        );
        console.error(error);
        this.isLoading = false;
      }
    );
  }

  ngOnInit(): void {
    this.loadData();
  }
}
