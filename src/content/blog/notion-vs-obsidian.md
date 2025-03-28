---
import Layout from "../layouts/Layout.astro";

const notionPros = [
  "Best for Team Collaboration - Real-time editing, comments, mentions, and shared workspaces.",
  "All-in-One Productivity Hub - Combines note-taking, project management, wikis, and databases.",
  "Highly Structured & Organized - Database features for tracking tasks, OKRs, and product specs.",
  "User-Friendly & Cross-Platform - Works on Windows, macOS, iOS, and Android.",
  "Web Clipper for Research - Save articles and insights easily."
];

const notionCons = [
  "Requires Internet for most features.",
  "Performance issues with large databases.",
  "Privacy concerns (cloud storage).",
  "Subscription cost for unlimited uploads and collaboration."
];

const obsidianPros = [
  "Best for Deep Knowledge Management - Bidirectional linking and research capabilities.",
  "Markdown-Based & Offline-First - Fully local, developer-friendly.",
  "Highly Customizable with Plugins - Task management, Kanban boards, and more.",
  "Graph View for Visualizing Ideas - Great for mapping relationships between notes."
];

const obsidianCons = [
  "No built-in collaboration (no real-time editing).",
  "Learning curve (Markdown and plugins require setup).",
  "No native task or project management (requires plugins).",
  "Cloud sync requires a paid add-on (or manual setup)."
];
---

<Layout title="Notion vs. Obsidian - A Power User's Perspective">
  <div class="container">
    <h1>Notion vs. Obsidian: A Power User's Perspective for Product Managers</h1>
    <p>As a <strong>product manager</strong> with <strong>3+ years of experience using both Notion and Obsidian</strong>, I’ve explored their strengths and limitations extensively.</p>
    
    <!-- Logos -->
    <div class="logos">
      <img src="/images/obsidian.png" alt="Obsidian Logo" width="150">
      <img src="/images/notion.png" alt="Notion Logo" width="150">
    </div>

    <h2>🚀 Notion: The Collaborative Powerhouse</h2>
    <h3>✅ Pros</h3>
    <ul>
      {notionPros.map(pro => <li>{pro}</li>)}
    </ul>

    <h3>❌ Cons</h3>
    <ul>
      {notionCons.map(con => <li>{con}</li>)}
    </ul>

    <h2>🔥 Obsidian: The Knowledge Powerhouse</h2>
    <h3>✅ Pros</h3>
    <ul>
      {obsidianPros.map(pro => <li>{pro}</li>)}
    </ul>

    <h3>❌ Cons</h3>
    <ul>
      {obsidianCons.map(con => <li>{con}</li>)}
    </ul>

    <h2>🏆 Which One Should You Choose?</h2>
    <p><strong>✔ Notion</strong> → Best for team collaboration, structured workflows, and project management.</p>
    <p><strong>✔ Obsidian</strong> → Best for personal knowledge management, deep thinking, and offline-first workflow.</p>

    <h2>🚀 Final Verdict</h2>
    <p><strong>For teamwork:</strong> Notion wins.</p>
    <p><strong>For privacy & research:</strong> Obsidian is superior.</p>
    <p>If possible, use both to get the best of both worlds.</p>
  </div>

  <style>
    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      font-family: Arial, sans-serif;
    }
    .logos {
      display: flex;
      justify-content: center;
      gap: 20px;
      margin-bottom: 20px;
    }
    h1 {
      text-align: center;
    }
    h2 {
      margin-top: 20px;
      color: #333;
    }
    ul {
      list-style-type: disc;
      margin-left: 20px;
    }
    p {
      font-size: 16px;
      line-height: 1.6;
    }
  </style>
</Layout>
