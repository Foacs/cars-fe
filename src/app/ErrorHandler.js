import React from "react";

class ErrorHandler extends React.Component {
  constructor(props) {
    super(props);
    this.state = { redirect: false };
  }

  static getDerivedStateFromError(error) {
    // If the error is an unknown route, redirect to the home page
    return { redirect: error.message === "Unknown route" };
  }

  render() {
    if (this.state.redirect) {
      return (
        <html>
          <head>
            <meta httpEquiv="Refresh" content="0; url=/#/home" />
            <title>Error</title>
          </head>
        </html>
      );
    }

    return this.props.children;
  }
}

export default ErrorHandler;
