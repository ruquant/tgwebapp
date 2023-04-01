"""
Author: Calixte Mayoraz (2022)
"""
import os
if os.path.exists(".env"):
    # if we see the .env file, load it
    from dotenv import load_dotenv
    load_dotenv()

# now we have it as a handy python string!
BOT_TOKEN = os.getenv('6021969130:AAFEpqOIFjiDezNX00hti3okQDMSSby40Os')
BOT_USERNAME = os.getenv('webappsamplebot')
WEBAPP_URL = os.getenv('WEBAPP_URL')
