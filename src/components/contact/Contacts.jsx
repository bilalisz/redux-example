import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Contact from "./Contact";
import {
  clearAllContact,
  selectAllContacts,
  deleteAllContact,
} from "../../action/contactAction";

const Contacts = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  const userContacts = useSelector((state) => state.userContacts.users);
  const selectedContact = useSelector(
    (state) => state.userContacts.selectedContacts
  );
  useEffect(() => {
    if (selectAll) {
      dispatch(selectAllContacts(users.map((user) => user.id)));
      console.log(dispatch(selectAllContacts(users.map((user) => user.id))));
    } else {
      dispatch(clearAllContact());
    }
  }, [selectAll]);
  useEffect(() => {
    axios({
      method: "get",
      url: "https://jsonplaceholder.typicode.com/users",
    })
      .then((res) => setUsers(res.data))
      .catch((e) => console.log(e));
  }, []);
  const deleteAllHandle = () => {
    window.alert("Are you sure Delete All");
    dispatch(deleteAllContact());
  };

  return (
    <div>
      {selectedContact.length > 0 ? (
        <button
          className="btn btn-sm btn-danger mb-2"
          onClick={deleteAllHandle}
        >
          DeleteAll
        </button>
      ) : null}
      <table className="table shadow table-hover">
        <thead className="shadow-lg bg-danger text-light">
          <tr>
            <th>
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  name="checkbox"
                  id="checkbx"
                  className="custom-control-input"
                  onClick={() => setSelectAll(!selectAll)}
                  value={selectAll}
                />
                <label
                  htmlFor="checkbx"
                  className="custom-control-label"
                ></label>
              </div>
            </th>
            <th>Name</th>
            <th>Phone</th>
            <th>E-mail</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userContacts.map((userContact) => {
            return (
              <Contact
                contact={userContact}
                key={userContact.id}
                selectedAll={selectAll}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;
