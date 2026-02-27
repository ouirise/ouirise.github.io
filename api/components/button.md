---
type: component
name: button
version: 6.7.0
---

# Button

Primary action element. Always renders as `<button>`, never `div onClick`.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | string | `'Button'` | Button text |
| `variant` | `'primary' \| 'secondary' \| 'ghost' \| 'danger'` | `'primary'` | Visual style |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `icon` | string | `null` | Icon name (optional) |
| `disabled` | boolean | `false` | Disabled state |
| `onClick` | function | `null` | Click handler |
| `ariaLabel` | string | `label` | A11y label |

## Variants

### Primary
```javascript
JUNDA.mount('button', {
  label: 'Deploy',
  variant: 'primary'
});
```

### Secondary
```javascript
JUNDA.mount('button', {
  label: 'Cancel',
  variant: 'secondary'
});
```

### Ghost
```javascript
JUNDA.mount('button', {
  label: 'Settings',
  variant: 'ghost'
});
```

### Danger
```javascript
JUNDA.mount('button', {
  label: 'Delete',
  variant: 'danger'
});
```

## With Icon

```javascript
JUNDA.mount('button', {
  label: 'Save',
  icon: 'check',
  variant: 'primary'
});
```

## A11Y

- Renders as `<button>` element
- `aria-label` defaults to `label` prop
- Keyboard accessible (Enter/Space)
- Focus visible state

---
🌫️🌒
