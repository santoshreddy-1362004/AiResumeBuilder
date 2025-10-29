# 🤖 Professional AI Resume Builder

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20App-blue?style=for-the-badge&logo=vercel)](https://ai-resume-builder-five-dusky.vercel.app/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
[![React](https://img.shields.io/badge/React-19.1.1-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.7-purple?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Groq](https://img.shields.io/badge/Groq-API-orange?style=for-the-badge&logo=ai)](https://groq.com/)

> **Enterprise-grade AI-powered resume and cover letter optimization platform with ATS compatibility analysis**

🌟 **[Live Application](https://ai-resume-builder-five-dusky.vercel.app/)** - Try it now!

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Live Demo](#-live-demo)
- [Technology Stack](#-technology-stack)
- [Getting Started](#-getting-started)
- [Deployment](#-deployment)
- [API Integration](#-api-integration)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)
- [Support](#-support)

---

## 🎯 Overview

The **Professional AI Resume Builder** is a cutting-edge web application that leverages artificial intelligence to create optimized resumes and cover letters. Built with modern React architecture and powered by **Groq's Lightning-Fast AI**, this platform provides comprehensive career document optimization with real-time ATS (Applicant Tracking System) analysis.

### 🎪 **Key Highlights**
- **⚡ Lightning-Fast AI** powered by Groq's infrastructure with Llama 3.1 model
- **🆓 Completely Free** - No API costs or usage limits
- **🎯 ATS Optimization** with keyword analysis and scoring
- **🎨 Professional Corporate Design** with responsive layout
- **⚡ Real-time Analysis** providing actionable insights
- **🔒 Enterprise-Grade Security** with environment-based API management

---

## ✨ Features

### 🚀 **Core Functionality**
| Feature | Description |
|---------|-------------|
| **AI Resume Optimization** | Intelligent content enhancement using Llama 3.1-8B model |
| **Cover Letter Generation** | Personalized cover letters with customizable tone |
| **ATS Compatibility Analysis** | Real-time scoring and optimization suggestions |
| **Keyword Matching** | Identify missing keywords and optimization opportunities |
| **Professional Templates** | Clean, corporate-grade design templates |
| **Responsive Design** | Optimized for desktop, tablet, and mobile devices |

### 🎨 **User Experience**
- **Clean, Professional Interface** with intuitive navigation
- **Real-time Form Validation** with helpful error messages
- **Progressive Enhancement** with loading states and feedback
- **Accessibility Compliant** following WCAG guidelines
- **Cross-browser Compatibility** tested on major browsers

### 🔒 **Security & Performance**
- **Environment Variable Management** for secure API handling
- **GitHub Secret Scanning Compliant** - No hardcoded API keys
- **Client-side Error Handling** with graceful degradation
- **Optimized Bundle Size** with code splitting and lazy loading
- **SEO Optimized** with meta tags and semantic HTML
- **Lightning-Fast Response Times** with Groq's optimized infrastructure

---

## 🌐 Live Demo

**🔗 [https://ai-resume-builder-five-dusky.vercel.app/](https://ai-resume-builder-five-dusky.vercel.app/)**

### 📱 **Try the Application:**
1. Visit the live demo link
2. Fill in your company and job details
3. Paste a job description
4. Add your current resume (optional)
5. Generate AI-powered optimization
6. Review your personalized results

---

## 🛠 Technology Stack

### **Frontend**
- ![React](https://img.shields.io/badge/React-19.1.1-61DAFB?logo=react&logoColor=white) **React 19** - Modern UI library
- ![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?logo=vite&logoColor=white) **Vite** - Fast build tool and dev server
- ![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-7952B3?logo=bootstrap&logoColor=white) **Bootstrap 5** - Responsive CSS framework
- ![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black) **Modern JavaScript** - ES6+ features

### **AI & API**
- ![Groq](https://img.shields.io/badge/Groq-Lightning%20Fast%20AI-FF6B35?logo=ai&logoColor=white) **Groq API** - Ultra-fast AI inference
- ![Llama](https://img.shields.io/badge/Llama-3.1--8B--Instant-4B8BBE?logo=meta&logoColor=white) **Llama 3.1-8B** - Advanced language model
- ![REST API](https://img.shields.io/badge/REST-API-FF6B6B) **REST API Integration** - Seamless data communication
- ![Gemini](https://img.shields.io/badge/Gemini-2.0%20(Alternative)-4285F4?logo=google&logoColor=white) **Gemini Support** - Alternative AI provider

### **Deployment & DevOps**
- ![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white) **Vercel** - Serverless deployment platform
- ![GitHub](https://img.shields.io/badge/GitHub-100000?logo=github&logoColor=white) **GitHub** - Version control and CI/CD
- ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=white) **ESLint** - Code quality and formatting

---

## 🚀 Getting Started

### **Prerequisites**
- Node.js 18+ and npm
- Groq API key (free)
- Modern web browser

### **Installation**

1. **Clone the repository:**
   ```bash
   git clone https://github.com/santoshreddy-1362004/AiResumeBuilder.git
   cd AiResumeBuilder/resume
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment setup:**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your Groq API key to `.env.local`:
   ```env
   VITE_GROQ_API_KEY=your_groq_api_key_here
   ```
   
   **Optional:** For Gemini API alternative:
   ```env
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   ```
   http://localhost:3000
   ```

### **Build for Production**
```bash
npm run build
npm run preview
```

---

## 🌍 Deployment

### **Deploy to Vercel (Recommended)**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/santoshreddy-1362004/AiResumeBuilder)

1. **One-click deployment:**
   - Click the "Deploy with Vercel" button above
   - Connect your GitHub account
   - Set the root directory to `resume`

2. **Environment variables:**
   - Add `VITE_GROQ_API_KEY` in Vercel dashboard
   - Get your free API key from [Groq Console](https://console.groq.com/)
   - Optional: Add `VITE_GEMINI_API_KEY` for alternative AI provider

3. **Automatic deployment:**
   - Every push to main branch triggers deployment
   - Preview deployments for pull requests

### **Alternative Deployment Options**
- **Netlify:** Drag and drop the `dist` folder
- **GitHub Pages:** Use GitHub Actions for automated deployment
- **AWS S3:** Static website hosting with CloudFront CDN

---

## 🔗 API Integration

### **Groq AI Configuration (Primary)**

```javascript
// Environment-based API configuration
const apiKey = import.meta.env.VITE_GROQ_API_KEY;
const apiUrl = 'https://api.groq.com/openai/v1/chat/completions';

// Secure API call with error handling
const response = await fetch(apiUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`
  },
  body: JSON.stringify({
    model: "llama-3.1-8b-instant",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.7,
    max_tokens: 2000
  })
});
```

### **Getting Your Free Groq API Key**
1. Visit [Groq Console](https://console.groq.com/)
2. Create a free account
3. Generate an API key
4. Add it to your environment variables

### **Alternative: Google Gemini AI Configuration**

```javascript
// Fallback API configuration
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const apiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

// Alternative API implementation
const response = await fetch(apiUrl, {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
    'X-goog-api-key': apiKey
  },
  body: JSON.stringify({
    "contents": [{ "parts": [{ "text": prompt }] }]
  })
});
```

### **API Comparison**

| Feature | Groq API | Gemini API |
|---------|----------|------------|
| **Cost** | 🆓 Free | 💰 Quota Limited |
| **Speed** | ⚡ Ultra Fast | 🐌 Moderate |
| **Model** | Llama 3.1-8B | Gemini 2.0 Flash |
| **Rate Limits** | Generous | Restrictive |
| **Setup** | Simple | Complex |

---

## 📸 Screenshots

### 🖥️ **Desktop Experience**
![Desktop View](https://via.placeholder.com/800x600/667eea/ffffff?text=Desktop+View+-+Professional+AI+Resume+Builder)

### 📱 **Mobile Responsive**
![Mobile View](https://via.placeholder.com/375x667/764ba2/ffffff?text=Mobile+View+-+Responsive+Design)

### 📊 **AI Analysis Results**
![Analysis Results](https://via.placeholder.com/800x600/3b82f6/ffffff?text=AI+Analysis+Results+-+ATS+Optimization)

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch:** `git checkout -b feature/amazing-feature`
3. **Commit changes:** `git commit -m 'Add amazing feature'`
4. **Push to branch:** `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### **Development Guidelines**
- Follow the existing code style
- Add comments for complex logic
- Test thoroughly before submitting
- Update documentation as needed

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License - Feel free to use this project for personal and commercial purposes.
```

---

## 🆘 Support

### **Get Help**
- 🐛 **Bug Reports:** [GitHub Issues](https://github.com/santoshreddy-1362004/AiResumeBuilder/issues)
- 💡 **Feature Requests:** [GitHub Discussions](https://github.com/santoshreddy-1362004/AiResumeBuilder/discussions)
- 📧 **Email Support:** [Contact Developer](mailto:santoshreddy1362004@gmail.com)

### **Documentation**
- 📚 **API Documentation:** See `DEPLOYMENT.md`
- 🔧 **Setup Guide:** Follow installation instructions above
- 🎯 **Usage Examples:** Check the live demo

---

## 🏆 Achievements

- ✅ **Production Ready** - Deployed and accessible globally
- ✅ **Mobile Optimized** - Responsive design for all devices  
- ✅ **AI Powered** - Advanced language model integration with dual API support
- ✅ **Security First** - Environment-based configuration, GitHub compliant
- ✅ **Performance Optimized** - Lightning-fast AI responses with Groq infrastructure
- ✅ **Cost Effective** - Free AI API with no usage limitations
- ✅ **Enterprise Grade** - Professional UI/UX design and robust error handling

---

## 🚀 Recent Updates

### **v2.0.0 - Groq AI Integration** (Latest)
- ⚡ **Lightning-Fast AI Responses** with Groq's optimized infrastructure
- 🆓 **Completely Free** - No API costs or quota limitations
- 🔒 **Enhanced Security** - Removed all hardcoded API keys, GitHub compliant
- 🎯 **Improved UX** - Added loading states and better error messaging
- 🔄 **Dual AI Support** - Both Groq and Gemini API compatibility
- 📱 **Better Mobile Experience** - Enhanced responsive design

### **Previous Versions**
- **v1.2.0** - Professional UI redesign and corporate styling
- **v1.1.0** - ATS optimization and keyword analysis features  
- **v1.0.0** - Initial release with Gemini AI integration

---

## ⭐ Show Your Support

If this project helped you, please consider giving it a ⭐ on GitHub!

**[🌟 Star this repository](https://github.com/santoshreddy-1362004/AiResumeBuilder)**

---

<div align="center">
  <p>Built with ❤️ by <a href="https://github.com/santoshreddy-1362004">Santosh Reddy</a></p>
  <p>
    <a href="https://ai-resume-builder-five-dusky.vercel.app/">Live Demo</a> •
    <a href="#getting-started">Getting Started</a> •
    <a href="#contributing">Contributing</a> •
    <a href="#support">Support</a>
  </p>
</div>