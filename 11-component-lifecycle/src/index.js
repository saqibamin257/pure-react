import React from 'react';
import ReactDOM from 'react-dom';
class ErrorCatcher extends React.Component {
    state = { error: null }
    componentDidCatch(error, info) {
        console.log('[componentDidCatch]', error);
        this.setState({ error: info.componentStack });
    }
    render() {
        if (this.state.error) {
            return (
                <div>
                    An error occurred: {this.state.error}
                </div>
            )
        }
        return this.props.children;
    }
}
class LifecycleDemo extends React.Component {
    // Initialize state first
    // (happens before constructor)
    state = { counter: 0 };
    // The first method called after initializing state
    constructor(props) {
        super(props);
        console.log('[constructor]');
        console.log(' State already set:', this.state);
    }
    // Called after initial render is done.
    //
    // This is a good place to kick off network
    // requests to fetch data.
    componentDidMount() {
        console.log('[componentDidMount]', 'Mounted.');
    }
    // ** Don't forget to make this `static`! **
    // Called before initial render, and any time new props
    // are received.
    // Not commonly used.
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('[getDerivedStateFromProps]');
        console.log(' Next props:', nextProps);
        console.log(' Prev state:', prevState);
        return null;
    }
    // Called before each render. Return false to prevent rendering.
    //
    // This (and PureComponent) are the primary ways to optimize
    // class components. If you notice performance is slow,
    // measure with the profiler, then try implementing this method
    // to prevent needless renders. React is fast out of the box,
    // and a few extra renders won't hurt. I wouldn't recommend
    // implementing this method unless you know you need it.
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[shouldComponentUpdate]', 'Deciding to update');
        return true;
    }
    // Called after render() but before updating the DOM
    // A good time to make calculations based on old DOM nodes.
    // The value returned here is passed into componentDidUpdate
    getSnapshotBeforeUpdate(nextProps, nextState) {
        console.log('[getSnapshotBeforeUpdate]', 'About to update...');
        return `Time is ${Date.now()}`;
    }
    // Called after render() and after updating the DOM. The whole
    // render/commit/update cycle is done.
    //
    // This is a good time to check if a prop has changed,
    // by checking prevProps.whatever === this.props.whatever.
    // Useful for re-fetching data when a record ID changes.
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[componentDidUpdate]', 'Updated.');
        console.log(' snapshot:', snapshot);
    }
    // Called right before the component is unmounted
    // Time to clean up! Remove any event listeners, cancel
    // timers, etc.
    componentWillUnmount() {
        console.log('[componentWillUnmount]', 'Goodbye cruel world.');
    }
    handleClick = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    };
    causeErrorNextRender = () => {
        // Set a flag to cause an error on the next render
        // This will cause componentDidCatch to run in the parent
        this.setState({
            causeError: true
        });
    };
    render() {
        console.log('[render]');
        if (this.state.causeError) {
            throw new Error('oh no!!');
        }
        return (
            <div>
                <span>Counter: {this.state.counter}</span>
                <button onClick={this.handleClick}>
                    Click to increment
</button>
                <button onClick={this.causeErrorNextRender}>
                    Throw an error
</button>
            </div>
        );
    }
}
ReactDOM.render(
    <ErrorCatcher>
        <LifecycleDemo />
    </ErrorCatcher>,
    document.querySelector('#root')
);