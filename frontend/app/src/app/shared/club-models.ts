interface ClubMember {
  name: string;
  age: number;
}

interface Club {
  clubMembers: ClubMember[];
  clubName: string;
  clubAddress: string;
}

interface DataFile {
  clubs: Club[];
}


