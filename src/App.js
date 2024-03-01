import { ApolloSandbox } from '@apollo/sandbox/react';

function App() {
  return (
    <div className='apollo-container' style={{ height: "100vh"}}>
      <ApolloSandbox
        initialEndpoint="http://54.167.207.218:4003/graphql"
        // includeCookies= false
      />
    </div>
  );
}

export default App;
