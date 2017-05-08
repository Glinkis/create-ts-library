import * as React from "react";

interface MathDemoProps {
  method: Function,
  step: number
  params: Array<CommentTag>
}

interface MathDemoState {
  output: string
}

export class MathDemo extends React.Component<MathDemoProps, MathDemoState> {
  private values: any;

  constructor(props: MathDemoProps) {
    super(props);
    this.values = [];
    this.state = { output: "?" };
  }

  private setCalculation(event: any, i: number) {
    const value = event.target.value;
    if (value || value === 0 || value === "0") {
      this.values[i] = Number(event.target.value);
    } else {
      this.values[i] = null;
    }

    const lengthOk = this.values.length === this.props.params.length;
    const valuesOk = !this.values.includes(null);

    const output = lengthOk && valuesOk
      ? this.props.method(...this.values)
      : "?";

    this.setState({ output });
  }

  private getInput(param: CommentTag, i: number) {
    return (
      <input
        key={i}
        className="form-control"
        placeholder={param.name}
        type="number"
        step={this.props.step}
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
        <h2>{this.getInputs()}{" = "}{this.state.output}</h2>
      </form>
    );
  }
}
