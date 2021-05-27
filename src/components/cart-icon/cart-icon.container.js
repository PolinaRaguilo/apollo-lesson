import { Mutation, Query } from "@apollo/react-components";
import gql from "graphql-tag";
import CartIcon from "./cart-icon.component";

const TOGGLE_CART_HIDDEN = gql`
  mutation ToggleCartHidden {
    toggleCartHidden @client
  }
`;

const GET_ITEM_COUNT = gql`
  {
    itemCount @client
  }
`;

const CartIconContainer = () => {
  return (
    <Query query={GET_ITEM_COUNT}>
      {({ data }) => (
        <Mutation mutation={TOGGLE_CART_HIDDEN}>
          {(toggleCartHidden) => (
            <CartIcon
              toggleCartHidden={toggleCartHidden}
              itemCount={data.itemCount}
            />
          )}
        </Mutation>
      )}
    </Query>
  );
};

export default CartIconContainer;
