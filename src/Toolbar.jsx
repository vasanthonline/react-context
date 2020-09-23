import React from "react";
import { SessionContext } from './session-context';
import { Link } from "react-router-dom";

export default function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
      <br />
      Hello {props.title}
      <br />
      <Link to={props.url} >{props.url}</Link>
    </div>
  );
}

class ThemedButton extends React.Component {
  static contextType = SessionContext;

  btClick() {
    const [context, updateContext] = this.context;
    updateContext({isAuthenticated: Math.random()});
  }
  render() {
    return <button onClick={this.btClick.bind(this)}>{JSON.stringify(this.context)}</button>;
  }
}