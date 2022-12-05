import "./App.css";
import Button from "@mui/material/Button";
import { FaShareAlt } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import {  useState } from "react";
import ShareModal from "./Components/Modals/ShareModal";
import SearchModal from "./Components/Modals/SearchModal";

function App() {
  const [intial, setInital] = useState(false);
  const [showShare, setShowShare] = useState(false);
  //const [searchValue,setSearchValue]=useState('')
  let [invitedUsers, setInvitedUsers] = useState([]);
  const onInvite = (user) => {
    setInvitedUsers((prev) => [...prev, user]);
    setShowShare(false);
    setInital(true);
  };
 

  const ShareButton = () => {
    return (
      <div style={{ marginTop: "124px", marginLeft: "124px" }}>
        <Button
          variant="contained"
          onClick={() => setInital(!intial)}
          className="button"
        >
          <div className="button-content">
            <span>Share</span>
            <FaShareAlt className="share-icon" />
          </div>
        </Button>
        {intial && (
          <ShareModal
            onInputClick={() => {
              setInital(false);
              setShowShare(true);
            }}
            invitedUsers={invitedUsers}
            onCopy={() => alert("Link Copied to clipboard")}
          />
        )}
      </div>
    );
  };

  return (
    <>
      {!showShare && <ShareButton />}
      {showShare && <SearchModal onInvite={onInvite} />}
    </>
  );
}

export default App;
