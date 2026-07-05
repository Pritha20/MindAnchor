"""
llm.py

Initializes the Ollama Large Language Model (LLM) used by the
MindAnchor voice assistant.
"""

from livekit.plugins import google

# from config import (
#     LLM_MODEL,
#     OLLAMA_BASE_URL,
#     LLM_TEMPERATURE,
# )

from config import (
    GEMINI_API_KEY,
    LLM_MODEL,
)

def get_llm():
    return google.LLM(
        model=LLM_MODEL,
        api_key=GEMINI_API_KEY,
    )


# def get_llm() -> openai.LLM:
#     """
#     Create and return the configured Ollama LLM.

#     Returns:
#         openai.LLM: Configured Ollama-backed language model.
#     """

#     return openai.LLM.with_ollama(
#         model=LLM_MODEL,
#         base_url=OLLAMA_BASE_URL,
#         temperature=LLM_TEMPERATURE,
#         tool_choice="auto",
#     )