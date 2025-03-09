import React from 'react';
import { useNavigate } from 'react-router-dom';

// Higher-Order Component (HOC) to provide navigation functionality
const withRouter = (WrappedComponent) => {
  return (props) => {
    const navigate = useNavigate();
    // Pass the `navigate` function as a prop to the wrapped component
    return <WrappedComponent {...props} navigate={navigate} />;
  };
};

// Export the withRouter function as a named export
export { withRouter };