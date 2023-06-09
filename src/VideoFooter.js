import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import Ticker from "react-ticker";

function VideoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@chaburk</h3>
        <p>This is some description</p>
        <div className="videoFooter__ticker">
          {/* <MusicNoteIcon className="videoFooter__icon" /> */}
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>I am a song</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
    </div>
  );
}

export default VideoFooter;
