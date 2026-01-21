# Shuja Ud Din - Portfolio Website

A modern, responsive portfolio website showcasing my experience as a Senior iOS Engineer.

## 🚀 Deployment to GitHub Pages

### Option 1: Using Repository Name `ishujaudin.github.io` (Recommended)

This will make your site available at `https://ishujaudin.github.io`

1. **Create a new repository on GitHub:**
   - Go to [GitHub](https://github.com/new)
   - Repository name: `ishujaudin.github.io` (must match your username exactly)
   - Make it public
   - Click "Create repository"

2. **Push your files to GitHub:**
   ```bash
   cd /Users/mac/portfolio
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/ishujaudin/ishujaudin.github.io.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repository settings
   - Scroll down to "Pages" section
   - Under "Source", select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

4. **Wait a few minutes** and your site will be live at `https://ishujaudin.github.io`

### Option 2: Using a Different Repository Name

If you want to use a different repository name (e.g., `portfolio`), your site will be at `https://ishujaudin.github.io/portfolio`

1. Create repository with your desired name
2. Push files as above
3. Enable GitHub Pages (same steps)
4. Your site will be at `https://ishujaudin.github.io/<repository-name>`

## 📝 Adding Your Profile Picture

1. Add your profile picture to the portfolio directory
2. Name it `profile.jpg` (or update the filename in `index.html` line 36)
3. Recommended size: 500x500px or larger (square image works best)
4. Supported formats: JPG, PNG, WebP

## 🎨 Customization

- **Colors**: Edit the CSS variables in `styles.css` (lines 7-16)
- **Content**: Update sections in `index.html`
- **Projects**: Add/remove project cards in the Projects section
- **Skills**: Modify skill tags in the Skills section

## 📱 Features

- ✅ Fully responsive design
- ✅ Smooth scrolling navigation
- ✅ Mobile-friendly hamburger menu
- ✅ Animated sections on scroll
- ✅ Modern gradient hero section
- ✅ Timeline-based experience section
- ✅ Project showcase with App Store links
- ✅ Contact information with social links

## 🔧 Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript
- Font Awesome icons
- Google Fonts (system fonts)

## 📧 Contact

- Email: shuja_uet@hotmail.com
- Phone: +923435235173
- LinkedIn: [linkedin.com/in/shuja-ud-din/](https://linkedin.com/in/shuja-ud-din/)
- GitHub: [github.com/ishujaudin](https://github.com/ishujaudin)

---

**Note**: Make sure to add your profile picture (`profile.jpg`) before deploying, or the placeholder will be shown.
