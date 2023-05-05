import React from 'react';

class ErrorBoundry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    static getDrivedStateFromError(error) {
        console.log('getDrivedStateFromError ', error);
        return {
            hasError: true
        }
    }

    componentDidCatch(error, errorInfo) {
        console.log('error ', error, 'errorInfo ', errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <div>Something is wrong.</div>;
        }
        return this.props.children;
    }

}

export default ErrorBoundry;