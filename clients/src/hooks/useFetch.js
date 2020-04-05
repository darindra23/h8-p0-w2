import { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get } from "../data/action";

export default () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);

  useLayoutEffect(() => {
    dispatch(get());
  }, []);
  return contacts;
};
