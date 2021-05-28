import { Query } from "@apollo/react-components";
import gql from "graphql-tag";
import Header from "./header.component";

const GET_HEADER_INF = gql`
  {
    cartHidden @client
    currentUser @client
  }
`;

const HeaderContainer = () => {
  return (
    <Query query={GET_HEADER_INF}>
      {({ data }) => {
        return (
          <Header hidden={data.cartHidden} currentUser={data.currentUser} />
        );
      }}
    </Query>
  );
};

export default HeaderContainer;
