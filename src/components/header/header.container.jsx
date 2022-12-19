import React from "react";
import { gql, useQuery } from '@apollo/client';
import HeaderComponent from "./header.component";

const GET_CART_HIDDEN = gql`
{
    cartHidden @client
}
`

const HeaderContainer = () => {
    const { data } = useQuery(GET_CART_HIDDEN);
    return <HeaderComponent hidden={data.cartHidden} />;
};

export default HeaderContainer