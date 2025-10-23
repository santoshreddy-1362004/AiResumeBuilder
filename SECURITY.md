# Security Policy

## Reporting Security Vulnerabilities

If you discover a security vulnerability, please report it responsibly by:

1. **Do not open a public issue** - Security vulnerabilities should not be publicly disclosed
2. **Contact the maintainer** directly through GitHub private messages or email
3. **Provide detailed information** about the vulnerability and potential impact

## Recent Security Issues Resolved

### API Key Exposure (Resolved: October 23, 2025)

**Issue**: Google Gemini API keys were accidentally hardcoded in source code files, creating a serious security vulnerability where malicious actors could scrape GitHub repositories for exposed secrets.

**Affected Files**:
- `/src/pages/Home.jsx`

**Resolution**:
- ✅ Removed all hardcoded API keys from source code
- ✅ Updated code to use environment variables exclusively
- ✅ Enhanced `.env.example` with security warnings and instructions
- ✅ Verified `.gitignore` properly excludes environment files
- ✅ Added proper error handling for missing API keys

**Immediate Actions Required**:
1. **Rotate the exposed API key immediately** on Google AI Studio dashboard
2. **Set up new API key** as environment variable `VITE_GEMINI_API_KEY`
3. **Update Vercel deployment** with new environment variables

## Security Best Practices

### Environment Variables
- Never commit `.env` files to version control
- Use `.env.example` for documentation only
- Set environment variables in deployment platform (Vercel dashboard)
- Use the `VITE_` prefix for client-side variables in Vite applications

### API Key Management
- Rotate API keys regularly
- Use least-privilege access principles
- Monitor API usage for unusual activity
- Set up usage limits and alerts

### Code Security
- Never hardcode secrets in source code
- Use environment variables for all sensitive configuration
- Regularly scan repositories for exposed secrets
- Implement proper error handling that doesn't expose sensitive information

## Environment Setup Instructions

### Local Development
1. Copy `.env.example` to `.env.local`
2. Replace placeholder values with actual API keys
3. Never commit `.env.local` to version control

### Production Deployment (Vercel)
1. Add environment variables in Vercel dashboard
2. Use the same variable names as in `.env.example`
3. Ensure variables are set for both Preview and Production environments

## Security Checklist

Before deploying or committing code:

- [ ] No hardcoded API keys or secrets in source code
- [ ] Environment variables properly configured
- [ ] `.env` files added to `.gitignore`
- [ ] Proper error handling for missing environment variables
- [ ] API keys have appropriate usage limits set
- [ ] Regular security audits scheduled

## Contact

For security-related concerns, please contact the project maintainer through:
- GitHub: [@santoshreddy-1362004](https://github.com/santoshreddy-1362004)
- Repository: [AiResumeBuilder](https://github.com/santoshreddy-1362004/AiResumeBuilder)

## Updates

This security policy will be updated as needed to address new threats and vulnerabilities.

Last Updated: October 23, 2025