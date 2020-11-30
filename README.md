## Client

The frontend uses Nextjs.

Requirements: yarn

### To run (from this directory):

```bash
  yarn
  yarn dev
```

## Server

This is a simple Python server that starts up a WebSocket connection and streams microphone input as text.

Requirements: Python 3, pip

### To run (from this directory):

```bash
  python3 python3 -m venv <myenvname>
  source <myenvname>/bin/activate
  pip install -r requirements.txt
  python3 server.py
```
