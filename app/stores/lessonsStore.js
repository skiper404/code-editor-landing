import { defineStore } from "pinia";

export const useLessonsStore = defineStore("LessonsStore", () => {
  const lessonsTags = [
    "Productivity",
    "Development",
    "Design",
    "Utility",
    "Integration",
    "Testing",
    "Debugging",
    "Formatting",
    "Collaborration",
    "Documentation",
  ];

  const lessonsData = [
    {
      title: "Prettier",
      description:
        "Automatically format your code to ensure consistent style across your project.",
      tags: ["Utility", "Formatting"],
      videos: [
        { title: "Why Use Prettier?", videoDuration: "4:15" },
        { title: "Setup and Configuration", videoDuration: "5:45" },
        { title: "Prettier with VS Code", videoDuration: "6:10" },
        { title: "Prettier + ESLint Integration", videoDuration: "7:05" },
      ],
      content: `
        Prettier enforces a consistent coding style by parsing your code and re-printing it with its own rules.
        This saves time, avoids style debates,and keeps your codebase clean.
      `,
    },
    {
      title: "Git Lens",
      description:
        "Supercharge Git within VS Code with commit visualization and blame annotation.",
      tags: ["Collaboration", "Development"],
      videos: [
        { title: "Introduction to GitLens", videoDuration: "5:20" },
        { title: "Exploring Line History", videoDuration: "6:00" },
        { title: "Commit Visualization", videoDuration: "7:15" },
        { title: "Blame Annotations Explained", videoDuration: "5:40" },
      ],
      content: `
        GitLens helps developers understand the history of their codebase. You can
        trace commits, visualize branches, and identify authors of specific lines
        of code—all without leaving VS Code.
    `,
    },
    {
      title: "Live Share",
      description:
        "Real-time collaborative development from the comfort of your favourite editor.",
      tags: ["Development", "Collaboration"],
      videos: [
        { title: "Setting Up Live Share", videoDuration: "4:55" },
        { title: "Pair Programming in Real Time", videoDuration: "6:30" },
        { title: "Sharing Terminals and Debugging", videoDuration: "7:00" },
      ],
      content: `
        Live Share allows multiple developers to edit and debug together in real
        time. Perfect for pair programming, code reviews, and mentoring sessions.
    `,
    },
    {
      title: "ESLint",
      description:
        "Find and fix problems in your JavaScript/TypeScript code automatically.",
      tags: ["Utility", "Debugging"],
      videos: [
        { title: "Installing ESLint", videoDuration: "5:10" },
        { title: "Common ESLint Rules", videoDuration: "6:40" },
        { title: "Fixing ESLint Errors", videoDuration: "7:25" },
        { title: "Integrating ESLint with Prettier", videoDuration: "8:05" },
      ],
      content: `
        ESLint scans your code for problems and enforces coding conventions. It
        helps you avoid bugs, improves readability, and makes your codebase more
        maintainable.
    `,
    },
    {
      title: "Code Runner",
      description:
        "Run code snippets in multiple programming languages with a single click.",
      tags: ["Utility", "Formatting"],
      videos: [
        { title: "Running Snippets in VS Code", videoDuration: "4:25" },
        { title: "Supported Languages Overview", videoDuration: "5:50" },
        { title: "Customizing Code Runner Settings", videoDuration: "6:15" },
      ],
      content: `
        Code Runner executes code snippets directly inside VS Code. Great for quick
        testing and experimenting without switching to a terminal.
    `,
    },
    {
      title: "REST Client",
      description:
        "Send HTTP requests and view responses directly in Visual Studio Code.",
      tags: ["Utility", "Development"],
      videos: [
        { title: "Getting Started with REST Client", videoDuration: "5:35" },
        { title: "Sending GET and POST Requests", videoDuration: "6:25" },
        { title: "Working with Authentication", videoDuration: "7:10" },
      ],
      content: `
        REST Client lets you test APIs directly in VS Code. No need for external
        tools like Postman—you can write requests in a file and execute them instantly.
    `,
    },
    {
      title: "Code Spell Checker",
      description:
        "Catch common spelling errors in your source code and documentation.",
      tags: ["Utility", "Documentation"],
      videos: [
        { title: "Installing the Spell Checker", videoDuration: "4:50" },
        { title: "Highlighting Mistakes in Code", videoDuration: "5:20" },
        {
          title: "Custom Dictionaries and Ignore Lists",
          videoDuration: "6:45",
        },
      ],
      content: `
        Code Spell Checker finds common spelling mistakes in your variables,
        comments, and documentation. This improves project professionalism and
        reduces miscommunication.
    `,
    },
    {
      title: "Docker",
      description: "Manage Docker containers and images directly from VS Code.",
      tags: ["Development", "Integration"],
      videos: [
        { title: "Setting Up Docker Extension", videoDuration: "6:05" },
        { title: "Managing Containers in VS Code", videoDuration: "7:15" },
        { title: "Building and Pushing Images", videoDuration: "8:00" },
      ],
      content: `
        Docker integration in VS Code makes it easy to work with containers,
        images, and registries. You can manage your entire container workflow
        without leaving the editor.
    `,
    },
  ];

  const activeTag = ref(null);

  const setActiveTag = (tag) => {
    activeTag.value = tag;
  };

  return { lessonsTags, activeTag, setActiveTag, lessonsData };
});
