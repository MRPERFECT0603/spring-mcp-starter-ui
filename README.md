# Spring MCP Starter UI

A lightweight React-based UI for interacting with a Spring-powered MCP (Model Context Protocol) server. This dashboard allows users to dynamically discover tools exposed by a backend and execute them via a clean interface.

---

## 🚀 Features

- Connects to MCP backend (`/mcp` endpoint)
- Dynamically fetches available tools
- Displays tool metadata (name, description)
- Execute tools with custom JSON inputs
- View real-time responses from backend
- Built with Vite + React + TailwindCSS

---

## 🏗️ Architecture

```
UI (React)
   ↓
MCP HTTP API (/mcp)
   ↓
Spring MCP Backend
   ↓
Annotated Java Methods (@McpExpose)
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── ToolList.jsx
│   ├── ToolCard.jsx
│   ├── ToolExecutor.jsx
│
├── services/
│   └── mcpApi.js
│
├── App.jsx
├── main.jsx
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/MRPERFECT0603/spring-mcp-starter-ui.git
cd spring-mcp-starter-ui
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Start Development Server

```bash
npm run dev
```

App will run on:
```
http://localhost:5173
```

---

## 🔗 Backend Requirement

Make sure your Spring MCP server is running at:

```
http://localhost:8001/mcp
```

---

## 📡 MCP API Flow Used

### 1. Initialize

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "initialize"
}
```

---

### 2. Fetch Tools

```json
{
  "jsonrpc": "2.0",
  "id": 2,
  "method": "tools/list"
}
```

---

### 3. Execute Tool

```json
{
  "jsonrpc": "2.0",
  "id": 3,
  "method": "tools/call",
  "params": {
    "name": "toolName",
    "arguments": {
      "key": "value"
    }
  }
}
```

---

## 🧠 How It Works

1. UI initializes MCP session  
2. Fetches available tools from backend  
3. Displays tools dynamically  
4. User inputs arguments  
5. Tool is executed via MCP  
6. Response is rendered in UI  

---

## 🛠️ Configuration

If backend URL changes, update:

```js
// src/services/mcpApi.js
const BASE_URL = "http://localhost:8001/mcp";
```

---

## 🧪 Example Use Case

If backend exposes:

```java
@McpExpose(name = "sum")
public int sum(int a, int b)
```

Then UI allows:

Input:
```json
{
  "a": 5,
  "b": 10
}
```

Output:
```
15
```

---

## ⚠️ Known Limitations

- No schema validation in UI yet  
- Manual JSON input required  
- No authentication layer  
- Static backend URL  

---

## 🔮 Future Improvements

- Auto-generated forms from schema  
- Authentication support  
- Tool grouping / categorization  
- Streaming responses  
- Chat-based MCP interaction  

---

## 🤝 Contributing

1. Fork the repo  
2. Create a feature branch  
3. Commit changes  
4. Open a PR  

---

## 📄 License

MIT License

---

## 👨‍💻 Author

Built by MRPERFECT0603