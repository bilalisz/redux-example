import React, { useState, useEffect } from "react";
import "../../styles/App.scss";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getContact, updateContactById } from "../../action/contactAction";
import _id from "shortid";
import { useParams } from "react-router-dom";

const EditContact = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const EditContact = useSelector((state) => state.userContacts.EditContact);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const updateContact = (e) => {
    e.preventDefault();
    const updated = Object.assign(EditContact, {
      name: name,
      phone: phone,
      email: email,
    });
    console.log(updated);
    dispatch(updateContactById(updated));
    history.push("/");
  };

  useEffect(() => {
    dispatch(getContact(id));
    if (EditContact != null) {
      setName(EditContact.name);
      setPhone(EditContact.phone);
      setEmail(EditContact.email);
    }
  }, [EditContact]);

  return (
    <>
      <div className="card border-0 shadow">
        <div className="card-header text-center bg-danger text-light">
          <h6>Eidt Contact</h6>
        </div>
        <div className="card-body card-bg">
          <form onSubmit={(e) => updateContact(e)}>
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
                type="text"
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

            <button type="submit" className="btn btn-warning float-right">
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditContact;
