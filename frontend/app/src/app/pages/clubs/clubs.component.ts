import { Component, OnInit } from '@angular/core';
import { ClubService } from '@app/services/club.service';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.scss']
})
export class ClubsComponent implements OnInit {

  constructor(private clubService: ClubService) { }

  ngOnInit(): void {
    // this.clubService.getClubs().subscribe(obj => console.log(obj));
  }

}
