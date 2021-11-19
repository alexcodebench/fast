from typing import List
import json
import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.encoders import jsonable_encoder
from starlette.requests import Request

from .models import Club, FileData


# origins = [
#     "http://localhost",
#     "http://localhost:4200",
#     "https://fastclub.peekapage.com"
# ]

parent_dir_path = os.path.dirname(os.path.realpath(__file__))
DATA_FILE_PATE = os.path.join(parent_dir_path, "data/data.json")

app = FastAPI()

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=origins,
#     allow_origin_regex='https://.*\.peekapage\.com',
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
#     expose_headers=["*"]
# )


def read_data(file_path: str) -> FileData:
    file_data: FileData
    with open(file_path, 'r') as f:
        file_data = json.load(f)
    return file_data


def write_data(file_path: str, file_data: FileData):
    with open(file_path, 'w') as f:
        json_compatible_item_data = jsonable_encoder(file_data, )
        json.dump(json_compatible_item_data, f, indent=4, sort_keys=True)

# @app.get("/cors/")
# def get_cors() -> List[str]:
#     return origins

@app.get("/clubs/")
def get_clubs(request: Request) -> List[Club]:
    print('========')
    print(request.headers)
    print('========')
    clubs = read_data(DATA_FILE_PATE)
    return clubs


@app.post("/clubs/")
def post_clubs(file_data: FileData) -> List[Club]:
    print(file_data)
    write_data(DATA_FILE_PATE, file_data)
    return file_data


# @app.get("/items/{item_id}")
# def read_item(item_id: int, q: Optional[str] = None):
#     return {"item_id": item_id, "q": q}
