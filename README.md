#   Code to Image

# 🚀 Overview

Code to Image is a web application that allows you to convert your code snippets into beautifully styled PNG images. It provides various customization options such as background selection, syntax highlighting, padding adjustments, and multi-language support.

# 🔧 Technologies Used

This project is built using modern web technologies and JavaScript libraries:

1 Next.js - React framework for server-side rendering and static site generation.

2.Tailwind CSS - Utility-first CSS framework for styling.

3.html2canvas - Captures and converts HTML elements into images.

4.lucide-react - Icon library for UI enhancements.


5.re-resizable - Enables resizable containers.

6.react-ace - Code editor with syntax highlighting.

7.react-outside-click-handler - Handles clicks outside an element to close popups or dropdowns.

📂 Project Structure

The project follows a well-organized structure:
```
/app
  ├── global.css             # Global styles
  ├── layout.tsx            # Layout component
  ├── page.tsx              # Main page component

  
/components
  ├── BackgroundSelector.tsx # Allows users to choose a background
  ├── CodeEditor.tsx        # Code editor component
  ├── Footer.tsx            # Footer section
  ├── HeroSection.tsx       # Hero section with introduction
  ├── LanguageSelector.tsx  # Select programming language
  ├── PaddingSelector.tsx   # Adjust padding settings
  ├── ThemeSelector.tsx     # Change theme styles

/node_modules              # Dependencies
/public/icons              # Icons in .png, .svg formats
/utils/utilities.tsx       # Utility functions


/.gitignore                # Ignore files for Git
/next-env.d.ts             # TypeScript environment settings
/next.config.js            # Next.js configuration
/package-lock.json         # Dependency lock file
/package.json              # Project dependencies
/postcss.config.js         # PostCSS configuration
/README.md                 # Project documentation
/tailwind.config.ts        # Tailwind CSS configuration
/tsconfig.json             # TypeScript configuration

```


# 🌟 Features:

📜 Supports multiple programming languages.

🎨 Customizable themes and background colors.

🏗 Adjustable padding for better code presentation.

🔗 Simple and user-friendly interface.

📷 One-click image export.



# 🖥️ Demo

Web Application Preview:

![code-img](https://github.com/user-attachments/assets/c58f42a1-f074-4255-9fc5-c5bd3b8d49da)

 

#  Getting Started
1.Clone the repository:
```
git clone https://github.com/yourusername/code-to-image.git
cd code-to-image
```

2. Install dependencies:
```
npm install
# or
yarn install
```


3.Run the development server:
```
npm run dev
# or
yarn dev
```

4.Open http://localhost:3000 in your browser.
