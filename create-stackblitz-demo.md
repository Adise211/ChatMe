# Creating a StackBlitz Demo

## Quick Setup

### Option 1: GitHub Integration (Recommended)

1. **Push to GitHub:**

   ```bash
   git add .
   git commit -m "Add ChatMe UI library with demo"
   git push origin main
   ```

2. **Create StackBlitz Demo:**

   - Go to [stackblitz.com](https://stackblitz.com)
   - Click "Import from GitHub"
   - Enter your repository URL: `https://github.com/your-username/chatme`
   - StackBlitz will automatically detect the project structure

3. **Update README:**
   - Replace `your-username` in the StackBlitz URL with your actual GitHub username
   - The URL will be: `https://stackblitz.com/fork/github/your-username/chatme`

### Option 2: Direct Upload

1. **Create New StackBlitz Project:**

   - Go to [stackblitz.com](https://stackblitz.com)
   - Click "Create a new project"
   - Select "React + TypeScript" template

2. **Upload Files:**

   - Copy all files from this project to StackBlitz
   - Make sure to include `package.json`, `vite.config.ts`, and all source files

3. **Install Dependencies:**
   - StackBlitz will automatically run `npm install`
   - The project should start with `npm run dev`

## StackBlitz Configuration

The project includes these StackBlitz-specific files:

- `stackblitz.json` - StackBlitz configuration
- `.stackblitzrc` - Alternative configuration format
- `demo-stackblitz.html` - Landing page for the demo

## Testing the Demo

1. **Start the Development Server:**

   - StackBlitz should automatically start `npm run dev`
   - The demo will be available in the preview pane

2. **Test Features:**

   - Click "Live Demo" tab to see the interactive chat
   - Try sending messages and selecting conversations
   - Check the browser console for event logs

3. **Share the Demo:**
   - Use the StackBlitz share URL
   - The URL format is: `https://stackblitz.com/edit/your-project-id`

## Troubleshooting

### Common Issues:

1. **Build Errors:**

   - Check that all dependencies are in `package.json`
   - Ensure TypeScript configuration is correct
   - Verify all imports are working

2. **Demo Not Loading:**

   - Make sure the development server is running
   - Check the browser console for errors
   - Verify the demo data is properly formatted

3. **StackBlitz Integration Issues:**
   - Ensure the repository is public on GitHub
   - Check that all files are committed and pushed
   - Verify the repository structure matches expectations

## Demo Features

The StackBlitz demo includes:

- ✅ Interactive chat interface
- ✅ Realistic demo data (3 contacts, 3 conversations, 9 messages)
- ✅ Message sending and conversation selection
- ✅ Contact information display
- ✅ Error handling demonstration
- ✅ Console logging for debugging

## Next Steps

After creating the StackBlitz demo:

1. Update the README with the correct StackBlitz URL
2. Test all features in the StackBlitz environment
3. Share the demo with potential users
4. Consider creating additional demo scenarios
