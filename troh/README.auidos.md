# TROH Worker
## Heartbeat Rate Limiting + Data Bridge
### Cloudflare Workers Implementation

🌫️🌒

---

## 🎯 Features

| Endpoint | Rate Limit | Cache |
|----------|-----------|-------|
| `/api/troh/health` | 5/min, burst 3 | BYPASS |
| `/api/bridge/*` | 100/min, burst 20 | 1hr TTL |
| Static | Unlimited | GH Pages |

---

## 🏗️ Deploy

```bash
# Install Wrangler
npm install -g wrangler

# Login
wrangler login

# Deploy
wrangler deploy
```

---

## ⚡ Endpoints

### Heartbeat
```bash
curl https://ouiRise.github.io/api/troh/health
```

### Bridge
```bash
curl https://ouiRise.github.io/api/bridge/data
```

---

## 🔗 Future: Persistent Nodes

Durable Objects migration ready.

---

🌫️🌒
