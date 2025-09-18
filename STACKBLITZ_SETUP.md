# 🚀 Working StackBlitz Demo Setup

## Quick Fix - Create Working Demo

### Option 1: Use the HTML Demo (Immediate)

1. Open `stackblitz-demo.html` in your browser
2. This provides an interactive chat demo that works immediately
3. No setup required - just open the file!

### Option 2: Create StackBlitz Project (Full Demo)

#### Step 1: Create New StackBlitz Project

1. Go to [stackblitz.com](https://stackblitz.com)
2. Click "Create a new project"
3. Select **"React + TypeScript"** template
4. Name it "chatme-demo"

#### Step 2: Copy Project Files

Copy these files from your local project to StackBlitz:

**Essential Files:**

- `package.json` (copy the dependencies)
- `vite.config.ts`
- `tsconfig.json`
- `tsconfig.app.json`
- `tsconfig.node.json`
- `index.html`
- `src/main.tsx`
- `src/App.tsx`
- `src/pages/DemoPage.tsx`
- `src/components/ChatMe.tsx`
- All files in `src/components/`
- All files in `src/config/`
- All files in `src/store/`
- All files in `src/lib/`
- `src/index.css`

#### Step 3: Install Dependencies

In StackBlitz terminal, run:

```bash
npm install
```

#### Step 4: Start Development Server

```bash
npm run dev
```

### Option 3: GitHub Integration (Recommended)

#### Step 1: Push to GitHub

```bash
git add .
git commit -m "Add ChatMe UI library with working demo"
git push origin main
```

#### Step 2: Import to StackBlitz

1. Go to [stackblitz.com](https://stackblitz.com)
2. Click "Import from GitHub"
3. Enter your repository URL: `https://github.com/YOUR_USERNAME/chatme`
4. StackBlitz will automatically set up the project

#### Step 3: Update README

Replace `YOUR_USERNAME` in the StackBlitz URL with your actual GitHub username.

## Working Demo Links

### Immediate Demo (HTML)

- **Local:** Open `stackblitz-demo.html` in your browser
- **Online:** Upload to any web server or GitHub Pages

### Full Interactive Demo

- **Local Development:** `npm run dev` → `http://localhost:5177`
- **StackBlitz:** After following setup above
- **CodeSandbox:** Import repository to CodeSandbox

## Troubleshooting

### Common Issues:

1. **"Module not found" errors:**

   - Make sure all dependencies are in `package.json`
   - Run `npm install` in StackBlitz terminal

2. **TypeScript errors:**

   - Check that all `.tsx` files are properly configured
   - Verify `tsconfig.json` settings

3. **Build fails:**

   - Ensure all imports are correct
   - Check for missing files

4. **Demo not loading:**
   - Verify the development server is running
   - Check browser console for errors

## Demo Features

The working demo includes:

- ✅ Interactive chat interface
- ✅ Message sending and receiving
- ✅ Realistic demo data
- ✅ Contact management
- ✅ Conversation selection
- ✅ Error handling
- ✅ Responsive design

## Next Steps

1. **Test the HTML demo** - Open `stackblitz-demo.html`
2. **Create StackBlitz project** - Follow Option 2 or 3 above
3. **Update README** - Replace placeholder URLs with working ones
4. **Share the demo** - Use the StackBlitz share URL
