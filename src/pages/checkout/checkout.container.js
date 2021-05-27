import { Query } from "@apollo/react-components";
import gql from "graphql-tag";
import CheckoutPage from "./checkout.component";

const GET_CART_ITEMS = gql`
  {
    cartItems @client
  }
`;

const CheckoutContainer = () => {
  return (
    <Query query={GET_CART_ITEMS}>
      {({ data }) => {
        console.log(data.cartItems);
        return <CheckoutPage cartItems={data.cartItems} />;
      }}
    </Query>
  );
};

export default CheckoutContainer;
