import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"

function Header() {
  return (
      <>
    <header>
      <Link to="/">
        <img src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAAAgVBMVEX33x4AAAD95R+sohZbUwv64R7/6R/BtBj/6yD/7SD44h//7yDx3B7hzxxmYA0ABAByaw9MRQmNhBKTiRO/sBh9dRDMvRkwKwaYjhPr1h0iIgWAeRDUxBqkmBVdWQxAPgi1pxcwMAcpKgZUUQtNSgo6OAgZGQMUFANFRwoeHQQICwHL/pSvAAAD00lEQVR4nO2Z7XKiMBSGSWyiIkGKwIqAiLa67f1f4IbSlQSSIDS4szPnnfZHY8Cnycn5iuOAQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQ6L8SEaWegbko/+G/WD3lZwQsWt6VKL4Ar9PTzq+2CH2eX7JFvsa2EfACtbr0Xo/d5QVJOhSpZQgJ4aXzcoKTEvV0Llyr22FCIG7WB6j1ZnUhDAjEe1cTcOUWGfQIJgK0Tewx6BHcQE/ADYJZswctwqowESBUbuZGIOxqRkA7W1uhQ6DhAAFC6dwIW+nrPssgeL2JI9fEEoEOgSwlgtDbULpxo6odseeeNAh4JxJEtPk+TI/NwGtObQHoV8EXhuN2GL/wv297qx5aZwu/hWEhgBJ2QG/M4hIYEH4Jw57wP+NTsbacM2gQXB2Co8lrZkAQ44Mqk5kfwRETlcx6ovQIAo6FYX4o/wWCFKS2CzrjXuj8QoIkBekcubMRwVmhjrJ8MxOEDkH20F+6LN1Z7FKfL3z0GFBZeDPshzZrovs+Aq8iQvsQhtzxTcXAjSK1fERNGfRBzYBCu/WUqY5gZw1DFdncDVM1hVmlYUCZxYxhoKbUVHR8IZ5QRzSiS0Vd28gawwCCg73ipka4ppYYhhBqCKWH4PW1+yyEOnE+KX1EuHoaQt1sSfzPHsLNjjk8hlCvBMt6EHbKykcR+AldpT2jWD8XoXYT3Z5DbmMnxiBwCHqSEPY2dmIcAvdV4nyh1JsNQbHOVDyf/sRvld5rDFOporEm5daXSQDYk7oj0huPUr7gRtW7138+Eh547X8+KLJZngMx65EaOoGAsGZ1LyHuNbV+ikBZvZNiz1A6ZmFbyqTf44tulial1sexADzgfHWQyrZUJqmYKBf478Q2PJ5kBuKJD4w8EQTfY39wz7tWksOLmmGSiFa/E5M04krF5jgPTZmw5EcX1zcgeCN5mm2TAWDZ/aAyWePvK5PGQFqNKvvlOhVt9wljeSTfNVTftke7SUpVz05ZfvI7H4yK1iTqPI0+Dt3IdzeF3lw++1yde5FyZOMBH/vvlXW9h38aD81tNDJKETb0wqy1fV0l1XlgbNakWl5RH0I6SpxqmKCc4JfMne1IruaGGabczBi3uJOLEm/IdqbdDRmuOXa9YCBnBl2VbGKqgBP1fdNB1VPDrOsGBOLpDRceJvol+2egrtYJzn1VKXULpi7BX4iT7BPPBVvpzjf3yIuuTVwW+vkPQ6xoUmSx7/tBvF96G2OvgGC6zhdhHPjHox+HRU6pnd4CoRjzihA/dhXPMerZjjvPzT0IBALNpj9pWC/IBMxzsgAAAABJRU5ErkJggg==" />
      </Link>
      <h6>Js Methods at Your Fingertips.</h6>
    </header>
    </>
  );
}

export default Header;
