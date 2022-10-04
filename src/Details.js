import { Component } from "react";
import { useParams } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext, { useThemeContext } from "./ThemeContext";

class Details extends Component {
  state = { loading: true };

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`
    );
    const json = await res.json();

    this.setState(Object.assign({ loading: false }, json.pets[0]));
  }

  render() {
    if (this.state.loading) {
      return <h2>loading...</h2>;
    }

    const { name, animal, breed, city, state, description, images } =
      this.state;

    return (
      <div className="details">
        <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${city}, ${state}`}</h2>
          <ThemeContext.Consumer>
            {([theme, setTheme]) => (
              <button
                style={{ backgroundColor: theme }}
                onClick={() => setTheme("hotpink")}
              >{`Adopt ${name}`}</button>
            )}
          </ThemeContext.Consumer>
          <button>{`Adopt ${name}`}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

const WrappedDetails = () => {
  // make use react hooks in class components with HOC pattern
  const params = useParams();

  // make consume context like this preferable in class components
  const theme = useThemeContext();
  return (
    <ErrorBoundary>
      <Details params={params} theme={theme} />;
    </ErrorBoundary>
  );
};

export default WrappedDetails;
