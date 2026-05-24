import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        color: "white",
      }}
    >
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="Dexr1te"
        blockSize={30}
        blockMargin={10}
        color="#c084f5"
        fontSize={20}
        transformData={(data) => {
          const sixMonthsAgo = new Date();
          sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
          return data.filter((day) => {
            const date = new Date(day.date);
            return date >= sixMonthsAgo;
          });
        }}
      />
    </Row>
  );
}

export default Github;
