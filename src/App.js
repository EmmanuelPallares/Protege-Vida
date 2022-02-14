import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { gql, useQuery } from "urql";
import { request } from "graphql-request";
import Navbar from "./components/NavBar/Navbar";
import About from "./components/About/About";
import Ourservices from "./components/Ourservices/Ourservices";
import Choose from "./components/Choose/Choose";
import Footer from "./components/Footer/Footer";
import Product from "./Product";

const graphqlAPI = process.env.REACT_PUBLIC_GRAPHQL_ENDPOINT;

const ProductsQuery = gql`
  {
    products {
      slug
      name
    }
  }
`;

function App() {
  const [result] = useQuery({ query: ProductsQuery });
  const { data, fetching, error } = result;

  if (fetching) return <p>Fetching products</p>;
  if (error) return <p>Oh no... {error.message}</p>;
  return (
    <div>
      <div>
        <ul>
          {data.products.map(({ slug, name }) => (
            <li key={slug}>{name}</li>
          ))}
        </ul>
      </div>
      <Router>
        <Navbar />
        <About />
        <Ourservices />
        <Choose />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
