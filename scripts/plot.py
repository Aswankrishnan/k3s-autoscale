import pandas as pd, matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt

df = pd.read_csv("evidence/scaling.csv")
t = pd.to_datetime(df["timestamp"], format="%H:%M:%S")

fig, ax1 = plt.subplots(figsize=(12, 5))
ax1.step(t, df["current_replicas"], where="post", color="tab:blue", label="Replicas")
ax1.set_ylabel("Replicas"); ax1.set_ylim(0, 6)
ax2 = ax1.twinx()
ax2.plot(t, df["cpu_percent"], color="tab:red", label="Avg CPU % of request")
ax2.axhline(60, ls="--", color="gray", label="HPA target (60%)")
ax2.set_ylabel("CPU % of request")
h1, l1 = ax1.get_legend_handles_labels(); h2, l2 = ax2.get_legend_handles_labels()
ax1.legend(h1 + h2, l1 + l2, loc="upper left")
plt.title("K3s HPA: Normal -> Surge -> Scale-out -> Reduced -> Scale-in")
plt.tight_layout(); plt.savefig("evidence/scaling.png", dpi=150)
