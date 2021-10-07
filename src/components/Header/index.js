import React from "react";
import { HeaderWrapper } from "./styles"
import { Cart } from "../Cart"
import { Logo } from "../Logo"
import { Search } from "../Search"
import { Link } from "gatsby" //Importing gatsby Link to use the component below.


export function Header() {
    return (
        <HeaderWrapper>
            <div>
                <Link to="/" > {/* Gatsby link component. Going to the route directory */}
                    <Logo />
                </Link>
            </div>
            <Search />
            <Cart />
        </HeaderWrapper>
    )
}