from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allows your React frontend on port 5173 to call this backend.
# Without this, browsers block requests between different ports.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# A GET endpoint at /hello. When called, it returns a JSON response.
# This is equivalent to a [HttpGet] controller action in C#.
@app.get("/hello")
def hello():
    return {"message": "Backend is working!"}