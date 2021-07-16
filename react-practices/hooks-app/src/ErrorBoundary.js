import React from 'react';

class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error, errorInfo){
        // we can call log service
        console.log(error, errorInfo)
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
    }

    render(){
      if(this.state.errorInfo){
        return(
            <div>
                <h2>Something went wrong</h2>
                <details style={{whiteSpace:'pre-wrap'}}>
                    {this.state.error && this.state.errorInfo.toString()}
                    <br></br>
                    {this.state.errorInfo.componentStack}
                </details>
            </div>
        )
      }
      return this.props.children;
    }
}

export default ErrorBoundary

// 9766772625