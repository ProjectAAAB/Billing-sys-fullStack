import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "./../components/Navbar";
import { ShopProducts } from "./../MenuItems";
import { Button } from "./../components/Button";
import { FaPlus, FaMinus } from "react-icons/fa";
import axios from "axios";

const Container = styled.div`
  margin: 1rem 2rem;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const InfoContainer = styled.div`
  display: flex;
  align-items: center;
`;
const CostContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.h3`
  font-size: 1rem;
  padding: 1rem;
`;
const Qty = styled.h3`
  padding: 1rem;
`;
const Cost = styled.h3`
  padding: 1rem;
`;

const Input = styled.input`
  padding: 1rem;
`;
const Label = styled.label``;
const Form = styled.form``;

var productArr = [];
function Menu() {
  const [product, setProduct] = useState({
    productName: "",
    quantity: "",
  });
  const [qty, setQty] = useState(0);
  const [totalcost, settotalCost] = useState(0);
  const [phoneNumber, setPHnumber] = useState(0);
  const [email, setEmail] = useState("");
  const handleProduct = async (e, id) => {
    var itemCost = 0;
    e.preventDefault();
    const item = await ShopProducts.find((item) => item.id === id);
    itemCost = item.cost;
    await setProduct({
      productName: item.productName,
      quantity: qty,
    });
    settotalCost(totalcost + itemCost * qty);
    await productArr.push(product);
    setQty(0);
  };
  const HandleSubmit = async () => {
    productArr.shift();
    const res = await axios.post("http://localhost:5000/api/orders", {
      products: productArr,
      amount: totalcost,
      phoneNumber: phoneNumber,
      email: email,
    });
    console.log(res);
  };
  console.log(productArr);
  return (
    <Container>
      <Navbar />
      <Form onSubmit={HandleSubmit}>
        {ShopProducts.map((item) => (
          <Wrapper>
            <InfoContainer>
              <Title>{item.productName}</Title>
            </InfoContainer>
            <CostContainer>
              <Label>Cost</Label>
              <Cost>{item.cost}</Cost>
              <Label>Enter qty</Label>
              <Input id={item.id} onChange={(e) => setQty(e.target.value)} />
            </CostContainer>
            <Button
              fontColor={"white"}
              padding={"1rem"}
              color={"#0575E6"}
              width={"10%"}
              hoverColor={"#0865c2"}
              onClick={(e) => handleProduct(e, item.id)}
            >
              Add
            </Button>
          </Wrapper>
        ))}
        <Label>Enter phone number</Label>
        <Input onChange={(e) => setPHnumber(e.target.value)} />
        <Label>Enter email</Label>
        <Input onChange={(e) => setEmail(e.target.value)} />
        <Button
          fontColor={"white"}
          padding={"1rem"}
          color={"#0575E6"}
          width={"10%"}
          hoverColor={"#0865c2"}
          type="submit"
        >
          Buy
        </Button>
      </Form>
    </Container>
  );
}

export default Menu;
