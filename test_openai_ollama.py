from openai import OpenAI

client = OpenAI(
    base_url="http://localhost:11434/v1",
    api_key="ollama",   # Ollama ignores this value
)

print("Sending request to Ollama...")

response = client.chat.completions.create(
    model="qwen2.5:1.5b",
    messages=[
        {
            "role": "user",
            "content": "Say hello in one short sentence."
        }
    ],
)

print("\nResponse:")
print(response.choices[0].message.content)