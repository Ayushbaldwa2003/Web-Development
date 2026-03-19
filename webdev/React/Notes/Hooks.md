# ⚛️ React Notes (Core + Hooks)

---

## 📌 Functional Component

👉 A functional component is just a JavaScript function that returns UI (HTML-like code)

---

## 📌 Hooks

👉 Hooks are just special functions that give power to your component

---

# 🔥 useState Hook

👉 useState is used to store data inside a component

👉 Think of a counter app:

* You click button → number increases
* That number must be stored somewhere
  👉 That “somewhere” = useState

---

## ⚡ Syntax

```jsx
const [value, setValue] = useState(initialValue);
```

---

## 🔹 Meaning

* `value` → current data
* `setValue` → function to update the data
* `initialValue` → initial value

---

## 🧠 Example

```jsx
const [count, setCount] = useState(0);
```

---

## 🖱️ onClick

👉 onClick is an event handler that accepts a callback function, which React executes when the click event occurs

---

# 🔥 useCallback Hook

👉 useCallback is used to remember (cache) a function so it is not created again and again

👉 “useCallback memoizes a function and recreates it only when one of its dependencies changes.”

---

## ⚡ Syntax

```jsx
const memoizedFunction = useCallback(() => {
  // your logic
}, [dependencies]);
```

---

## 🧠 Key Idea

👉 Without useCallback → new function created on every render ❌
👉 With useCallback → same function reused until dependencies change ✅

---

# ⚛️ useEffect Hook

---

## 📌 What is useEffect?

👉 useEffect is a React Hook used to run code **after the component renders**

👉 It is mainly used for **side effects**

---

## ⚡ Syntax

```jsx
useEffect(() => {
  // code to run
}, [dependencies]);
```

---

## 🔄 How it works

```text
Render UI
   ↓
useEffect runs
```

👉 It always runs **after rendering**

---

## 📦 Dependencies

👉 Dependencies decide **when useEffect should run**

---

### 🟢 1. Empty array `[]`

```jsx
useEffect(() => {
  // runs once
}, []);
```

👉 Runs only once (on mount)

---

### 🟢 2. With dependencies

```jsx
useEffect(() => {
  // runs when count changes
}, [count]);
```

👉 Runs when dependency changes

---

### 🔴 3. No dependency array

```jsx
useEffect(() => {
  // runs every render
});
```

👉 Runs on every render

---

## 🔁 Flow

```text
State change
   ↓
Component re-render
   ↓
UI updated
   ↓
useEffect runs
```

---

## ⚠️ Important

👉 If useEffect updates state without proper dependency control → **infinite loop**

---

## 🎯 Uses

* API calls
* Timers
* DOM manipulation
* Syncing data

---

## 🧠 One-Line Summary

👉 useEffect = run code after render based on dependencies

---

## 💬 Interview Line

👉 “useEffect is used to handle side effects in React and runs after the component renders based on dependency changes.”

---

# ⚛️ useRef Hook

---

## 📌 What is useRef?

👉 useRef is a React hook used to store a mutable value  
👉 It does NOT cause re-render when updated  

---

## 📌 Syntax

const refName = useRef(initialValue);

Access value:
refName.current

---

## 📌 Key Points

- Stores value between renders
- Does NOT trigger re-render
- Used for DOM access
- Value stored in `.current`

---

## 📌 useRef vs useState

| Feature        | useState       | useRef        |
|---------------|---------------|--------------|
| Re-render     | Yes           | No           |
| UI Update     | Yes           | No           |
| Use case      | UI data       | DOM / storage |

---

## 📌 Common Uses

### 1. Access DOM

const inputRef = useRef(null);

<input ref={inputRef} />

inputRef.current.focus();

---

### 2. Store Previous Value

const prevValue = useRef();

useEffect(() => {
  prevValue.current = value;
}, [value]);

---

## 📌 Important

👉 Changing ref does NOT update UI  
👉 Always use `.current` to access value  
👉 Mostly used for DOM manipulation  

---

## 🚀 Summary

useRef = Store value without re-render  
useState = Store value with re-render

# 🔥 Final Summary

👉 Functional Component = function that returns UI
👉 Hooks = give power to functional components
👉 useState = store and update data
👉 useCallback = cache functions
👉 useEffect = run code after render
👉 useRef = store value / access DOM without re-render
---
