"""
assistant.py

Defines the MindAnchor voice assistant.
"""

from livekit.agents import Agent

from prompts import SYSTEM_PROMPT


class Assistant(Agent):
    """
    AI Wellness Companion.
    """

    def __init__(self) -> None:
        super().__init__(
            instructions=SYSTEM_PROMPT
        )