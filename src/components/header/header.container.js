import { Query } from "@apollo/react-components";
import gql from "graphql-tag";
import Header from "./header.component";

const GET_CART_HIDDEN = gql`
  {
    cartHidden @client
  }
`;

const HeaderContainer = () => {
  return (
    <Query query={GET_CART_HIDDEN}>
      {({ data }) => {
      
        return <Header hidden={data.cartHidden} />;
      }}
    </Query>
  );
};

export default HeaderContainer;
