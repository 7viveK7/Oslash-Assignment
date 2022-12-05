import { Avatar } from "@mui/material";
import { BsLink45Deg } from "react-icons/bs";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import oslasIcon from "../../assets/48_48.png";
import icon from "../../assets/Icon.png";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import "./modal.css";

const ShareModal = ({ onInputClick, onCopy, invitedUsers, onChangeUserAccess}) => {

  return (
    <>
      <div className="modal-card">
        <div
          className="section-second-row"
          style={{
            height: "80px",
            paddingLeft: "12px",
            paddingRight: "12px",
          }}
        >
          <div className="left-side">
            <span>
              <Avatar alt="share" src={icon} className="icon-style" />
            </span>
            <div className="section-sub-div">
              <span className="shaare-web-h-text">Share to web</span>
              <span className="share-web-text">
                Publish and share link with anyone
              </span>
            </div>
          </div>
          <div>
            {" "}
            <Form.Check type="switch" id="custom-switch" />
          </div>
        </div>
        <div className="modal-card-body">
          <InputGroup size="sm" className=" input-search-row">
            <Form.Control
              placeholder="People, emails,groups"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              // onClick={() => {
              //   stateChange(false);
              //   setShowShare(true);
              // }}
              onClick={onInputClick}
            />
            <InputGroup.Text id="basic-addon2">Invite</InputGroup.Text>
          </InputGroup>
          <div className="section-second-row">
            <div className="left-side">
              {" "}
              <span>
                <Avatar
                  alt="Oslash-icon"
                  src={oslasIcon}
                  className="icon-style"
                />
              </span>
              <div className="section-sub-div">
                <span className="shaare-web-h-text">Everyone at Oslash</span>
                <span className="share-web-text">
                  25 workspace memebrs {invitedUsers.name}
                </span>
              </div>
            </div>
            <div>
              <select
                name="access"
                id="access"
                className="dropdown-access share-web-text curser-pointer"
              >
                <option value="Full access">Full access</option>
                <option value="Can edit">Can edit</option>
                <option value="Can view">Can view</option>
                <option value="No access" style={{ color: "red" }}>
                  No access
                </option>
              </select>
            </div>
          </div>
          {invitedUsers.map((user) => (
            <div className="section-second-row" key={user.id}>
              <div className="left-side">
                {" "}
                <span>
                  <Avatar
                    alt="Oslash-icon"
                    src={user.image}
                    className="icon-style"
                  />
                </span>
                <div className="section-sub-div">
                  <span className="shaare-web-h-text">{user.name}</span>
                  <span className="share-web-text">{user.email} </span>
                </div>
              </div>
              <div>
              <select
                name="access"
                id="access"
                className="dropdown-access share-web-text curser-pointer"
                value={user.accessUser}   onChange={(e)=> onChangeUserAccess(user, e.target.value)}

              >
                <option value="Full access">Full access</option>
                <option value="Can edit">Can edit</option>
                <option value="Can view">Can view</option>
                <option value="No access" style={{ color: "red" }}>
                  No access
                </option>
              </select>
              </div>
            </div>
          ))}
        </div>
        <div className="footer-primary-card gap">
          {" "}
          <div className="left-side share-web-text">
            {" "}
            <span>
              <AiOutlineQuestionCircle className="quotion-icon" />
            </span>
            <span>learn about sharing</span>
          </div>
          <div>
            <BsLink45Deg />
            <span onClick={onCopy} className="copy">
              copy link
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShareModal;
