
import React from "react";
import "./style.css";

export default function Tester1() {
  return (
    <div>
      <h1>Hello, world!</h1>
    </div>
  );
}
export function Tester2() {
  return (
    <div>
      <h1>Hello, world part 2!</h1>
    </div>
  );
}
var names = ['Alice', 'Emily', 'Kate'];
var surname=['jelly','donut','cocoa']
export function ForTester() {
  return (
    <div>
        {
          names.map(function (name, surname) 
          {
            return <div key={surname}>Hello, {name}!</div>
          })
        }
    </div>
  );
}