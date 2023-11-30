# import socket
# HOST = "127.0.0.1"
# PORT= 64534


# with socket.socket(socket.AF_INET,socket.SOCK_STREAM) as s:
#     s.bind((HOST,PORT))
#     s.listen(5)
#     # conn, addr = s.accept()
#     # with conn:
#     #     print(f"Connected by {addr}")
#     #     while True:
#     #         data = conn.recv(1024)
#     #         if not data:
#     #             break
#     #         print(data)
#     while True:
#         conn,addr = s.accept()
#         print(f"Connected by {addr}")
#         data = conn.recv(1024)
#         message = "Hello from Python Socket Server!"
#         conn.send(message.encode())
#         # conn.send

# import asyncio
# import websockets

# async def hello(websocket):
#     name= await websocket.recv()
#     print(name,"from clint")
#     greet ="hello" + name
#     await websocket.send(greet)
#     print("server",greet)

# async def main():
#     async with websockets.serve(hello,"127.0.0.1",8765):
#         await asyncio.Future()


# if __name__ == "__main__":
#     asyncio.run(main())

# import sys
# from cefpython3 import cefpython as cef
import pathlib

# file_path = "C:\Remote-Work\plancck\dist\index.html"
# file_uri = pathlib.Path(file_path).as_uri()

# def main():
#     sys.excepthook = cef.ExceptHook
#     cef.Initialize()
#     browser = cef.CreateBrowserSync(url=file_uri,window_title='CEF Python React Example')
#     cef.MessageLoop()
#     cef.Shutdown()

# if __name__ == '__main__':
#     main()


import sys
from PyQt5.QtCore import QUrl
from PyQt5.QtWidgets import QApplication
from PyQt5.QtWebEngineWidgets import QWebEngineView

app = QApplication(sys.argv)
web_view = QWebEngineView()
# Load the React app
web_view.setUrl(QUrl.fromLocalFile(r"C:\Remote-Work\plancck\index.html"))

# Set window properties
web_view.setWindowTitle('Planck')
web_view.resize(800, 600)
web_view.show()

sys.exit(app.exec_())