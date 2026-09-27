import hashlib, socket, time
from flask import Flask, jsonify, request

app = Flask(__name__)
START = time.time()

@app.get("/health")
def health():
    return jsonify(status="ok")

@app.get("/api/info")
def info():
    return jsonify(pod=socket.gethostname(), uptime_s=round(time.time() - START, 1))

@app.get("/api/compute")
def compute():
    n = min(request.args.get("n", 20000, type=int), 200000)
    h = b"seed"
    for _ in range(n):
        h = hashlib.sha256(h).digest()
    return jsonify(pod=socket.gethostname(), iterations=n, digest=h.hex()[:16])
