# 📝 Anonymous Tip Submission App

This is a simple 2-page React web app where users can anonymously submit article tips or business insights. Submissions are stored in a GitHub-hosted JSON file using GitHub's API.

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/Page.git
cd Page
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create a GitHub Personal Access Token

- Go to: [GitHub Tokens](https://github.com/settings/tokens)
- Click **“Generate new token (classic)”**
- Check only the `repo` scope
- Copy the token

### 4. Setup Environment Variables

Create a `.env` file in the root of your project:

```
VITE_GH_OWNER=your-github-username
VITE_GH_REPO=Page
VITE_GH_TOKEN=ghp_yourTokenHere
```

> ✅ Make sure `tips.json` exists in your GitHub repo.

### 5. Run the App

```bash
npm run dev
```

---

## 🌐 Deployment

You can deploy this app using platforms like:
- [Netlify](https://netlify.com)
- [Vercel](https://vercel.com)

Be sure to configure environment variables in your deployment settings.

---

## 🧰 Tech Stack

- **Frontend**: React.js with Vite
- **Styling**: CSS
- **Routing**: React Router
- **Backend**: GitHub REST API (to read/write JSON)
- **Storage**: GitHub-hosted `tips.json` file
- **Deployment**: Netlify / Vercel (Recommended)

---

## ✨ Features

- Anonymous tip submission
- Client-side validation
- Basic CAPTCHA (Math-based)
- Tip archive display
- Autosave form state with `localStorage`
- Input sanitization
- GitHub API integration for storing tips

---

## 📁 File Structure

```
src/
├── components/
│   ├── Captcha.js
│   └── TipCard.js
├── pages/
│   ├── TipForm.js
│   └── TipArchive.js
├── utils/
│   └── githubAPI.js
├── styles/
│   └── styles.css
├── App.jsx
├── main.jsx
public/
├── index.html
```

---

## 📄 License

MIT © Shrivastava19
