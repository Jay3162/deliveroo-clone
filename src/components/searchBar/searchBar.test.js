import { test } from "@craco/craco/lib/cra";
import SearchBar from "./searchBar";


test("ensure that searchbar is loaded", () => {
    const activeobj = SearchBar()

    expect(activeobj).toBeTruthy();
})