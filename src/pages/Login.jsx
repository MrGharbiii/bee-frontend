import React, { Component } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { withRouter } from '../utils/withRouter';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      // Simulate API call
      console.log('Logging in with:', email, password);
      localStorage.setItem('token', 'dummy-token');
      this.props.navigate('/'); // Use the `navigate` function from `withRouter`
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <Container maxWidth="sm">
        <Box sx={{ mt: 4, mb: 4 }}>
          <Typography variant="h4" gutterBottom align="center">
            Login
          </Typography>
          <form onSubmit={this.handleSubmit}>
            <TextField
              label="Email"
              fullWidth
              margin="normal"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
              Login
            </Button>
          </form>
        </Box>
      </Container>
    );
  }
}

// Name the wrapped component before exporting
const LoginWithRouter = withRouter(Login);
export default LoginWithRouter;