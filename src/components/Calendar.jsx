import React from "react";
import Calendar from "@ericz1803/react-google-calendar";
import { css } from "@emotion/react";

//put your google calendar api key here
const API_KEY = "AIzaSyCcaquy6u17NDaopjpwCV_5BGp0lzeO2I4";

//replace calendar id with one you want to test

let calendars = [
  { calendarId: "ag3mvlobvj28q49612ljobt5i0@group.calendar.google.com" }
];

let styles = {
  //you can use object styles
  calendar: {
    borderWidth: "3px" //make outer edge of calendar thicker
  },

  //you can also use emotion's string styles (remember to add the line 'import { css } from "@emotion/react";')
  today: css`
    /* highlight today by making the text red and giving it a red border */
    color: red;
    border: 1px solid red;
  `
};

export default function App() {
  return (
    <div className="shane_tm_section App calendar" id="calendar">
          <div className="shane_tm_calendar" >
          <div className="container calendarcontainer">
            <div className="positon-relative">
             <div className="shane_tm_title2">
                        <div className="title_flex">
                  <div className="left calendartext">
                    <span>Team Calendar</span>
                  </div>
                </div>
         <div
          style={{
            width: "100%",
            paddingTop: "50px",
            paddingBottom: "50px",
            margin: "auto",
            maxWidth: "1200px",
          }}
        >
          <Calendar apiKey={API_KEY} calendars={calendars} styles={styles} />
        </div>
        </div>
        </div>
        </div>
        </div>
    </div>
  );
}
