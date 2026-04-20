# ⚾ Atlantis War Room: Target Acquisition Board

The Atlantis War Room is an enterprise-grade React dashboard simulating a Trade Deadline targeting system. Designed to mirror a "Bloomberg Terminal for Baseball," it provides front-office executives with high-density data, sub-millisecond filtering, and interactive trend visualizations to evaluate prospects instantly on the clock.

## 💼 The Product Vision
"Get Players Better." While game-level data is useful, front offices need to make multi-million dollar decisions in minutes during the Trade Deadline. Relying on slow, paginated UI tables to evaluate players is an unacceptable bottleneck. The Atlantis War Room solves this by using a high-performance frontend architecture that keeps critical player data, injury risk, and trend analytics on a single, lightning-fast pane of glass.

## 🏗️ Architecture & Tech Stack
* **Framework:** React (v18+)
* **Language:** TypeScript (Typed for strict enterprise reliability)
* **Styling:** Tailwind CSS v4 (Rapid, consistent enterprise terminal aesthetic)
* **Data Visualization:** Recharts (Animated trend analysis)
* **Icons:** `lucide-react` (Standardized professional iconography)

## 🧮 Engineering & Product Decisions
1. **Sub-Millisecond Filtering:** By managing state locally and leveraging React’s `useMemo` hook, the Targets Acquisition Board can instantly filter through player grids by name or position without freezing the browser or requiring expensive network requests.
2. **Enterprise-Grade TSX:** Leveraged strict TypeScript interfaces to guarantee the structure of the mock data and chart configurations, reducing frontend bugs and facilitating code maintainability.
3. **Bloomberg Terminal Aesthetic:** Employed Tailwind CSS and custom theme variables to create a high-density, dark-mode terminal UI that places critical data at the front of the executive's view, mimicking professional trading terminals.
4. **Integrated Trend Visualization:** Implemented Recharts Line Charts with custom animations and dynamic styling, allowing for rapid 5-week moving average trend analysis directly beside the player profile.

---

## 🛠️ How to Run Locally

### Prerequisites
* Node.js (v18+)
* npm

### Installation Steps

```bash
# Clone the repository
git clone [https://github.com/anthonydevito/war-room-ui](https://github.com/anthonydevito/war-room-ui)

# Navigate to the project directory
cd war-room-ui

# Install dependencies
npm install
```

### Run the Application

```bash
# Start the Vite development server
npm run dev
```

Navigate to http://localhost:5173 in your browser.

### 📸 Project Preview

<img width="1763" height="909" alt="WarRoomPt2" src="https://github.com/user-attachments/assets/e590d018-5c05-47c8-8f94-9ad9be774810" />



Dashboard Features
Targets Acquisition Board: A real-time player grid featuring advanced metrics, a risk badge system, and an interactive "Trade Value" progress bar.

Executive Profile: A detailed side-panel view that loads the selected player's profile and dynamic Recharts trend visualization.
