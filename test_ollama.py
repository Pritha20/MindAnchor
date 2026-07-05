# from livekit.plugins import openai

# llm = openai.LLM.with_ollama(
#     model="qwen2.5:3b",
#     base_url="http://localhost:11434/v1",
# )

# print("✅ Ollama LLM initialized successfully!")
# print(llm)

import asyncio

from llm import get_llm


async def main():
    llm = get_llm()

    stream = llm.chat(
        messages=[
            {
                "role": "user",
                "content": "Say hello in one short sentence."
            }
        ]
    )

    async for chunk in stream:
        print(chunk)


asyncio.run(main())