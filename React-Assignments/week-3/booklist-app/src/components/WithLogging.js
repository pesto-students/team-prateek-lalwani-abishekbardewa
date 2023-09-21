import React from 'react';

function WithLogging(WrappedComponent) {
	return class extends React.Component {
		componentDidMount() {
			console.log(`Rendering ${WrappedComponent.name}`);
		}

		render() {
			return <WrappedComponent {...this.props} />;
		}
	};
}

export default WithLogging;
