import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClubsRoutingModule } from './clubs-routing.module';
import { ClubsComponent } from './clubs.component';
import { MembersTableComponent } from './members-table/members-table.component';
import { NzUiModule } from "@app/shared/nz-ui.module";


@NgModule({
  declarations: [
    ClubsComponent,
    MembersTableComponent
  ],
  imports: [
    CommonModule,
    ClubsRoutingModule,
    NzUiModule,
  ],
  exports: [
    MembersTableComponent,
  ]
})
export class ClubsModule { }
