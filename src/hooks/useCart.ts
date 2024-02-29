import { useEffect, useState } from "react";
import { Cart } from "../models/cart.model";
import { deleteCart, fetchCart } from "../api/carts.api";
import { useNavigate } from "react-router-dom";

export const useCart = () => {
  const [carts, setCarts] = useState<Cart[]>([]);
  const [isEmpty, setIsEmpty] = useState<boolean>(true);
  const navigate = useNavigate();

  const deleteCartItem = (id: string) => {
    deleteCart(id).then(() => {
      setCarts(carts.filter((cart) => cart.cart_items_id !== id));
    });
  };

  useEffect(() => {
    fetchCart()
      .then((carts) => {
        setCarts(carts);
        setIsEmpty(carts.length === 0);
      })
      .catch(() => {
        navigate("/login");
      });
  }, []);

  return { carts, isEmpty, deleteCartItem };
};
