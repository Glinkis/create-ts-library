import * as React from "react";

interface MathCalculationFormProps {
  method: Function,
  step: number
  params: Array<CommentTag>
}

interface MathCalculationFormState {
  output: string
}

export class MathCalculationForm extends React.Component<MathCalculationFormProps, MathCalculationFormState> {
  private values: any;

  constructor(props) {
    super(props);
    this.values = [];
    this.state = { output: "?" };
  }

  setCalculation(event, i) {
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

  getInput(param, i) {
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

  getInputs() {
    return this.props.params.map(this.getInput.bind(this));
  }

  render() {
    return (
      <form className="form-inline">
        <h2>{this.getInputs()}{" = "}{this.state.output}</h2>
      </form>
    );
  }
}
