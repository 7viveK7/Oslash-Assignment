import { AiOutlineQuestionCircle } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { Avatar } from "@mui/material";
import people1 from "../../assets/people1.jpg";
import people2 from "../../assets/people2.jpg";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

const initalResults = [
  {
    name: "Vivek JB",
    image: people1,
    type: "person",
    id: 1,
    email: "wade@oslash.com"
  },

  {
    name: "Tom Cook",
    image: people2,
    type: "person",
    id: 4,
    email: "tom@oslash.com"
  },
  {
    name: "Engineering",
    firstLatter: "E",
    type: "group",
    id: 3,
    email: "Engineering@oslash.com"
  },
  {
    name: "Marketing",
    firstLatter: "M",
    type: "group",
    id: 4,
    email: "Marketing@oslash.com"
  },
];

const SearchModal = ({ onInvite }) => {

  const [results, setResults] = useState(initalResults);
  const [users, setUsers] = useState([]);
  const [groups, setGroups] = useState([]);
  const [searchString, setSearchString] = useState("");
  const inputRef = useRef();
  const [selectedInvite, setSelectedInvite] = useState(null);
  const [accessUser, setAccessUser] = useState('Full access')

  // const users = results.filter((result) => result.type === "person");
  // const groups = results.filter((result) => result.type === "group");
  useEffect(() => {
    if (!searchString) {
      setResults(initalResults);
      return;
    }
    const filterResult = results.filter((result) =>
      result.name.toLowerCase().includes(searchString.toLowerCase())
    );
    setResults(filterResult);
    // eslint-disable-next-line
  }, [searchString]);

  useEffect(() => {
    const filteredUsers = results.filter((result) => result.type === "person");
    const filteredGroups = results.filter((result) => result.type === "group");
    setUsers(filteredUsers);
    setGroups(filteredGroups);
  }, [results]);

  useEffect(() => {
    if (!inputRef) return;
    inputRef.current?.focus();
  }, [inputRef]);

  const selectString = (event) => {
    if (event.code === "Enter" && results.length === 1) {
      setSelectedInvite(results[0]);

      setSearchString("");
    }
  };


  return (
    <>
      <div className="showshare-window">
        <div className="modal-card mg">
          <div className="search-header">
            <div className="right-hd">
              <div className="pills-container">
                {selectedInvite && (
                  <div className="pill">
                    <span>{selectedInvite?.name}</span>
                    <RxCross2 onClick={() => { setSelectedInvite(false) }} className="cross" />
                  </div>
                )}
              </div>
              <input
                ref={inputRef}
                disabled={selectedInvite}
                className="search-input-scd d"
                type="text"
                placeholder="People, emails,groups"
                value={searchString}
                onKeyDown={selectString}
                onChange={(e) => setSearchString(e.target.value)}
              />
            </div>
            <div className="right-header">
              <select
                name="access"
                id="accessn"
                className="dropdown-access share-web-text curser-pointer"
                onChange={(e) => setAccessUser(e.target.value)}
              >
                <option value="Full access">Full access</option>
                <option value="Can edit">Can edit</option>
                <option value="Can view">Can view</option>
                <option value="No access" style={{ color: "red" }}>
                  No access
                </option>
              </select>
              <button
                type="button"
                className="search-button-sdc curser-pointer"
                onClick={() => onInvite({ accessUser, ...selectedInvite })} //accessuser
              >
                Invite
              </button>
            </div>
          </div>
          <div className="search-modal-body">
            {!selectedInvite && users.length > 0 && (
              <span className="select-people">Select a person</span>
            )}
            {!selectedInvite &&
              users.map((eachUser, index) => (
                <div
                  className={clsx("each-row", {
                    "each-row-sd-Entr": searchString.length > 0,
                  })}
                  key={eachUser.id}
                  role="button"
                  tabIndex={"0"}
                  onClick={() => setSelectedInvite(eachUser)}
                >
                  <div className="left-side share-web-text curser-pointer ">
                    <span>
                      <Avatar
                        alt="profile"
                        className="quotion-icon wd"
                        src={eachUser.image}
                      />
                    </span>
                    <span className="people-name ">{eachUser.name}</span>
                  </div>
                  <div></div>
                </div>
              ))}

            <div></div>
            {!selectedInvite && groups.length > 0 && (
              <span className="select-people">Select a group</span>
            )}
            {!selectedInvite &&
              groups.map((eachGroup) => (
                <div className="each-row" key={eachGroup.id}
                  onClick={() => setSelectedInvite(eachGroup)}

                >
                  <div className="left-side share-web-text curser-pointer">
                    <span className="groups-name wd">
                      {eachGroup.firstLatter}
                    </span>
                    <span className="people-name">{eachGroup.name}</span>
                  </div>
                </div>
              ))}

            {selectedInvite && (
              <div
                className={"each-row each-row-sd-Entr"}
                role="button"
                tabIndex={"0"}
              >
                <div className="left-side share-web-text curser-pointer ">
                  <span>
                    <Avatar
                      alt="profile"
                      className="quotion-icon wd"
                      src={selectedInvite.image}
                    />
                  </span>
                  <span className="people-name ">{selectedInvite.name}</span>
                </div>
                <div></div>
              </div>
            )}
            <div></div>
            <div></div>
          </div>

          <div className="search-footer-sdc gap">
            <div className="left-side share-web-text ">
              <span>
                <AiOutlineQuestionCircle className="quotion-icon" />
              </span>
              <span>learn about sharing</span>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchModal;
