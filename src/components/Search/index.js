import React from "react"
import { Input } from "../Input"
import { Button } from "../Button"
import { FaSearch } from "react-icons/fa"
import { SearchForm } from "./styles"

export function Search() {
    return (
        <SearchForm onSubmit={e => e.preventDefault()} > {/* Preventing the page refresh. */}
            <Input placeholder="Search" />
            <Button>
                <FaSearch />
            </Button>
        </SearchForm>
    )
}