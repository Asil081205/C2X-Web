import {
  Brain,
  Code2,
  GitBranch,
  Bug,
  Container,
  Terminal,
  Sparkles,
  Zap,
  Shield,
  Users,
  Clock,
  RefreshCw,
  Globe,
  Server,
  Database,
  Layers,
  Cpu,
  Cloud,
  Lock,
  GitMerge,
  Play,
  Wrench,
  Settings,
  Box,
  Link2,
  Monitor,
  Command,
  FileCode,
  Github,
  ChevronRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Feature {
  id: string;
  slug: string;
  name: string;
  icon: LucideIcon;
  category: string;
  description: string;
  longDescription: string;
  benefits: string[];
  keyFeatures: {
    title: string;
    description: string;
    icon: LucideIcon;
  }[];
  codeExample: {
    language: string;
    code: string;
    caption?: string;
  };
  screenshots: string[];
  workflow: {
    step: number;
    title: string;
    description: string;
  }[];
  specifications: {
    performance: string;
    platforms: string[];
    requirements: string[];
  };
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedFeatures: string[];
  ctaLabel: string;
}

export const FEATURES: Feature[] = [
  {
    id: "1",
    slug: "ai-coding",
    name: "AI-Powered Coding",
    icon: Brain,
    category: "Intelligence",
    description:
      "Write code faster with intelligent completions and suggestions powered by advanced AI.",
    longDescription:
      "C2X's AI coding assistant understands your codebase context and provides intelligent completions, refactoring suggestions, and even generates entire functions from natural language descriptions. Trained on millions of open-source repositories, it adapts to your coding style and helps you write better code with fewer bugs.",
    benefits: [
      "25% faster development speed",
      "Reduced context switching",
      "Fewer syntax errors",
      "Automatic code documentation",
      "Intelligent refactoring suggestions",
    ],
    keyFeatures: [
      {
        title: "Smart Completions",
        description:
          "Get context-aware completions that understand your project structure and dependencies.",
        icon: Sparkles,
      },
      {
        title: "Natural Language to Code",
        description:
          "Describe what you want in plain English and watch the AI generate the code.",
        icon: Brain,
      },
      {
        title: "Intelligent Refactoring",
        description:
          "Safely restructure your code with AI-powered refactoring suggestions.",
        icon: RefreshCw,
      },
      {
        title: "Security Scanning",
        description:
          "Automatically detect and fix security vulnerabilities in your code.",
        icon: Shield,
      },
    ],
    codeExample: {
      language: "typescript",
      code: `// Type this comment and press Tab
// Create a function that fetches user data from an API

// AI will generate:
async function fetchUserData(userId: string): Promise<User> {
  const response = await fetch(\`/api/users/\${userId}\`);
  if (!response.ok) {
    throw new Error(\`Failed to fetch user: \${response.statusText}\`);
  }
  const data = await response.json();
  return data;
}`,
      caption: "AI code generation in action",
    },
    screenshots: [
      "https://placehold.co/1200x700/1a1a2e/ffffff?text=AI+Coding+Demo+1",
      "https://placehold.co/1200x700/1a1a2e/ffffff?text=AI+Coding+Demo+2",
    ],
    workflow: [
      {
        step: 1,
        title: "Start Typing",
        description: "Begin writing your code naturally.",
      },
      {
        step: 2,
        title: "AI Suggests",
        description: "The AI provides intelligent completions.",
      },
      {
        step: 3,
        title: "Review & Accept",
        description: "Review the suggestion and press Tab to accept.",
      },
      {
        step: 4,
        title: "Continue Coding",
        description: "Keep coding with AI assistance throughout.",
      },
    ],
    specifications: {
      performance: "99.9% uptime, <100ms response time",
      platforms: ["Web", "macOS", "Windows", "Linux"],
      requirements: ["Node.js 18+", "Modern browser", "Internet connection"],
    },
    faqs: [
      {
        question: "Is my code private when using AI features?",
        answer:
          "Yes. Your code is processed locally or through our secure, encrypted servers. We never store your code without your explicit permission.",
      },
      {
        question: "Which programming languages does the AI support?",
        answer:
          "The AI supports all major languages including JavaScript, TypeScript, Python, Java, C++, Go, Rust, and many more. New languages are added regularly.",
      },
      {
        question: "Can I train the AI on my codebase?",
        answer:
          "Yes! Enterprise customers can train the AI on their private codebases for even more accurate suggestions.",
      },
    ],
    relatedFeatures: ["monaco-editor", "git-integration", "debugger"],
    ctaLabel: "Try AI Coding",
  },
  {
    id: "2",
    slug: "monaco-editor",
    name: "Monaco Editor",
    icon: Code2,
    category: "Editor",
    description:
      "Experience the power of VS Code's editor in your browser with full IntelliSense.",
    longDescription:
      "The Monaco Editor powers C2X's editing experience. It provides syntax highlighting, IntelliSense, code navigation, and the same editing experience millions of developers love in VS Code, now available in your browser.",
    benefits: [
      "Full IntelliSense support",
      "Syntax highlighting for 50+ languages",
      "Fast and responsive editing",
      "Customizable themes",
      "Multi-cursor editing",
    ],
    keyFeatures: [
      {
        title: "IntelliSense",
        description:
          "Get smart completions with parameter hints and documentation.",
        icon: Sparkles,
      },
      {
        title: "Multi-Cursor Editing",
        description:
          "Edit multiple lines simultaneously with multi-cursor support.",
        icon: Users,
      },
      {
        title: "Syntax Highlighting",
        description:
          "Beautiful syntax highlighting for all major programming languages.",
        icon: Code2,
      },
      {
        title: "Custom Themes",
        description: "Choose from hundreds of themes or create your own.",
        icon: Zap,
      },
    ],
    codeExample: {
      language: "javascript",
      code: `// The Monaco Editor provides full IntelliSense
function greet(name: string) {
  // Type 'name.' to see IntelliSense suggestions
  console.log(\`Hello, \${name}!\`);
}

// Multi-cursor editing: Press Alt+Click to add cursors
// Syntax highlighting: Colors make code easier to read`,
      caption: "Monaco Editor in action",
    },
    screenshots: [
      "https://placehold.co/1200x700/1a1a2e/ffffff?text=Monaco+Editor+Demo+1",
      "https://placehold.co/1200x700/1a1a2e/ffffff?text=Monaco+Editor+Demo+2",
    ],
    workflow: [
      {
        step: 1,
        title: "Open File",
        description: "Open any file in the editor.",
      },
      {
        step: 2,
        title: "Start Editing",
        description: "Begin typing with full IntelliSense support.",
      },
      {
        step: 3,
        title: "Navigate Code",
        description: "Use go-to-definition and find-references.",
      },
      {
        step: 4,
        title: "Save & Sync",
        description: "Save changes and sync with your team.",
      },
    ],
    specifications: {
      performance: "60fps rendering, <50ms keystroke latency",
      platforms: ["Web", "macOS", "Windows", "Linux"],
      requirements: ["Modern browser", "4GB RAM minimum"],
    },
    faqs: [
      {
        question: "Is the Monaco Editor free to use?",
        answer:
          "Yes, the Monaco Editor is open-source and free for both personal and commercial use.",
      },
      {
        question: "Can I add custom extensions?",
        answer:
          "Yes, C2X supports custom extensions built with the Extension API.",
      },
      {
        question: "Does it work offline?",
        answer: "Yes, once the editor is loaded, it works fully offline.",
      },
    ],
    relatedFeatures: ["ai-coding", "git-integration", "debugger"],
    ctaLabel: "Try Editor",
  },
  {
    id: "3",
    slug: "git-integration",
    name: "Git Integration",
    icon: GitBranch,
    category: "Version Control",
    description:
      "Seamless Git workflow with visual diff, merge, and conflict resolution.",
    longDescription:
      "C2X's Git integration brings the full power of Git into your IDE. Visual diff tools, merge conflict resolution, branch management, and commit history are all accessible without leaving the editor.",
    benefits: [
      "Visual diff and merge tools",
      "Branch management",
      "Commit history visualization",
      "Conflict resolution",
      "PR integration",
    ],
    keyFeatures: [
      {
        title: "Visual Diff",
        description:
          "See changes side-by-side with beautiful diff highlighting.",
        icon: GitBranch,
      },
      {
        title: "Branch Management",
        description: "Create, switch, and manage branches with ease.",
        icon: RefreshCw,
      },
      {
        title: "PR Integration",
        description: "Review pull requests directly within the editor.",
        icon: Shield,
      },
      {
        title: "Commit History",
        description: "Visualize your repository's commit history.",
        icon: Clock,
      },
    ],
    codeExample: {
      language: "bash",
      code: `# Git commands integrated into C2X
git checkout -b feature/awesome
git add .
git commit -m "Add awesome feature"
git push origin feature/awesome

# Visual diff shows changes side-by-side`,
      caption: "Git workflow in C2X",
    },
    screenshots: [
      "https://placehold.co/1200x700/1a1a2e/ffffff?text=Git+Integration+Demo+1",
      "https://placehold.co/1200x700/1a1a2e/ffffff?text=Git+Integration+Demo+2",
    ],
    workflow: [
      {
        step: 1,
        title: "Clone Repository",
        description: "Clone your repository into C2X.",
      },
      {
        step: 2,
        title: "Create Branch",
        description: "Create a feature branch.",
      },
      {
        step: 3,
        title: "Make Changes",
        description: "Edit files and commit changes.",
      },
      {
        step: 4,
        title: "Push & PR",
        description: "Push changes and create a pull request.",
      },
    ],
    specifications: {
      performance: "Supports repositories up to 100GB",
      platforms: ["Web", "macOS", "Windows", "Linux"],
      requirements: ["Git 2.0+", "Modern browser"],
    },
    faqs: [
      {
        question: "Does it support GitHub, GitLab, and Bitbucket?",
        answer:
          "Yes, C2X integrates with all major Git platforms including GitHub, GitLab, and Bitbucket.",
      },
      {
        question: "Can I use Git hooks?",
        answer: "Yes, Git hooks are fully supported in C2X.",
      },
    ],
    relatedFeatures: ["ai-coding", "monaco-editor", "debugger"],
    ctaLabel: "Try Git Integration",
  },
  {
    id: "4",
    slug: "debugger",
    name: "Built-in Debugger",
    icon: Bug,
    category: "Debugging",
    description:
      "Debug your code with breakpoints, watch variables, and interactive console.",
    longDescription:
      "The C2X debugger provides a full debugging experience with breakpoints, variable watching, call stack inspection, and an interactive console. Debug JavaScript, TypeScript, and Node.js applications without leaving your editor.",
    benefits: [
      "Breakpoint debugging",
      "Variable inspection",
      "Interactive console",
      "Call stack view",
      "Hot reload support",
    ],
    keyFeatures: [
      {
        title: "Breakpoints",
        description: "Set breakpoints by clicking the gutter.",
        icon: Bug,
      },
      {
        title: "Variable Inspection",
        description: "Hover over variables to see their values.",
        icon: Sparkles,
      },
      {
        title: "Call Stack",
        description: "View the call stack and navigate through frames.",
        icon: RefreshCw,
      },
      {
        title: "Console Access",
        description: "Access the console directly from the debugger.",
        icon: Terminal,
      },
    ],
    codeExample: {
      language: "javascript",
      code: `// Set a breakpoint by clicking the line number
function calculateTotal(items) {
  let total = 0;
  for (let item of items) {
    // Breakpoint here to inspect item
    total += item.price;
  }
  return total;
}

// Watch variables in the debug panel
const result = calculateTotal(cart);`,
      caption: "Debugging in action",
    },
    screenshots: [
      "https://placehold.co/1200x700/1a1a2e/ffffff?text=Debugger+Demo+1",
      "https://placehold.co/1200x700/1a1a2e/ffffff?text=Debugger+Demo+2",
    ],
    workflow: [
      {
        step: 1,
        title: "Set Breakpoint",
        description: "Click the gutter to set a breakpoint.",
      },
      {
        step: 2,
        title: "Start Debugging",
        description: "Run your application in debug mode.",
      },
      {
        step: 3,
        title: "Inspect Variables",
        description: "Hover over variables to inspect values.",
      },
      {
        step: 4,
        title: "Step Through",
        description: "Step through code execution line by line.",
      },
    ],
    specifications: {
      performance: "0.1ms overhead, supports large applications",
      platforms: ["Web", "macOS", "Windows", "Linux"],
      requirements: ["Node.js 14+", "Modern browser"],
    },
    faqs: [
      {
        question: "Does it support remote debugging?",
        answer:
          "Yes, C2X supports remote debugging for Node.js and browser applications.",
      },
      {
        question: "Can I debug in production?",
        answer:
          "Yes, but we recommend using monitoring tools for production debugging.",
      },
    ],
    relatedFeatures: ["ai-coding", "monaco-editor", "docker"],
    ctaLabel: "Try Debugger",
  },
  {
    id: "5",
    slug: "docker",
    name: "Docker Integration",
    icon: Container,
    category: "Containers",
    description:
      "Build, run, and manage Docker containers directly from your IDE.",
    longDescription:
      "C2X's Docker integration allows you to build, run, and manage containers without leaving your editor. View logs, manage volumes, and connect to containers seamlessly.",
    benefits: [
      "Built-in container management",
      "Log streaming",
      "Volume management",
      "Image building",
      "Docker Compose support",
    ],
    keyFeatures: [
      {
        title: "Container Management",
        description: "Start, stop, and manage containers from the sidebar.",
        icon: Container,
      },
      {
        title: "Log Streaming",
        description: "Stream container logs directly in your editor.",
        icon: Terminal,
      },
      {
        title: "Image Building",
        description: "Build Docker images with one click.",
        icon: RefreshCw,
      },
      {
        title: "Compose Support",
        description: "Full Docker Compose integration.",
        icon: Users,
      },
    ],
    codeExample: {
      language: "dockerfile",
      code: `# Dockerfile for a Node.js app
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD ["node", "index.js"]`,
      caption: "Dockerfile in C2X",
    },
    screenshots: [
      "https://placehold.co/1200x700/1a1a2e/ffffff?text=Docker+Integration+Demo+1",
      "https://placehold.co/1200x700/1a1a2e/ffffff?text=Docker+Integration+Demo+2",
    ],
    workflow: [
      {
        step: 1,
        title: "Create Dockerfile",
        description: "Create a Dockerfile in your project.",
      },
      { step: 2, title: "Build Image", description: "Build the Docker image." },
      {
        step: 3,
        title: "Run Container",
        description: "Run the container with one click.",
      },
      {
        step: 4,
        title: "View Logs",
        description: "Stream logs and manage containers.",
      },
    ],
    specifications: {
      performance: "Supports 100+ containers simultaneously",
      platforms: ["Web", "macOS", "Windows", "Linux"],
      requirements: ["Docker 20.10+", "Modern browser"],
    },
    faqs: [
      {
        question: "Does it require Docker Desktop?",
        answer:
          "Yes, Docker Desktop is required for local container management.",
      },
      {
        question: "Can I use Docker with remote servers?",
        answer: "Yes, C2X supports remote Docker connections.",
      },
    ],
    relatedFeatures: ["ssh-development", "git-integration", "debugger"],
    ctaLabel: "Try Docker Integration",
  },
  {
    id: "6",
    slug: "ssh-development",
    name: "SSH Development",
    icon: Terminal,
    category: "Remote",
    description:
      "Develop on remote servers using SSH with full editor functionality.",
    longDescription:
      "C2X's SSH development feature allows you to edit and run code on remote servers. Access files, run commands, and manage processes on any server with SSH access, all from your local editor.",
    benefits: [
      "Remote file editing",
      "Terminal access",
      "Process management",
      "Port forwarding",
      "Secure connections",
    ],
    keyFeatures: [
      {
        title: "Remote Editing",
        description: "Edit files on remote servers directly.",
        icon: Terminal,
      },
      {
        title: "Terminal Access",
        description: "Open a terminal session on the remote server.",
        icon: Sparkles,
      },
      {
        title: "Port Forwarding",
        description: "Forward ports to access remote services.",
        icon: RefreshCw,
      },
      {
        title: "Secure Connection",
        description: "All connections are encrypted with SSH.",
        icon: Shield,
      },
    ],
    codeExample: {
      language: "bash",
      code: `# Connect to a remote server
ssh user@example.com -p 22

# Edit files directly in C2X
vim /var/www/app/index.js

# Run commands on the server
npm start &`,
      caption: "SSH development workflow",
    },
    screenshots: [
      "https://placehold.co/1200x700/1a1a2e/ffffff?text=SSH+Demo+1",
      "https://placehold.co/1200x700/1a1a2e/ffffff?text=SSH+Demo+2",
    ],
    workflow: [
      {
        step: 1,
        title: "Connect to Server",
        description: "Enter your SSH connection details.",
      },
      {
        step: 2,
        title: "Access Files",
        description: "Browse and edit files on the server.",
      },
      {
        step: 3,
        title: "Run Commands",
        description: "Execute commands in the integrated terminal.",
      },
      {
        step: 4,
        title: "Manage Processes",
        description: "Monitor and manage running processes.",
      },
    ],
    specifications: {
      performance: "Supports 100+ concurrent connections",
      platforms: ["macOS", "Windows", "Linux"],
      requirements: ["SSH client", "Modern browser"],
    },
    faqs: [
      {
        question: "Is my connection secure?",
        answer:
          "Yes, all connections are encrypted using SSH with key-based authentication.",
      },
      {
        question: "Can I use SSH with Windows?",
        answer:
          "Yes, SSH is fully supported on Windows through WSL or native SSH.",
      },
    ],
    relatedFeatures: ["docker", "debugger", "git-integration"],
    ctaLabel: "Try SSH Development",
  },
];

export default FEATURES;
