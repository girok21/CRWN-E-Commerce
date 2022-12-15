import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;
export const ImageContainer = styled.img`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;
export const Price = styled.span`
  display: flex;
  width: 23%;
`;
export const Arrow = styled.div`
  display: flex;
  cursor: pointer;
`;
export const Value = styled.span`
  display: flex;
  margin: 0 10px;
`;
export const RemoveButton = styled.span`
  padding-left: 12px;
  cursor: pointer;
`;
export const Quantity = styled.span`
  display: flex;
`;