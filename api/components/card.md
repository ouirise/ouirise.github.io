---
type: component
name: card
version: 6.7.0
---

# Card

Content container with header, body, and optional footer.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | `''` | Card header title |
| `subtitle` | string | `''` | Header subtitle |
| `children` | array | `[]` | Body content |
| `footer` | element | `null` | Footer actions |

## Usage

### Basic
```javascript
JUNDA.mount('card', {
  title: 'Mission Status',
  children: [
    JUNDA.el('p', { text: 'All systems operational.' })
  ]
});
```

### With Footer
```javascript
JUNDA.mount('card', {
  title: 'Deploy',
  subtitle: 'Production environment',
  children: [
    JUNDA.el('p', { text: 'Ready to deploy v6.7.0' })
  ],
  footer: JUNDA.el('div', {},
    JUNDA.components.button({ label: 'Deploy', variant: 'primary' }),
    JUNDA.components.button({ label: 'Cancel', variant: 'secondary' })
  )
});
```

## Structure

```html
<div class="j-card">
  <div class="j-card__header">
    <div class="j-card__title">Title</div>
    <div class="j-card__subtitle">Subtitle</div>
  </div>
  <div class="j-card__body">
    <!-- children -->
  </div>
  <div class="j-card__footer">
    <!-- footer -->
  </div>
</div>
```

---
🌫️🌒
