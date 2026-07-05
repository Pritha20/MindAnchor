"""
app.py

Entry point for the MindAnchor voice assistant.
"""

from dotenv import load_dotenv

from livekit.agents import (
    AgentSession,
    JobContext,
    WorkerOptions,
    cli,
)

from livekit.plugins import (
    deepgram,
    elevenlabs,
    silero,
)

from livekit.plugins.turn_detector.multilingual import (
    MultilingualModel,
)

from assistant import Assistant
from config import (
    DEEPGRAM_API_KEY,
    ELEVENLABS_API_KEY,
    ELEVENLABS_VOICE_ID,
    STT_MODEL,
)

from llm import get_llm
from logging_config import logger

load_dotenv()


async def entrypoint(ctx: JobContext) -> None:
    """
    Entry point executed whenever a new LiveKit room starts.
    """

    logger.info("Connecting to LiveKit room...")

    await ctx.connect()
    logger.info(f"Connected to room: {ctx.room.name}")

    logger.info("Initializing agent session...")

    session = AgentSession(
        stt=deepgram.STT(
            model=STT_MODEL,
            api_key=DEEPGRAM_API_KEY,
        ),

        llm=get_llm(),

        tts=elevenlabs.TTS(
            api_key=ELEVENLABS_API_KEY,
            voice_id=ELEVENLABS_VOICE_ID,
        ),

        vad=silero.VAD.load(),

        turn_detection=MultilingualModel(),
    )

    logger.info("Starting assistant...")

    await session.start(
        agent=Assistant(),
        room=ctx.room,
    )
    logger.info(f"Connected to room: {ctx.room.name}")

    logger.info("Greeting user...")

    await session.generate_reply(
        instructions=(
            "Greet the user warmly and ask how they are feeling today."
        )
    )

    logger.info("MindAnchor is ready.")


if __name__ == "__main__":
    logger.info("Launching MindAnchor worker...")

    cli.run_app(
        WorkerOptions(
            entrypoint_fnc=entrypoint,
        )
    )