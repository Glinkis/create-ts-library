import * as React from "react";

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
      output = this.getOutputObject(output);
    } else if (typeof output === "boolean") {
      output = String(output);
    }

    this.setState({ output });
  }

  private getOutputObject(object: any) {
    const members = [];
    for (let member in object) {
      if (object.hasOwnProperty(member)) {
        members.push(member);
      }
    }
    return (
      <div>
        {"{"}
        {members.map((member, i) => (
          <div key={i}>
            {member}: {object[member]}
          </div>
        ))}
        {"}"}
      </div>
    );
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
        <h2>
          {this.getInputs()}
          {" = "}
          {this.state.output}
        </h2>
      </form>
    );
  }
}
