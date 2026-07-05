"""
token_server.py

Generates LiveKit access tokens for the frontend.

Run:
    uvicorn token_server:app --reload

Test:
    http://127.0.0.1:8000/token?identity=pritha&room=mindanchor
"""

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from livekit import api

from config import (
    LIVEKIT_API_KEY,
    LIVEKIT_API_SECRET,
    LIVEKIT_URL,
)

app = FastAPI(title="MindAnchor Token Server")

# ---------------------------------------------------------
# Enable CORS
# ---------------------------------------------------------

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Restrict this in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------------------------------------------------------
# Health Check
# ---------------------------------------------------------

@app.get("/")
async def root():
    return {
        "status": "running",
        "service": "MindAnchor Token Server"
    }

# ---------------------------------------------------------
# Generate LiveKit Token
# ---------------------------------------------------------

@app.get("/token")
async def generate_token(
    identity: str,
    room: str,
):
    """
    Generate a LiveKit access token.

    Example:
    /token?identity=pritha&room=mindanchor
    """

    if not identity.strip():
        raise HTTPException(
            status_code=400,
            detail="Identity cannot be empty."
        )

    if not room.strip():
        raise HTTPException(
            status_code=400,
            detail="Room name cannot be empty."
        )

    token = (
        api.AccessToken(
            LIVEKIT_API_KEY,
            LIVEKIT_API_SECRET,
        )
        .with_identity(identity)
        .with_name(identity)
        .with_grants(
            api.VideoGrants(
                room_join=True,
                room=room,
            )
        )
        .to_jwt()
    )

    return {
        "token": token,
        "url": LIVEKIT_URL,
        "room": room,
        "identity": identity,
    }