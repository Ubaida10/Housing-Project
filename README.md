````markdown
# Housing Project (Angular + JSON Server)

This is a simple housing listings application built with **Angular 19** and powered by **JSON Server** to simulate a REST API backend.

## 🧰 Technologies Used

- Angular 19
- TypeScript
- JSON Server
- CSS (custom styling)

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (v16 or later)
- Angular CLI  
  ```bash
  npm install -g @angular/cli
````

---

### 🛠 Installation

1. **Clone the repo**

   ```bash
   git clone https://github.com/your-username/housing-listings-app.git
   cd housing-listings-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Install JSON Server**

   ```bash
   npm install -D json-server
   ```

---

### 📦 Run the JSON Server

Create a file named `db.json` in the root with mock data like this:

```json
{
  "locations": [
    {
      "id": 1,
      "name": "Hopeful Housing",
      "city": "Chicago",
      "state": "IL",
      "photo": "/assets/photo.jpg",
      "availableUnits": 3,
      "wifi": true,
      "laundry": false
    }
  ]
}
```

Then run:

```bash
npx json-server --watch db.json
```

Server will run at: `http://localhost:3000/locations`

---

### 🌐 Run the Angular App

```bash
ng serve
```

Then open [http://localhost:4200](http://localhost:4200) in your browser.

---

## 📁 Project Structure

```
src/
├── app/
│   ├── housing-location/
│   ├── home/
│   ├── details/
│   └── app.component.*
├── assets/
├── styles.css
db.json
```

---


## 📄 License

MIT – free to use and modify.

```

---

Let me know if you want it tailored for GitHub Pages deployment or Docker setup too.
```
