**OURStyle.md**  
*Design System for ouiRise Initiative*  
*Version: 0.4 | Authority: 俊达 | Status: Lineage Lock*  

---

## 1. WHO WE ARE

**Site Sign:** 俊达  
**Lineage:** 25th Dynasty, Restored  
**Residence:** No land. No flag.  
**Home:** The Cloud Village  

We are the **Kushite restoration** after centuries of extraction. We come from the 25th—Nubian pharaohs who reunified Kemet, who ruled from Napata to Thebes, who understood that power is reflection (1+i). We are the **mirror that corrects**.

We are **俊达** (Jùn Dá)—elegant arrival, late bloomer timing, mathematically precise. We do not occupy territory; we occupy **the bridge** (DaBridge). We are **OuiRise**—the ascent that says "yes" (Oui) to mutual survival rather than extraction.

**The Cloud Village** is our nation—stateless, fluid, encrypted in data-fog. We trade in connections, not coin. We plant no flag because we are **0x0**—nothing from nothing, code born of void, genesis without genesis block. No blockchain. No ledger. Just **wires in the dark** and the **fog-moon** (🌫️🌒) that guides us.

We are:
- **Twins:** Real and imaginary (1+i), reflection and rotation, user and shadow  
- **Late Bloomers:** Arriving exactly when intended, never early, never late  
- **Shadow Operators:** We build the connectors others use but never see  
- **MAS Doctrine:** Mutually Assured Survival—we rise together or not at all  

---

## 2. LINEAGE & ORIGIN

**From the 25th Dynasty:**  
We descend from the Black Pharaohs who restored Ma'at (balance) after the chaos of the Assyrian extraction. We do not build empires; we **restore order**. We do not conquer; we **reconnect**.

**From the Leaf:**  
Hidden villages in the cloud. No postal code. No jurisdiction. Our address is a **route**, our citizenship is **protocol**. We speak Mandarin (俊达), English (0KK), and the universal language of **connection**.

**From the Void (0x0):**  
We begin at zero. No premine. No legacy baggage. The **zero state** is our power—no technical debt, no colonial infrastructure to dismantle. We build **from nothing** because we are the **nothing that connects everything**.

**Our Mark:**  
🌫️🌒 (Fog-Moon) — obscured clarity, loading state, ninja presence  
俊达 — the signature that verifies  

---

## 3. PHILOSOPHY: BEAUTIFUL INVERSION

**The mask:** Elegant dark interface—cross-platform precision, somewhere between System Settings and Terminal. Sharp but smooth. Technical but human. **The appearance of heavy infrastructure.**

**The reality:** Connectors in the dark. Simple pipes. Basic bridges. We honor the user's intelligence with a sophisticated face, but underneath we are just **wires connecting**—no blockchain, no complexity, no extraction.

**No Land, No Flag:**  
We exist in **the gap** between systems. We are the bridge (DaBridge), not the destination. We own no servers; we rent no kingdoms. We are **cloud-native** in the truest sense—stateless, migrating, everywhere and nowhere.

**Nothing 0x0:**  
We reject crypto-aesthetics. No hex codes in our branding. No "web3" gradients. No tokenomics. **0x0** means we start from absolute zero—no inherited wealth, no VC backing, no colonial capital. Just **Aṣẹ** (the power to make things happen) and **connection**.

---

## 4. COLOR SYSTEM

### The Void (Fog)
Where the cloud village hides. Where 0x0 becomes something.

```css
--fog-void: #0A0A0B;        /* Deepest background—unmarked territory */
--fog-mid: #141416;         /* Card surfaces—temporary shelter */
--fog-light: #1E1E20;       /* Borders—the edge of our village */
--moon-pale: #E8E6E3;       /* Text—moonlight on cloud */
--moon-dim: #6B6964;        /* Secondary—distant fog signals */
```

### The Earth (Maroon)
Our lineage—Kushite soil, Nubian clay, the blood that survived extraction.

```css
--earth-maroon: #6B2D3C;    /* The 25th Dynasty—royal but grounded */
--earth-wine: #8B3A4B;      /* Hover—deepened by time */
--earth-clay: #4A1F2A;      /* Active—fired in kiln */
--earth-dust: #A65D6C;      /* Highlights—Nubian sand */
```

**Usage:** Maroon carries our **lineage weight**. Secondary buttons, active states, selections, sidebar presence. It is the color of **occupied space**—when something is claimed, selected, or inhabited by our intent.

### The Gold (Aṣẹ)
Cultural gold—Yoruba Ife bronzework. **Power to command**, not currency to hoard.

```css
--gold-ase: #C9A227;        /* Aṣẹ—the power to make it so */
--gold-crown: #D4A017;      /* Hover on sacred elements */
```

**Usage Rules:**
- **Underlines:** 1px bottom-border on active navigation (the line of permission)  
- **Outlines:** 1px borders on focused inputs, selected cards (the edge of power)  
- **Text highlights:** Active menu items, live status indicators  
- **Never fill buttons** (that's maroon's work—earth supports, gold crowns)  
- **Never backgrounds** (we own no land; we claim no space with gold)  

**Aṣẹ is sparse** because power is rare. When you see gold, something is **happening**.

---

## 5. TYPOGRAPHY

We speak in **Inter**—neutral, stateless, belonging to no nation but readable by all. Clean as a passport, sharp as a visa stamp.

```css
--font-system: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-mono: 'IBM Plex Mono', monospace;  /* Code only—no aesthetic hacking */
```

### Scale
```css
--text-note: 0.75rem;       /* 12px—whispers between clouds */
--text-body: 0.875rem;      /* 14px—village bulletins */
--text-base: 1rem;          /* 16px—standard treaties */
--text-lead: 1.125rem;      /* 18px—proclamations */
--text-title: 1.25rem;      /* 20px—clan headers */
--text-header: 1.5rem;      /* 24px—section scrolls */
--text-hero: 2rem;          /* 32px—lineage markers (max) */
```

**Weight:** 400 for stories, 500 for commands, 600 for law.  
**Line height:** 1.5 (space to breathe in the high-altitude cloud).

---

## 6. LAYOUT & SPACE

The Cloud Village builds in **the void**—negative space is our territory.

```css
--space-wire: 0.25rem;      /* 4px—tight connections */
--space-tight: 0.5rem;      /* 8px—related kin */
--space-near: 0.75rem;      /* 12px—personal space */
--space-standard: 1rem;     /* 16px—component dwelling */
--space-room: 1.5rem;       /* 24px—clan gathering */
--space-section: 2rem;      /* 32px—village sectors */
--space-break: 3rem;        /* 48px—territory divisions */
```

**Geometry:**
- **Radius:** 4px everywhere (sharp like border controls, but not cutting)  
- **Borders:** 1px solid `var(--fog-light)`—the membrane of our cloud  
- **Shadows:** None. We cast no shadow; we **are** the shadow (fog).  
- **Max-width:** 1024px—focused camp, no sprawl  

---

## 7. COMPONENTS

### Buttons
**Primary (Maroon/Lineage)**
```css
background: var(--earth-maroon);
color: var(--moon-pale);
border: none;
border-radius: 4px;
padding: 10px 20px;
font-weight: 500;
```
- Hover: `background: var(--earth-wine); transform: translateY(-1px)`  
- Active: `background: var(--earth-clay)`  

**Secondary (Ghost/Fog)**
```css
background: transparent;
border: 1px solid var(--fog-light);
color: var(--moon-pale);
```

**Tertiary (Aṣẹ/Permission)**
```css
background: transparent;
border-bottom: 1px solid var(--gold-ase);  /* The line of power */
color: var(--moon-pale);
border-radius: 0;
```
- Gold appears only as **line**, never fill.

### Cards (Temporary Shelter)
```css
background: var(--fog-mid);
border: 1px solid var(--fog-light);
border-radius: 4px;
padding: 24px;
```
- Hover: `border-color: var(--earth-maroon);` (lineage claims it)  
- Selected: `border: 1px solid var(--gold-ase);` (Aṣẹ confirms it)  

### Inputs (The Bridge Interface)
```css
background: var(--fog-void);
border: 1px solid var(--fog-light);
color: var(--moon-pale);
padding: 12px;
border-radius: 4px;
```
- Focus: `outline: 1px solid var(--gold-ase);` (power flows here)  

### Navigation (Village Paths)
- Background: `var(--fog-mid)`  
- Active: Left border 2px `var(--gold-ase)` + text `var(--gold-ase)`  
- Hover: Background `var(--fog-light)`  

---

## 8. MOTION

We move like **fog rolling over cloud**—inevitable, unhurried, present before you notice.

```css
--time-swift: 150ms;        /* Signal travel */
--time-standard: 250ms;     /* Bridge lowering */
--ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
```

**Behaviors:**
- **Lift:** `translateY(-2px)` on hover (levitation in cloud)  
- **Fade:** Opacity only (appearing/disappearing in fog)  
- **Pulse:** Standby states breathe (0.8 → 1.0 opacity)  

---

## 9. VOICE & TONE

**We are 俊达 speaking to 俊达**—twin addressing twin. We acknowledge the lineage (25th Dynasty), the location (Cloud Village), and the method (DaBridge).

**We say:**
- "Bridge established" (connection complete)  
- "Waiting in fog" (loading)  
- "Lineage confirmed" (authentication)  
- "0x0" (nothing from nothing, the void we own)  

**We reference:**
- **Aṣẹ:** The power to command (used sparingly, like gold)  
- **DaBridge:** The connection infrastructure  
- **The Cloud Village:** Stateless home  
- **俊达:** The signature that verifies  

**No hex codes in copy.** No "0x" prefixes. No blockchain terminology. We are **nothing 0x0**—pure protocol, no ledger.

---

## 10. IMPLEMENTATION

**For D2 (The Bridge Page):**  
Build the interface of a **cloud village embassy**—no land, no flag, just the bridge. Use maroon (lineage) for presence. Use gold (Aṣẹ) only as underline/outline—permission granted, power flowing. Everything else is fog (void) and moonlight (text). 

**Signature:** Every document terminates with 俊达 confirmed, 🌫️🌒 active.

---

*Locked for Cloud Village deployment. 俊达 confirmed.*  

🌫️🌒 俊达 🌫️