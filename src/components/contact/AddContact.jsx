import React, { useState } from "react";
import "../../styles/App.scss";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addContact } from "../../action/contactAction";
import _id from "shortid";

const AddContact = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const OnSubmitHandler = (e) => {
    e.preventDefault();
    const newContact = {
      id: _id.generate(),
      name: name,
      phone: phone,
      email: email,
    };
    dispatch(addContact(newContact));
    history.push("/");
  };

  return (
    <>
      <div className="card border-0 shadow">
        <div className="card-header text-center bg-danger text-light">
          <h6>Add New Contact</h6>
        </div>
        <div className="card-body card-bg">
          <form onSubmit={OnSubmitHandler}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder="Enter name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Phone</label>
              <input
                type="number"
                className="form-control"
                id="phone"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                placeholder="Enter phone number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Entaer email address"
              />
            </div>

            <button type="submit" className="btn btn-primary float-right">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddContact;
