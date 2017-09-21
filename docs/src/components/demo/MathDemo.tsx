import * as React from "react";
import { getOutputObject } from "../content/getOutputObject";

interface MathDemoProps {
  method: Function;
  params: Array<CommentTag>;
}

interface MathDemoState {
  output: string;
}

export class MathDemo extends React.Component<MathDemoProps, MathDemoState> {
  private values: any;

  constructor(props: MathDemoProps) {
    super(props);
    this.values = [];
    this.state = { output: "?" };
  }

  private setCalculation(event: any, i: number) {
    this.values[i] = event.target.value;

    const lengthOk = this.values.length === this.props.params.length;
    const valuesOk = !this.values.includes(null);

    let output = lengthOk && valuesOk ? this.props.method(...this.values) : "?";

    if (typeof output === "object") {
      output = getOutputObject(output);
    } else if (typeof output === "boolean") {
      output = String(output);
    }

    this.setState({ output });
  }

  private getInput(param: CommentTag, i: number) {
    return (
      <input
        key={i}
        className="form-control"
        placeholder={param.name}
        type={param.type.name === "number" ? "number" : ""}
        step={0.1}
        value={this.values[i]}
        style={{ width: "80pt" }}
        onChange={event => this.setCalculation(event, i)}
      />
    );
  }

  private getInputs() {
    return this.props.params.map(this.getInput.bind(this));
  }

  public render() {
    return (
      <form className="form-inline">
        <h4>
          {this.getInputs()}
          {" = "}
          {this.state.output}
        </h4>
      </form>
    );
  }
}
