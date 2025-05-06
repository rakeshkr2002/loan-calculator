import React from "react";

import "../css/about.css";

const About = () => {
  return (
    <div className="about">
      <h2>About This App </h2>
      <p>
        Thes Loan Calculator App is a modem, single-page web application built
        using React JS and Material Ul. It allows users to calculate loan EMIs
        (Equated Monthly Installments), view a detailed amortization schedule,
        and see real-time currency conversions of their EMI using live exchange
        rates.
      </p>
      <hr />
      <h3>Instructions for Candidates </h3>
      <p>
        Please follow these instructions to complete and submit your project:
      </p>

      <p>● Push the entire project to a public GitHub repository.</p>

      <p>
        ● Make sure to commit regularly with clear messages after completing
        each feature.
      </p>
      <p>● Use the provided EMI formula to perform calculations.</p>
      <p>
        ● Use Context API for global state management (e.g., theme, currency).
      </p>
      <p>
        ● Create custom React hooks for reusable logic (e.g., EMI calculation,
        fetching exchange rates).
      </p>
      <p>● Integrate the ExchangeRate API for live currency conversion.</p>
      <p>● Ensure the app is fully responsive on all screen sizes.</p>
      <p>
        ● Implement both light and dark modes using Material-UI’s theming
        system.
      </p>
      <p>● Add a 404 Not Found page for unmatched routes.</p>
      <p>● Handle runtime errors gracefully by showing an Error Page.</p>
      <p>
        ● Once deployed, add the live deployment link in the About section of
        your GitHub repo.
      </p>

      <p>
        ● Deploy the project on any platform (e.g., Vercel, Netlify, GitHub
        Pages).
      </p>

      <p>
        Your GitHub repository should include a live demo link, and your code
        should be readable, modular, and well-structured.
      </p>

      <hr />
      <h2>Features</h2>

      <p>● Loan EMI calculation using standard financial formulas</p>
      <p>● Dynamic amortization schedule table with monthly breakdown</p>
      <p>
        ● Real-time currency conversion of EMI using a live exchange rate API
      </p>
      <p>● Paginated exchange rate table for 160+ currencies</p>
      <p>● Dark/Light mode toggle for a customizable experience</p>
      <p>● Collapsible header navigation on mobile screens</p>
      <p>● Fully responsive Ul built with Material Ul</p>

      <hr />

      <h2>Technologies Used</h2>
      <p>● React (Hooks, Routing, Context API)</p>
      <p>● Material UI for styling and responsive components</p>
      <p>● Axios for API calls</p>
      <p>● Exchange Rate API for real-time currency conversion</p>
      <hr />
      <h2>EMI Formula Used</h2>
      <p>
        The EMI (Equated Monthly Installment) is calculated using the standard
        formula: EMI [P x R x (1+R) <sup>N</sup> ] / [(1+R)<sup>N</sup> - 1]
      </p>

      <p>● P Principal loan amount </p>
      <p>● R Monthly interest rate (annual rate /12/100)</p>
      <p>● N= Loan duration in months</p>

      <hr />
      <h2>Currency Conversion API</h2>

      <p>
        This app integrates with the free tier of the ExchangeRate-API to fetch
        live exchange rates. API Endpoint Example:
        https://v6.exchangerate-api.com/v6/YOUR API KEY/latest/USD You must
        register and obtain a free API key to use this endpoint. Then, replace
        YOUR_API_KEY in the app code with your actual key.
      </p>
      <hr />

      <h2>Purpose of This App</h2>

      <p>● React fundamentals (state, props, hooks).</p>
      <p>● Component structure and code reusability.</p>
      <p>● Third-party API integration and live data rendering.</p>
      <p>● Working with tables, lists, and pagination.</p>
      <p>● Theme customization (dark/light mode toggle).</p>
      <p>● Error handling and graceful UI fallbacks.</p>
      <p>
        ● Responsive design and collapsible mobile header navigation (In Mobile
        view).
      </p>

      <p>
        For any currency conversion feature to work, make sure the API key is
        valid and the network allows external API calls
      </p>
    </div>
  );
};

export default About;
