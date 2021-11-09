import mainLogo from './logo-red.png';
import './login.css';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Login() {
    return (
        <>
            <div className="logo-navbar">
                <img className="logo-image" src={mainLogo} alt="logo" />
            </div>
            <div className="form-container">
                <div className="login-form-wrapper">
                    <h3 className="status-text">Login</h3>
                    <Form >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <div className="navigate mt-2">
                            Do not have an account? <Link to="/signup" className="signup-link">Register</Link>
                        </div>
                        <br />

                        <button className="btn-signin">
                            Sign in
                        </button>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default Login;