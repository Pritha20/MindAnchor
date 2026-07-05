# MindAnchor

<p align="center">
  <img src="assets/logo.png" width="120"/>
</p>

<h2 align="center">
Production-Grade AI Voice Companion for Emotional Wellness
</h2>

<p align="center">
Natural, low-latency voice conversations powered by LiveKit, Deepgram, Gemini and ElevenLabs.
</p>

<p align="center">

![Python](https://img.shields.io/badge/Python-3.11-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-Production-success)
![Gemini](https://img.shields.io/badge/Google-Gemini-orange)
![Deepgram](https://img.shields.io/badge/Deepgram-Nova-blueviolet)
![ElevenLabs](https://img.shields.io/badge/ElevenLabs-TTS-black)
![License](https://img.shields.io/badge/License-MIT-green)

</p>

---

# The Problem

We live in a world where staying connected has never been easier, yet meaningful conversations have become increasingly rare. Busy schedules, demanding careers, geographical distance, and the constant pace of modern life often leave people with little opportunity to pause and simply talk.

Moments of stress, anxiety, self-doubt, or emotional exhaustion rarely arrive at convenient times. They often occur late at night, after a difficult meeting, during periods of loneliness, or when friends, family, or professional support may not be immediately available.

While AI has made remarkable progress in assisting us with productivity, coding, education, and everyday tasks, its potential to provide compassionate, accessible conversational support remains largely untapped.

MindAnchor was born from a simple idea:

**What if AI could become a calm, empathetic companion that listens first, responds naturally, and helps people navigate difficult moments through meaningful conversation?**

---

# Overview

MindAnchor is a production-grade AI voice companion that enables natural, real-time spoken conversations for emotional wellness and guided mindfulness.

Rather than interacting through text, users can simply speak with MindAnchor as they would with another person. The system combines real-time speech recognition, large language models, neural speech synthesis, and low-latency communication to create fluid, human-like voice interactions.

MindAnchor can:

- Listen actively and respond empathetically
- Guide breathing and mindfulness exercises
- Encourage emotional reflection
- Offer supportive conversations during stressful moments
- Demonstrate a modern production-ready conversational AI architecture

MindAnchor is **not** intended to replace licensed mental health professionals or genuine human relationships. Instead, it serves as an accessible conversational companion that can provide supportive dialogue whenever immediate human interaction may not be available.

# Demo

<p align="center">
<a href="assets/demo.gif">
<img src="assets/demo.gif" width="900">
</a>
</p>

<p align="center">
<b>Click the GIF above to watch the complete demo video.</b>
</p>



# Key Features

- Real-time voice conversations
- Ultra-low latency audio streaming
- Human-like AI speech synthesis
- Natural speech recognition
- Guided mindfulness conversations
- Emotionally supportive dialogue
- JWT-based authentication
- Production-ready architecture
- Modular backend using FastAPI

---

# System Architecture

<p align="center">
<img src="assets/architecture.png" width="100%">
</p>

---

# Voice Pipeline

```
User Speaks
      │
      ▼
 LiveKit
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
 LiveKit Streams Audio
      │
      ▼
 User Hears Response
```

---

# Tech Stack

| Category | Technologies |
|-----------|--------------|
| Backend | FastAPI |
| Frontend | HTML5, CSS3, Vanilla JavaScript |
| Programming Language | Python, JavaScript |
| Real-Time Communication | LiveKit, WebRTC |
| Speech-to-Text | Deepgram Nova |
| Large Language Model | Google Gemini |
| Text-to-Speech | ElevenLabs |
| Authentication | JWT |
| Configuration | python-dotenv |
| Development Tools | Git, GitHub, VS Code |

---

# Quick Start

## Clone Repository

```bash
git clone https://github.com/<your-username>/MindAnchor.git
cd MindAnchor
```

## Create Environment

```bash
conda create -n voice python=3.11
conda activate voice
```

## Install Dependencies

```bash
pip install -r requirements.txt
```

## Configure Environment

Create a `.env` file.

```env
LIVEKIT_URL=
LIVEKIT_API_KEY=
LIVEKIT_API_SECRET=
DEEPGRAM_API_KEY=
ELEVENLABS_API_KEY=
GEMINI_API_KEY=
```

## Start Services

```bash
python app.py dev
```

Open another terminal

```bash
uvicorn token_server:app --reload
```

Launch

```
frontend/index.html
```

Click the microphone and begin speaking.

---

# Future Improvements

- Conversation memory
- Personalized wellness profiles
- Emotion detection from voice
- Daily mindfulness sessions
- Multi-language support
- Voice cloning
- Session analytics

---

# License

Licensed under the MIT License.
