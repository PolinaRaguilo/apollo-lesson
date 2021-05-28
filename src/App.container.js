import { Mutation, Query } from "@apollo/react-components";
import gql from "graphql-tag";
import App from "./App";

const SET_CURRENT_USER = gql`
  mutation SetCurrentUser($user: User!) {
    setCurrentUser(user: $user) @client
  }
`;

const GET_CURRENT_USER = gql`
  {
    currentUser @client
  }
`;

const AppContainer = () => {
  return (
    <Query query={GET_CURRENT_USER}>
      {({ data }) => (
        <Mutation mutation={SET_CURRENT_USER}>
          {(setCurrentUser) => (
            <App
              currentUser={data.currentUser}
              setCurrentUser={(user) => setCurrentUser({ variables: { user } })}
            />
          )}
        </Mutation>
      )}
    </Query>
  );
};

export default AppContainer;