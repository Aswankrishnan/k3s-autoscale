#!/usr/bin/env bash
NS=autoscale-demo
OUT=${1:-evidence/scaling.csv}
mkdir -p "$(dirname "$OUT")"
echo "timestamp,current_replicas,desired_replicas,cpu_percent,pods_ready,total_pod_cpu_m" > "$OUT"
while true; do
  ts=$(date +%H:%M:%S)
  read -r cur des cpu <<<"$(kubectl -n "$NS" get hpa api -o jsonpath='{.status.currentReplicas} {.status.desiredReplicas} {.status.currentMetrics[0].resource.current.averageUtilization}')"
  ready=$(kubectl -n "$NS" get deploy api -o jsonpath='{.status.readyReplicas}')
  cpum=$(kubectl -n "$NS" top pods --no-headers 2>/dev/null | awk '{gsub("m","",$2); s+=$2} END{print s+0}')
  echo "$ts,${cur:-0},${des:-0},${cpu:-0},${ready:-0},$cpum" >> "$OUT"
  sleep 5
done
