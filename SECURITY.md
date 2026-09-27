# Security Review

## Scans performed
- `trivy image autoscale-api:1.0` — see evidence/trivy-image.txt
- `trivy config k8s/` — see evidence/trivy-config.txt

## Findings and hardening implemented

| Finding | Risk | Hardening implemented |
|---|---|---|
| Default namespace, no policy enforcement | Weak isolation | Dedicated `autoscale-demo` namespace with Pod Security Admission `restricted` |
| Container could run as root | Container escape impact | `runAsNonRoot: true`, UID/GID 10001, `USER 10001` in Dockerfile |
| Writable root filesystem | Malware persistence | `readOnlyRootFilesystem: true`, small `emptyDir` mounted at `/tmp` |
| Excess Linux capabilities / privilege escalation | Privilege abuse | `capabilities: {drop: ALL}`, `allowPrivilegeEscalation: false`, seccomp `RuntimeDefault` |
| ServiceAccount token auto-mounted | Cluster API abuse if pod compromised | `automountServiceAccountToken: false` |
| No CPU/memory limits | Noisy-neighbour / DoS risk | Container `requests`/`limits`, namespace `ResourceQuota` + `LimitRange` |
| Flat pod network, any pod could reach the API | Lateral movement | Default-deny `NetworkPolicy`, ingress allowed only from `kube-system` (Traefik) on port 8080 |
| Secrets stored unencrypted in etcd | Data exposure | K3s started with `--secrets-encryption` |

## Residual risks (not fixed in this exercise)
- No TLS on the ingress (HTTP only)
- No rate limiting on the ingress
- Single-node cluster — no node-level redundancy
- (Add anything Trivy flagged that you didn't fix, with a one-line reason)
