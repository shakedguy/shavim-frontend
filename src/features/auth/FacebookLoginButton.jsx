import React from 'react';

const FacebookLoginButton = ({ onClick }) => {
	return (
		<button
			className={
				'firebaseui-idp-button mdl-button mdl-js-button mdl-button--raised firebaseui-idp-facebook firebaseui-id-idp-button'
			}
			data-provider-id='facebook.com'
			style={{ backgroundColor: '#3b5998' }}
			data-upgraded={',MaterialButton'}
			onClick={onClick}
		>
			<span className={'firebaseui-idp-icon-wrapper'}>
				<img
					className={'firebaseui-idp-icon'}
					alt=''
					src='https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/facebook.svg'
				/>
			</span>
			<span className={'firebaseui-idp-text firebaseui-idp-text-long'}>
				Sign in with Facebook
			</span>
			<span className={'firebaseui-idp-text firebaseui-idp-text-short'}>
				Facebook
			</span>
		</button>
	);
};

export default FacebookLoginButton;
