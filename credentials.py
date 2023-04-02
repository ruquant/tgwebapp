"""
Author: Calixte Mayoraz (2022)
"""
import os
if os.path.exists(".env"):
    # if we see the .env file, load it
    from dotenv import load_dotenv
    load_dotenv()

# now we have it as a handy python string!
BOT_TOKEN = '6021969130:AAFEpqOIFjiDezNX00hti3okQDMSSby40Os'#os.getenv('6021969130:AAFEpqOIFjiDezNX00hti3okQDMSSby40Os')
BOT_USERNAME = 'webappsamplebot'#os.getenv('webappsamplebot')
WEBAPP_URL = 'https://ruquant.github.io/tgwebapp/'#os.getenv('https://ruquant.github.io/tgwebapp/')

print(BOT_TOKEN)