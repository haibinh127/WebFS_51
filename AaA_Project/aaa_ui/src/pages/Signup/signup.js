import mainLogo from './logo-red.png';
import './signup.css';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Signup() {
    return (
        <>
            <div className="logo-navbar">
                <img className="logo-image" src={mainLogo} alt="logo" />
            </div>
            <div className="form-container">
                <div className="form-wrapper">
                    <h3 className="status-text">Register</h3>
                    <Form >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Username" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <div className="navigate mt-2">
                            Do you already have an account? <Link to="/login" className="login-link">Login</Link>
                        </div>
                        <br />

                        <button className="btn-signin">
                            Sign up
                        </button>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default Signup;