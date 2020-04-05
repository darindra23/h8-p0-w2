function get() {
  return async (dispatch) => {
    const response = await fetch("http://localhost:3000/contacts");
    const data = await response.json();
    dispatch({
      type: "FETCH",
      payload: data,
    });
  };
}

function remove(id) {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:3000/contacts/${id}`, {
      method: "delete",
    });
    dispatch(get());
  };
}

function add(data) {
  return async (dispatch) => {
    const response = await fetch("http://localhost:3000/contacts", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    dispatch(get());
  };
}

export { get, remove, add };
