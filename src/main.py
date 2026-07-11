from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Item(BaseModel):
    name: str
    description: str | None = None
    price: float
    tax: float | None = None

@app.get("/")
async def read_root():
    return {"message": "FastAPI Python API"}

@app.post("/items/")
async def create_item(item: Item):
    return {"item_name": item.name, "price": item.price}