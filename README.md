# AI_Agent
# 🔮 AI Agent with Gemini + Model Context Protocol (MCP)

This project is a Node.js-based AI agent using Google's Gemini API combined with the [Model Context Protocol (MCP)](https://modelcontext.org/) for tool-augmented interactions. It supports real-time conversations and tool calling capabilities through an SSE-powered client-server architecture.

## ✨ Features

- 🔗 Uses **Google Gemini API** for natural language processing
- 🧰 Supports **tool usage** via MCP tools
- 📡 Communicates through **Server-Sent Events (SSE)**
- 🗨️ CLI-based interactive chat loop
- 📦 Fully written in modern **ESM JavaScript**

---

## 📁 Project Structure :

ai-agent/
├── client/       # CLI chatbot using Gemini + MCP
│   └── index.js
├── server/       # MCP tool server
│   ├── index.js
│   └── mcp.tool.js
├── .env          # API secrets
├── package.json
└── README.md

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/anshulkotwal/AI_Agent.git
cd ai-agent

### 2. Install Dependencies
npm install

### 3. Set up Environment Variables
GEMINI_API_KEY=your_google_gemini_api_key

### 4. Run the MCP Server
cd server
node index.js

"type": "module"

### 5. Run the client
cd ../client
node index.js


🧠 Available Tools
addTwoNumbers: Adds two numbers.

createPost: Creates a post on X (formerly Twitter).

Tools are defined in server/mcp.tool.js.

📌 Requirements
Node.js 18 or newer

A Gemini API key from Google

Internet connection (for Gemini API)

🛠️ Technologies
Node.js

Google GenAI

Model Context Protocol

Zod for schema validation

🤝 Contributing
Contributions, issues and feature requests are welcome!

Fork the repo

Create a new branch (git checkout -b feature-xyz)

Commit your changes (git commit -m 'Add new feature')

Push to the branch (git push origin feature-xyz)

Open a pull request

📬 Contact
Created by Anshul Kotwal – feel free to reach out!


---

Let me know if you'd like a logo/banner, GitHub issue templates, or actions for automated deployment/docs!
