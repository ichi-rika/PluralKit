import asyncio

try:
    # uvloop doesn't work on Windows, therefore an optional dependency
    import uvloop
    asyncio.set_event_loop_policy(uvloop.EventLoopPolicy())
except ImportError:
    pass

from pluralkit import bot
bot.run()