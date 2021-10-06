import React from "react"
import { Input } from "../Input"
import { Button } from "../Button"
import { FaSearch } from "react-icons/fa"
import { SearchForm } from "./styles"
import { navigate, useLocation } from "@reach/router"
import queryString from "query-string"

export function Search() {

    const [searchTerm, setSearchTerm] = React.useState("");
    console.log("---> searchTerm:", searchTerm); /* Preventing the page refresh. */

    const { search } = useLocation()
    const c = queryString.parse(search)?.c || "";

    const handleSubmit = (e) => {
        e.preventDefault()

        if (c) { //if 'c' exists, meaning if there are categories id's in our url. We then add it to the URL after 's' of searchItem.
            window.location = (`/all-products?s=${encodeURIComponent(searchTerm)}&c=${encodeURIComponent(c)}`)
        } else {
            window.location = (`/all-products?s=${encodeURIComponent(searchTerm)}`) //If there is no c we don't add it.
        }

    }


    return (
        <SearchForm onSubmit={handleSubmit} >

            <Input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.currentTarget.value)}
                placeholder="Search"
            />

            <Button>
                <FaSearch />
            </Button>

        </SearchForm>
    )
}

/*
EXPLANATION:

- searchTerm stores the input value.
- As soon as we click the button the first we want to do is to navigate to the all-products
  page and store whats written in the input in a QueryString called 's'.
  E.G: in the url: /all-products?s=hat
- We create an OnSubmit event that triggers the function 'handleSubmit'. There it will
  navigate us to the /all-products page.
- After '/all-products' we want to add the '?s=' + '${searchTerm}' and then we are passing
  in the URL value of searchTerm. E.G: 'hat'. We add also the encode to avoid special characters.


Making sure that when passing 'searchTerm' in the URL and we select a collection the 'searchTerm'
is preserved.
*/