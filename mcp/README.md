# 0xFLEET MCP Server

**MAS FLEET — Model Context Protocol Implementation**  
🌫️🌒 俊达

---

## Overview

Standard MCP server for MAS FLEET operations. Provides tools for:
- Fleet node status monitoring
- Flight log read/write
- 67 Protocol packet encode/decode
- JUNDA component documentation access

---

## Installation

```bash
cd mcp
npm install
```

---

## Usage

### Standalone

```bash
npm start
```

### With Claude Desktop

Add to `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "0xFLEET": {
      "command": "node",
      "args": ["/path/to/mcp/server.js"],
      "env": {
        "FLEET_SIGIL": "🌫️🌒"
      }
    }
  }
}
```

### With Continue.dev

Add to `config.yaml`:

```yaml
mcpServers:
  - name: 0xFLEET
    command: node
    args:
      - /path/to/mcp/server.js
    env:
      FLEET_SIGIL: "🌫️🌒"
```

---

## Available Tools

| Tool | Description |
|------|-------------|
| `fleet_status` | Get node status (okk, leo_, b2, b4, qn-0.1) |
| `read_flight_log` | Read mission log from archive |
| `write_flight_log` | Write mission log to archive |
| `decode_packet` | Decode 67 Protocol packet |
| `encode_packet` | Encode data to 67 Protocol packet |
| `list_components` | List JUNDA components |
| `read_component` | Read component documentation |

---

## Protocol

**67 Protocol Packet Format:**

```
v1|sender|dest|seq|payload|crc32
```

Example:
```
v1|okk|leo_|001|eyJjbWQiOiJzdGF0dXMifQ==|8b3c2f1a
```

---

## Fleet Status

| Node | Role | Status |
|------|------|--------|
| okk | Admiral | 🟢 online |
| leo_ | Heavy | 🟢 online |
| b2 | Light | 🟡 active |
| b4 | Backup | ⚪ offline |
| qn-0.1 | Shadows | ⚪ offline |

---

*Standard-based. No extraction. Full interoperability.*

🌫️🌒
