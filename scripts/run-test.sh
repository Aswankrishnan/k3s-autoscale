#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
rm -rf evidence/jmeter-report evidence/results.jtl
mkdir -p evidence
bash scripts/collect.sh evidence/scaling.csv & COLLECTOR=$!
trap 'kill $COLLECTOR 2>/dev/null || true' EXIT
sleep 15
jmeter -n -t jmeter/autoscale-test.jmx -Jhost=localhost -Jport=80 \
       -l evidence/results.jtl -e -o evidence/jmeter-report
sleep 30
kill $COLLECTOR 2>/dev/null || true
python3 scripts/plot.py
echo "Done: evidence/scaling.csv, scaling.png, jmeter-report/index.html"
