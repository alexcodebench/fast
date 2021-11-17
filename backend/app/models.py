from typing import List, Optional
from pydantic import BaseModel


class ClubMember(BaseModel):
  name: str
  age: Optional[int] = None

class Club(BaseModel):
  club_members: List[ClubMember] = []
  club_name: str
  club_address: str = ''

class FileData(BaseModel):
  clubs: List[Club] = []
