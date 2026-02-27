---
type: component
name: terminal
version: 6.7.0
---

# Terminal

Interactive terminal with command history and rate limiting.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `prompt` | string | `'b2>'` | Command prompt |
| `lines` | array | `[]` | Initial lines `{ text, type }` |
| `onCommand` | function | `null` | Command handler |

## Rate Limiting

Built-in token bucket rate limiter:
- 10 commands per 60 seconds
- Shows warning at ≤3 remaining
- Displays banner when limited

## Usage

```javascript
const term = JUNDA.components.terminal({
  prompt: '0xFLEET>',
  lines: [
    { text: 'System initialized', type: 'success' }
  ],
  onCommand: (cmd, log) => {
    if (cmd === 'status') {
      log('[OK] All nodes online', 'success');
    } else {
      log(`Unknown: ${cmd}`, 'error');
    }
  }
});

document.body.appendChild(term);
```

## Command Types

| Type | Prefix | Color |
|------|--------|-------|
| `command` | `b2>` | signal |
| `success` | `[OK]` | success |
| `error` | `[ERR]` | error |
| `output` | none | ghost |

## A11Y

- Input has `aria-label="Terminal command input"`
- Send button has `aria-label="Send command"`
- Rate limit banner: `role="alert"` + `aria-live="assertive"`
- Status announced via `aria-live` regions

---
🌫️🌒
