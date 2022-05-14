import styled from "styled-components";
import Navbar from "../Components/Navbar";
import Announcements from "../Components/Announcements";
import Products from "../Components/Products";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer"
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useState } from "react";
const Container = styled.div``
const Title = styled.h1`
margin: 20px;
`
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
`
const Filter = styled.div`
margin: 20px;
${mobile({margin: "0px 20px", display: "flex", flexDirection:"column"})}
`
const FilterText = styled.span`
font-size: 20px;
font-width: 600;
margin-right: 20px;
${mobile({marginRight: "0px"})}
`
const Select = styled.select`
padding: 10px;
margin-right:20px;
${mobile({margin: "10px 0px"})}
`
const Option = styled.option`

`
const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  
  const [filter, setFilters] = useState({});
  const [sort, setSorts] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filter,
      [e.target.name]: value,
    });
  };
  return (
    <Container>
      <Navbar/>
      <Announcements/>
      <Title>{cat}</Title>
      <FilterContainer>
          <Filter>
              <FilterText>Filter Products:</FilterText>
              <Select name="color" onChange={handleFilters}>
                  <Option disabled>
                      Color
                  </Option>
                  <Option>red</Option>
                  <Option>white</Option>
                  <Option>black</Option>
                  <Option>blue</Option>
                  <Option>yellow</Option>
                  <Option>green</Option>
              </Select>
              <Select name="size" onChange={handleFilters}>
                  <Option disabled selected>
                      Size
                  </Option>
                  <Option>XS</Option>
                  <Option>S</Option>
                  <Option>M</Option>
                  <Option>L</Option>
                  <Option>XL</Option>
                  <Option>XLL</Option>
              </Select>
               </Filter>
          <Filter><FilterText>Sort Products</FilterText>
          <Select onChange={(e) => setSorts(e.target.value)}>
              <Option value="newest" >Newest</Option>
              <Option value="asc">Price (asc)</Option>
              <Option value="desc">Price (desc)</Option>
          </Select>
           </Filter>
      </FilterContainer>
      <Products cat={cat} filter={filter} sort={sort}/>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default ProductList
