export interface ClubMember {
  name: string;
  age: number;
}

export interface Club {
  club_embers: ClubMember[];
  club_name: string;
  club_address: string;
  expand: boolean;
}

export interface ClubFileData {
  clubs: Club[];
}


