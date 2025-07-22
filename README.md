# ☀️ Solar + Battery Quote Comparison Report

A clean, modern website built with HTML5, CSS3, and JavaScript to showcase a professional solar quote comparison analysis. Features smooth animations, responsive design, light green accent colors, and interactive PDF download functionality.

## 🌟 Features

### **Design & Aesthetics**
- Clean, modern design with **light green (#7cb342)** as the accent color
- Professional typography using Inter font family
- Smooth fade-in/fade-out transitions throughout
- Responsive design that works on desktop, tablet, and mobile devices
- Gradient backgrounds and subtle shadows for depth

### **Interactive Elements**
- **Fixed navigation bar** with smooth scrolling to sections
- **Fade-in animations** triggered by scrolling
- **Hover effects** on cards, tables, and buttons
- **Clickable quote rows** with PDF download functionality
- **Interactive popup modals** for quote downloads
- **Ripple click effects** for interactive elements
- **Parallax scrolling** on the hero section

### **Content Sections**
1. **Hero Section** - Eye-catching introduction with top recommendation
2. **Executive Summary** - Key findings and recommendation highlight
3. **Usage Analysis** - Interactive stats cards showing electricity data
4. **System Suitability** - Solar potential with visual metrics
5. **Quote Comparison** - Comprehensive table with winner highlighted
6. **Inverter Comparison** - Technology analysis with pros/cons
7. **Financing Details** - Payback and financial information
8. **Incentives Guide** - Federal and state incentive breakdown
9. **Final Recommendation** - Detailed reasoning for the best choice
10. **Glossary** - Technical terms explained

### **PDF Download System**
- **Clickable installer rows** in the quotes table
- **Professional confirmation popup** with smooth animations
- **Automatic PDF download** functionality
- **Success notifications** with visual feedback
- **Mobile-responsive** popup design

## 🎨 Design Highlights

- Light green accent color (#7cb342) with complementary gradients
- Inter font family for modern typography
- Smooth fade-in animations on scroll
- Interactive cards and tables with hover effects
- Fixed navigation with backdrop blur
- Responsive grid layouts that adapt to screen size
- Professional color scheme with excellent contrast ratios

## 📁 Project Structure

```
├── index.html           # Main HTML file
├── styles.css           # CSS styling and animations
├── script.js            # JavaScript functionality
├── README.md            # This file
├── LICENSE              # MIT License
├── .gitignore           # Git ignore file
├── .github/
│   └── workflows/
│       └── deploy.yml   # GitHub Actions deployment
├── data/
│   └── smcc_electric_billing_data.csv  # Usage data (add your file here)
    ├── Quote from Lumina Solar _ EnergySage.pdf # PDF quote
    ├── Quote from Palmetto Solar _ EnergySage.pdf # PDF quote
    ├── Quote from IntegrateSun, LLC _ EnergySage.pdf # PDF quote
    ├── Quote from Nova Solar _ EnergySage.pdf # PDF quote
    └── Quote from Cosmo Solaris _ EnergySage.pdf # PDF quote
```

## 🚀 GitHub Pages Deployment

### **Method 1: Automatic (Recommended)**
1. Push this repository to GitHub
2. The included GitHub Actions workflow will automatically deploy to GitHub Pages
3. Your site will be available at `https://yourusername.github.io/repository-name`

### **Method 2: Manual Setup**
1. Push this repository to GitHub
2. Go to your repository settings
3. Scroll down to "Pages" section
4. Select "Deploy from a branch" as the source
5. Choose "main" branch and "/ (root)" folder
6. Click "Save"
7. Your site will be available at `https://yourusername.github.io/repository-name`

## 🛠️ Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/solar-quote-comparison.git
   cd solar-quote-comparison
   ```

2. **Open in browser or use a local server:**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Navigate to `http://localhost:8000` to view the site**

## 📋 Setup Instructions

### **Add Your Data Files**
1. Place your CSV electricity usage file in the `data/` folder
2. Add your PDF quotes to the `Quotes/` folder
3. Update the file paths in `index.html` if needed

### **Customize Content**
1. Edit `index.html` to update your specific data and information
2. Modify the installer names and details in the quotes table
3. Update the report information in the footer

### **Customize Styling**
Update the CSS variables in `styles.css`:
```css
:root {
    --accent-color: #7cb342;    /* Light green */
    --accent-light: #aed581;    /* Lighter green */
    --primary-color: #2c3e50;   /* Dark blue-gray */
}
```

## 🎯 Key Sections Explained

### **Federal & State Incentives**
- **Investment Tax Credit (ITC)** - 30% federal credit details
- **Maryland State Programs** - Clean energy grants and SREC program
- **Veteran Benefits** - Special financing terms information
- **Tax Exemptions** - Property and sales tax benefits

### **Interactive Quote Comparison**
- **Clickable rows** for PDF downloads
- **Winner highlighting** with visual emphasis
- **Comprehensive metrics** including payback periods
- **Mobile-responsive** table design

### **Technical Analysis**
- **Inverter comparison** with detailed pros/cons
- **System suitability** analysis with visual metrics
- **Production vs usage** breakdown by month

## 📱 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎨 Color Palette

| Color | Hex Code | Usage |
|-------|----------|-------|
| Primary | #2c3e50 | Headlines, text |
| Accent | #7cb342 | Buttons, highlights |
| Accent Light | #aed581 | Gradients, hover states |
| Background | #ffffff | Main background |
| Secondary BG | #f8f9fa | Card backgrounds |
| Text | #333333 | Body text |
| Text Muted | #666666 | Subtle text |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact Information

**Report prepared for:** Billiam Stewart Rodriguez  
**Location:** Lexington Park, MD  
**Report Date:** July 22, 2025

---

## 🏗️ Built With

- **HTML5** - Semantic markup and structure
- **CSS3** - Styling, animations, and responsive design
- **JavaScript (ES6)** - Interactive functionality and animations
- **GitHub Pages** - Hosting and deployment
- **GitHub Actions** - Automated deployment workflow

## 🌟 Acknowledgments

- EnergySage for providing the solar quote platform
- Solar installers for detailed proposals and system designs
- Inter font family for clean, modern typography
- GitHub for providing free hosting via GitHub Pages

---

*Built with ❤️ and ☀️ for a sustainable future*
