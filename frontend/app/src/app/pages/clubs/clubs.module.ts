import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClubsRoutingModule } from './clubs-routing.module';
import { ClubsComponent } from './clubs.component';
import { MembersTableComponent } from './members-table/members-table.component';
import { NzUiModule } from "@app/shared/nz-ui.module";
import { ZorroSharperModule } from "zorro-sharper";

@NgModule({
  declarations: [
    ClubsComponent,
    MembersTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ClubsRoutingModule,
    NzUiModule,
    ZorroSharperModule,
  ],
  exports: [
    MembersTableComponent,
  ]
})
export class ClubsModule { }
