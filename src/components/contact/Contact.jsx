import React from "react";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../action/contactAction";
import "../../styles/App.scss";

const Contact = ({ contact, selectedAll }) => {
  const { id, name, phone, email } = contact;
  const dispatch = useDispatch();
  const handelDelete = () => {
    console.log(id);
    alert("Are you sure ?" + " " + name);
    dispatch(deleteContact(id));
  };

  return (
    <tr>
      <td>
        <div className="custom-control custom-checkbox">
          <input
            checked={selectedAll}
            type="checkbox"
            className="form-check-input"
          />
        </div>
      </td>
      <td>
        <Avatar className="mr-2" name={name} size={40} round /> {name}
      </td>
      <td>{phone}</td>
      <td>{email}</td>
      <td className="action">
        <Link to={`/contact/edit/${id}`}>
          <span className="material-icons mr-2">edit</span>
        </Link>
        <Link to="#">
          <span
            className="material-icons ml-2 text-danger remove"
            onClick={handelDelete}
          >
            remove_circle
          </span>
        </Link>
      </td>
    </tr>
  );
};

export default Contact;
