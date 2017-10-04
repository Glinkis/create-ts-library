import * as React from "react";
import { getOutputObject } from "../content/getOutputObject";

interface IMathDemoProps {
  method: (...args: any[]) => any;
  params: ICommentTag[];
}

interface IMathDemoState {
  output: string;
}

export class MathDemo extends React.Component<IMathDemoProps, IMathDemoState> {
  private values: any;

  constructor(props: IMathDemoProps) {
    super(props);
    this.values = [];
    this.state = { output: "?" };
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

  private setCalculation(event: any, i: number, type?: string) {
    this.values[i] = event.target.value;

    if (type === "number") {
      this.values[i] = Number(this.values[i]);
    }

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

  private getInput(param: ICommentTag, i: number) {
    const type =
      param.type.name ||
      (param.type.expression ? param.type.expression.name : undefined);

    return (
      <input
        key={i}
        className="form-control"
        placeholder={param.name}
        type={type}
        step={0.1}
        value={this.values[i]}
        style={{ width: "80pt" }}
        onChange={event => this.setCalculation(event, i, type)}
      />
    );
  }

  private getInputs() {
    return this.props.params.map(this.getInput.bind(this));
  }
}
