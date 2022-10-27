import React from 'react';
import { Accordion } from 'react-bootstrap';
const FAQ = () => {
    return (
        <div>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What is the purpose of the react router?</Accordion.Header>
                    <Accordion.Body>
                        React Router is a standard library for routing in React.
                        It enables the navigation among views of various components in a React Application,
                        allows changing the browser URL, and keeps the UI in sync with the URL.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header>How does context API works?</Accordion.Header>
                    <Accordion.Body>
                        The React Context API is a way for a React app to effectively produce global variables
                        that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier,
                        lighter approach to state management using Redux.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header>Describe useRef Hook</Accordion.Header>
                    <Accordion.Body>
                        The useRef hook is the new addition in React 16.8. Before proceeding to this article there is a prerequisite to know about the ref in react.
                        The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. <br /> const refContainer = useRef(initialValue); <br />
                        The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component.
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>

        </div>
    );
};

export default FAQ;