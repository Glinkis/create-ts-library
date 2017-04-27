import React from "react";

/**
 * @typedef {Object} CalculationFormProps
 * @property {Function} method
 *
 * @class MathCalculationForm
 * @property {CalculationFormProps} props
 * @property {Array<*>} values;
 */
export class MathCalculationForm extends React.Component {
  constructor(props) {
    super(props);
    this.values = [];
    this.state = { output: "?" };
  }

  setCalculation(event, i) {
    this.values[i] = Number(event.target.value);

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
