import React from "react";

export default function Controller() {
  return (
    <div className="d-flex justify-content-center gap-2">
      <button className="btn btn-secondary">light</button>
      <button className="btn btn-dark">dark</button>
      <button className="btn btn-primary">toggle theme</button>
    </div>
  );
}
