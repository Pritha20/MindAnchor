# 🧠 MindAnchor
### AI-Powered Real-Time Voice Wellness Companion

<p align="center">

![Python](https://img.shields.io/badge/Python-3.11-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-Backend-green)
![LiveKit](https://img.shields.io/badge/LiveKit-RealTime-orange)
![Gemini](https://img.shields.io/badge/Gemini-LLM-red)
![Deepgram](https://img.shields.io/badge/Deepgram-STT-teal)
![ElevenLabs](https://img.shields.io/badge/ElevenLabs-TTS-purple)
![License](https://img.shields.io/badge/License-MIT-yellow)

</p>

---

# Overview

MindAnchor is a production-style AI voice companion that enables natural, low-latency spoken conversations for emotional wellness and guided mindfulness.

Unlike traditional chatbots, MindAnchor supports real-time bidirectional voice interaction by orchestrating Speech-to-Text, Large Language Models, and Text-to-Speech over LiveKit's real-time communication infrastructure.

The project demonstrates the architecture of modern conversational AI systems while emphasizing modularity, streaming communication, and production-ready engineering practices.

---

# ⭐ STAR Method

## Situation

Mental wellness applications often rely on text-based conversations that interrupt natural communication and reduce user engagement.

A voice-first AI companion requires simultaneously solving several engineering challenges:

- Real-time audio streaming
- Low-latency speech recognition
- Context-aware LLM reasoning
- Natural speech synthesis
- Secure authentication
- Event-driven communication

---

## Task

Design and implement an end-to-end production-grade AI voice assistant capable of

- Real-time voice conversations
- Emotional wellness guidance
- Guided breathing exercises
- Reflective journaling prompts
- Grounding techniques
- Mood check-ins
- Crisis-aware conversations

while maintaining modularity, scalability, and clean software architecture.

---

## Action

Built a complete real-time conversational pipeline integrating multiple AI services.

### Frontend

- Vanilla JavaScript
- Responsive modern UI
- Animated conversational orb
- Live connection status
- Microphone controls
- LiveKit Browser SDK

### Backend

- Python
- FastAPI
- LiveKit Agents SDK
- Secure JWT Token Server

### AI Pipeline

Speech

```
User
    ↓
Deepgram STT
```

Reasoning

```
Gemini LLM
```

Voice

```
ElevenLabs TTS
```

Communication

```
LiveKit Cloud
```

---

## Result

Successfully developed a fully functional AI voice companion capable of

✔ Real-time conversations

✔ Streaming audio

✔ Speech recognition

✔ Intelligent response generation

✔ Natural speech synthesis

✔ Browser-based voice interaction

✔ Modular production architecture

The project serves as a foundation for scalable healthcare, wellness, and conversational AI applications.

---

# Features

- 🎙️ Real-Time Voice Conversation
- 🧠 Gemini LLM Reasoning
- 🗣️ Deepgram Speech Recognition
- 🔊 ElevenLabs Speech Synthesis
- ⚡ LiveKit WebRTC Streaming
- 🔒 JWT Authentication
- 🌿 Guided Breathing
- 📖 Reflective Journaling
- 😊 Mood Check-ins
- 🚨 Crisis Detection Prompting
- 🌐 Browser-based UI
- 📦 Modular Codebase

---

# System Architecture

<p align="center">

<img src="assets/architecture.png" width="100%">

</p>

---

# Voice Processing Pipeline

```
┌───────────────┐
│ User Speech   │
└──────┬────────┘
       │
       ▼
Deepgram STT
       │
       ▼
Gemini LLM
       │
       ▼
ElevenLabs TTS
       │
       ▼
LiveKit Streaming
       │
       ▼
Browser Playback
```

---

# Project Structure

```
MindAnchor
│
├── frontend
│   ├── css
│   ├── js
│   └── index.html
│
├── backend
│
├── app.py
├── assistant.py
├── llm.py
├── config.py
├── token_server.py
├── requirements.txt
├── README.md
└── assets
    ├── architecture.png
    ├── ui.png
    └── demo.gif
```

---

# Tech Stack

| Category | Technology |
|-----------|------------|
| Frontend | HTML, CSS, JavaScript |
| Backend | Python, FastAPI |
| Real-Time Communication | LiveKit |
| Speech-to-Text | Deepgram |
| LLM | Google Gemini |
| Text-to-Speech | ElevenLabs |
| Authentication | JWT |
| Streaming | WebRTC |
| Voice Activity Detection | Silero |
| Environment | dotenv |

---

# Installation

Clone the repository

```bash
git clone https://github.com/<username>/MindAnchor.git

cd MindAnchor
```

Create virtual environment

```bash
conda create -n voice python=3.11

conda activate voice
```

Install dependencies

```bash
pip install -r requirements.txt
```

---

# Environment Variables

Create a `.env`

```
LIVEKIT_URL=

LIVEKIT_API_KEY=

LIVEKIT_API_SECRET=

DEEPGRAM_API_KEY=

ELEVENLABS_API_KEY=

GEMINI_API_KEY=
```

---

# Running the Project

Terminal 1

```bash
python app.py dev
```

Terminal 2

```bash
uvicorn token_server:app --reload
```

Terminal 3

Launch

```
frontend/index.html
```

---

# Conversation Flow

```
Browser
      │
      ▼
JWT Token
      │
      ▼
LiveKit Room
      │
      ▼
Deepgram
      │
      ▼
Gemini
      │
      ▼
ElevenLabs
      │
      ▼
LiveKit
      │
      ▼
Browser Speaker
```

---

# Security

- JWT-based authentication
- Ephemeral access tokens
- Environment variable secrets
- Secure WebRTC communication
- No API keys exposed to client

---

# Future Enhancements

- Long-term conversational memory
- Retrieval-Augmented Generation (RAG)
- User authentication
- Personalized wellness plans
- Emotion detection
- Session analytics
- Cloud deployment using Docker + Kubernetes
- CI/CD with GitHub Actions

---

# Known Limitations

- Response latency depends on available hardware resources and selected LLM.
- Local execution on low-memory systems (e.g., 4 GB RAM) may experience slower inference.
- Performance improves significantly with cloud deployment or higher-end hardware.

---

# Acknowledgements

- LiveKit
- Deepgram
- ElevenLabs
- Google Gemini
- FastAPI

---

# License

This project is released under the MIT License.