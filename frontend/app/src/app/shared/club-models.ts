// Domain models
export interface ClubMember {
  name: string;
  age: number;
}

export interface Club {
  club_members: ClubMember[];
  club_name: string;
  club_address: string;
}

export interface ClubFileData {
  clubs: Club[];
}

// View models
export class ClubMemberVM {
  isEditing: boolean = false;
  isToDelete: boolean = false;

  name: string = '';
  age: number = NaN;

  constructor(domainModel: ClubMember) {
    this.age = domainModel.age;
    this.name = domainModel.name;
  }

  toDomainModel(): ClubMember {
    var domainModel: ClubMember = { name: this.name, age: this.age };
    return domainModel;
  }
}

export class ClubVM {
  isEditing: boolean = false;
  isToDelete: boolean = false;
  expand: boolean = false;

  club_members: ClubMemberVM[] = [];
  club_name: string = '';
  club_address: string = '';

  constructor(domainModel: Club) {
    this.club_members = [...domainModel.club_members].map(
      (cm) => new ClubMemberVM(cm)
    );
    this.club_name = domainModel.club_name;
    this.club_address = domainModel.club_address;
  }

  toDomainModel(): Club {
    var domainModel: Club = {
      club_name: this.club_name,
      club_address: this.club_address,
      club_members: this.club_members,
    };
    return domainModel;
  }
}
