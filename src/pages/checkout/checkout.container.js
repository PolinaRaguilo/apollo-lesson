import { Query } from "@apollo/react-components";
import gql from "graphql-tag";
import CheckoutPage from "./checkout.component";

const GET_CART_ITEMS_AND_PRICE = gql`
  {
    cartItems @client
    total @client
  }
`;

const CheckoutContainer = () => {
  return (
    <Query query={GET_CART_ITEMS_AND_PRICE}>
      {({ data }) => {
        console.log(data.total);
        return <CheckoutPage cartItems={data.cartItems} total={data.total} />;
      }}
    </Query>
  );
};

export default CheckoutContainer;
