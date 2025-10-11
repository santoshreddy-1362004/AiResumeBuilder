# Contributing to Professional AI Resume Builder

Thank you for your interest in contributing to the Professional AI Resume Builder! This document provides guidelines and information for contributors.

## 🤝 How to Contribute

### Reporting Issues
- Use the GitHub issue tracker
- Provide detailed information about the bug
- Include steps to reproduce the issue
- Add screenshots if applicable

### Suggesting Features
- Check existing issues and discussions first
- Create a detailed feature request
- Explain the use case and benefits
- Consider implementation complexity

### Pull Requests
1. Fork the repository
2. Create a feature branch from `main`
3. Make your changes
4. Test thoroughly
5. Submit a pull request with a clear description

## 💻 Development Setup

### Prerequisites
- Node.js 18+
- npm or yarn
- Git
- Code editor (VS Code recommended)

### Local Development
```bash
# Clone the repository
git clone https://github.com/santoshreddy-1362004/AiResumeBuilder.git
cd AiResumeBuilder/resume

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Add your Gemini API key to .env.local

# Start development server
npm run dev
```

## 📝 Coding Standards

### Code Style
- Use ES6+ features
- Follow React best practices
- Use meaningful variable names
- Add comments for complex logic
- Maintain consistent formatting

### Component Guidelines
- Use functional components with hooks
- Keep components small and focused
- Use proper prop types
- Handle loading and error states
- Ensure accessibility compliance

### Git Workflow
- Use descriptive commit messages
- Follow conventional commit format
- Keep commits atomic and focused
- Rebase before submitting PR

## 🧪 Testing

### Manual Testing
- Test all form inputs and validations
- Verify API integration works correctly
- Check responsive design on different devices
- Test error handling scenarios

### Code Quality
- Run ESLint before committing
- Ensure no console errors
- Verify build process works
- Test production build locally

## 🚀 Deployment

### Vercel Deployment
- Changes to `main` branch auto-deploy
- PR previews are automatically generated
- Environment variables managed in Vercel dashboard

### Environment Variables
- `VITE_GEMINI_API_KEY` - Required for AI functionality
- Never commit API keys to repository
- Use `.env.local` for local development

## 📚 Resources

### Documentation
- [React Documentation](https://reactjs.org/docs)
- [Vite Documentation](https://vitejs.dev/guide)
- [Gemini API Documentation](https://ai.google.dev/docs)

### Tools
- [VS Code](https://code.visualstudio.com/)
- [React Developer Tools](https://reactjs.org/blog/2015/09/02/new-react-developer-tools.html)
- [ESLint Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## 🎯 Project Goals

### Primary Objectives
- Provide professional resume optimization
- Ensure ATS compatibility
- Maintain high code quality
- Deliver excellent user experience

### Technical Goals
- Modern React architecture
- Performance optimization
- Security best practices
- Accessibility compliance

## 📞 Contact

For questions or discussions:
- GitHub Issues: [Create an issue](https://github.com/santoshreddy-1362004/AiResumeBuilder/issues)
- Email: santoshreddy1362004@gmail.com

Thank you for contributing to make this project better! 🚀