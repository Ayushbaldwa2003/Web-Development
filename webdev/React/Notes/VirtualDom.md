# ⚛️ React Virtual DOM & Updates Notes

---

## 📌 Core Concept

👉 React uses Virtual DOM to efficiently update only changed parts of the UI instead of re-rendering the entire DOM

👉 “React uses a Virtual DOM to create a lightweight copy of the real DOM, compares changes using a diffing algorithm, and updates only the necessary parts of the real DOM for better performance.”

---

## 🔄 Update Flow

```
State change
   ↓
New Virtual DOM
   ↓
Compare with old Virtual DOM
   ↓
Find difference
   ↓
Update only that part in Real DOM
```

---

## ❓ Q.) Can we do it manually?

👉 Yes, browser can update only <h1>

👉 But YOU must:

* detect change
* write logic
* manage everything

👉 React automates this

---

## ⚡ React Update Behavior

👉 “React does not update instantly, it batches changes and applies final update”

---
