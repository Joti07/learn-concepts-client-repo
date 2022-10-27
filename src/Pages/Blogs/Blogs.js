import React from 'react';
import Card from 'react-bootstrap/Card';

const Blogs = () => {
    return (
        <div>
            <Card className='mb-5'>
                <Card.Body>
                    <Card.Title>what is cors?</Card.Title>

                    <Card.Text>
                        CORS stands for Cross-Origin Resource Sharing. It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.

                        In other words, CORS is a browser security feature that restricts cross-origin HTTP requests with other servers and specifies which domains access your resources.
                    </Card.Text>

                </Card.Body>
            </Card>
            <Card className='mb-5'>
                <Card.Body>
                    <Card.Title>Why are you using firebase? What other options do you have to implement authentication?</Card.Title>

                    <Card.Text>

                        Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                        Lets start by listing the various ways through which we can achieve authentication,

                        Cookie-Based authentication
                        Token-Based authentication
                        Third party access(OAuth, API-token)
                        OpenId
                        SAML
                    </Card.Text>

                </Card.Body>
            </Card>
            <Card className='mb-5'>
                <Card.Body>
                    <Card.Title>How does the private route work?</Card.Title>

                    <Card.Text>
                        The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                    </Card.Text>

                </Card.Body>
            </Card>
            <Card className='mb-5'>
                <Card.Body>
                    <Card.Title>What is Node? How does Node work?
                    </Card.Title>

                    <Card.Text>
                        Node.js is an open source server environment.Node.js uses JavaScript on the server
                        It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                    </Card.Text>

                </Card.Body>
            </Card>

        </div>
    );
};

export default Blogs;