# Portfolio Website

A personal portfolio website built with React to showcase projects and skills.

## Features

- Modern, responsive design
- Portfolio items with expandable details
- YouTube video embeddings for project demonstrations
- Category filtering and search functionality
- Clean, maintainable code structure

## Technologies

- React
- React Router
- React YouTube
- CSS

## Project Structure

```
/public               - Static assets and HTML file
  ├── index.html
  ├── manifest.json
  └── favicon.ico
/src                  - Source code of the application
  ├── components      - React components
  │     ├── App.js
  │     ├── Header.js
  │     ├── Navigation.js
  │     ├── Footer.js
  │     ├── PortfolioList.js
  │     ├── PortfolioItem.js
  │     ├── CategoryTabs.js
  │     └── SearchBar.js
  ├── context         - Context for state management
  │     └── PortfolioContext.js
  ├── data            - Mock portfolio data
  │     └── mockData.js
  ├── services        - API service (using mock data)
  │     └── api.js
  └── styles          - CSS styles for the application
         ├── index.css
         ├── App.css
         ├── Header.css
         ├── Navigation.css
         ├── Footer.css
         ├── PortfolioList.css
         ├── PortfolioItem.css
         ├── SearchBar.css
         └── CategoryTabs.css
.gitignore            - Git configuration file
package.json          - Project dependencies and scripts
README.md             - This file
```

## Installation

Make sure you have Node.js (v14.0.0 or above) installed.

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

## Running the Application

Start the development server with:

```bash
npm start
```

- The app runs in development mode.
- Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
- The page will reload if you make edits.

## Building for Production

To build the app for production, run:

```bash
npm run build
```

This creates an optimized production-ready build in the `/build` folder.

## Deployment

Deploy the contents of the `/build` folder to any static hosting service such as Netlify, Vercel, or GitHub Pages.

## Testing

Run tests (if available) with:

```bash
npm test
```

This project uses the default tests setup provided by create-react-app.

## Contributing

Contributions are welcome!  
Feel free to open issues or submit pull requests to improve this project.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- Uses mock data from `/src/data/mockData.js` for development.
- Built following modern React best practices and responsive design principles.

