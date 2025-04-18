API_KEY = "AIzaSyCleCk9q4YfHoqsXupnqAC8ZbcSo7L2Lnk"

from google import genai
from google.genai import types
from PIL import Image
from io import BytesIO

client = genai.Client(api_key=API_KEY)

image_path = Image.open("images/WorkerMan.jpg")
promt = "Convert the attach images into a ghibli style art"

reponse = client.models.generate_content(
    model = 'gemini-2.0-flash-exp-image-generation',
    contents = [promt, image_path],
    config = types.GenerateContentConfig(
        response_modalities=['Text', 'Image']
    )
)

for part in reponse.candidates[0].content.parts:
    if part.text is not None:
        print(part.text)
    elif part.inline_data is not None:
        image = Image.open(BytesIO(part.inline_data.data))
        image.save('WorkerMan_Ghibli.jpg')
        image.show()