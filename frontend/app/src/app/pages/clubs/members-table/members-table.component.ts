import { Component, OnInit } from '@angular/core';
import { ClubService } from '@app/services/club.service';
import { Club } from "@app/shared/club-models";

interface ParentItemData {
  key: number;
  name: string;
  platform: string;
  version: string;
  upgradeNum: number | string;
  creator: string;
  createdAt: string;
  expand: boolean;
}

interface ChildrenItemData {
  key: number;
  name: string;
  date: string;
  upgradeNum: string;
}

@Component({
  selector: 'app-members-table',
  templateUrl: './members-table.component.html'
})
export class MembersTableComponent implements OnInit {
  // listOfParentData: ParentItemData[] = [];
  // listOfChildrenData: ChildrenItemData[] = [];

  constructor(private clubService: ClubService) {}

  clubFileData: any;

  ngOnInit(): void {

    this.clubService.getClubs().subscribe(
          obj => {
            console.log(obj);
            this.clubFileData = obj;
            this.clubFileData = this.clubFileData.clubs.map((c: Club) => ({...c, expand:false}));
            console.log(this.clubFileData);
        });


    // for (let i = 0; i < 3; ++i) {
    //   this.listOfParentData.push({
    //     key: i,
    //     name: 'Screem',
    //     platform: 'iOS',
    //     version: '10.3.4.5654',
    //     upgradeNum: 500,
    //     creator: 'Jack',
    //     createdAt: '2014-12-24 23:12:00',
    //     expand: false
    //   });
    // }
    // for (let i = 0; i < 3; ++i) {
    //   this.listOfChildrenData.push({
    //     key: i,
    //     date: '2014-12-24 23:12:00',
    //     name: 'This is production name',
    //     upgradeNum: 'Upgraded: 56'
    //   });
    // }
  }
}
