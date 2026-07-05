"""
config.py

Central configuration file for the MindAnchor AI Wellness Companion.
All configurable values should be defined here.
"""

import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# ==========================================================
# LiveKit Configuration
# ==========================================================

LIVEKIT_URL = os.getenv("LIVEKIT_URL")
LIVEKIT_API_KEY = os.getenv("LIVEKIT_API_KEY")
LIVEKIT_API_SECRET = os.getenv("LIVEKIT_API_SECRET")

# ==========================================================
# Ollama Configuration
# ==========================================================

# OLLAMA_BASE_URL = os.getenv(
#     "OLLAMA_BASE_URL",
#     "http://localhost:11434/v1",
# )

# LLM_MODEL = os.getenv(
#     "LLM_MODEL",
#     "qwen2.5:1.5b",
# )

# LLM_TEMPERATURE = float(
#     os.getenv("LLM_TEMPERATURE", "0.7")
# )

# ==========================================================
# Deepgram Configuration
# ==========================================================

DEEPGRAM_API_KEY = os.getenv("DEEPGRAM_API_KEY")

STT_MODEL = os.getenv(
    "STT_MODEL",
    "nova-3"
)

# ==========================================================
# ElevenLabs Configuration
# ==========================================================

ELEVENLABS_API_KEY = os.getenv("ELEVENLABS_API_KEY")

ELEVENLABS_VOICE_ID = os.getenv(
    "ELEVENLABS_VOICE_ID",
    "hpp4J3VqNfWAUOO0d1Us"
)

# ==========================================================
# Assistant Configuration
# ==========================================================

ASSISTANT_NAME = "MindAnchor"

GREETING = (
    "Hello! I'm MindAnchor, your wellness companion. "
    "How are you feeling today?"
)

MAX_RESPONSE_SENTENCES = 3

# ==========================================================
# Configuration Validation
# ==========================================================

if not LIVEKIT_URL:
    raise ValueError("LIVEKIT_URL is not configured.")

if not LIVEKIT_API_KEY:
    raise ValueError("LIVEKIT_API_KEY is not configured.")

if not LIVEKIT_API_SECRET:
    raise ValueError("LIVEKIT_API_SECRET is not configured.")

if not DEEPGRAM_API_KEY:
    raise ValueError("DEEPGRAM_API_KEY is not configured.")

if not ELEVENLABS_API_KEY:
    raise ValueError("ELEVENLABS_API_KEY is not configured.")


# ==========================================================
# Gemini Configuration
# ==========================================================

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

LLM_MODEL = os.getenv(
    "LLM_MODEL",
    "gemini-2.5-flash",
)