import * as React from "react";

const WIDTH = 300;
const HEIGHT = 200;

interface SplinePoints {
  x: number[];
  y: number[];
}

interface SplinesDemoProps {
  method: Function;
  params: Array<CommentTag>;
}

interface SplinesDemoState {
  points: SplinePoints;
}

export class SplinesDemo extends React.Component<SplinesDemoProps, SplinesDemoState> {
  refs: { canvas: HTMLCanvasElement };

  constructor(props: SplinesDemoProps) {
    super(props);
    this.state = {
      points: {
        x: [.1, .5, .5, .9],
        y: [.1, .1, .9, .9]
      }
    };
  }

  componentDidMount() {
    this.updateCanvas();
  }

  private getDemoSpline(t: number) {
    return {
      x: this.props.method(this.state.points.x, t),
      y: this.props.method(this.state.points.y, t)
    };
  }

  private updateCanvas() {
    const ctx = this.refs.canvas.getContext("2d") as CanvasRenderingContext2D;
    this.drawSpline(ctx);
    this.drawPoints(ctx);
  }

  private drawPoints(ctx: CanvasRenderingContext2D) {
    const { x, y } = this.state.points;
    const SIZE = 4;
    for (let i = 0; i < x.length; i++) {
      ctx.beginPath();
      ctx.arc(x[i] * WIDTH, y[i] * HEIGHT, SIZE, 0, 2 * Math.PI, false);
      ctx.fillStyle = "#999";
      ctx.fill();
    }
  }

  private drawSpline(ctx: CanvasRenderingContext2D) {
    const SUBD = 128;
    ctx.beginPath();

    const startPoint = this.getDemoSpline((1 / SUBD));
    ctx.moveTo(startPoint.x * WIDTH, startPoint.y * HEIGHT);

    for (let i = 0; i < SUBD + 1; i++) {
      const point = this.getDemoSpline((1 / SUBD) * i);
      ctx.lineTo(point.x * WIDTH, point.y * HEIGHT);
    }

    ctx.strokeStyle = "#999";
    ctx.stroke();
  }

  public render() {
    const style = {
      border: "1px solid #eee"
    };
    return <canvas ref="canvas" style={style} width={WIDTH} height={HEIGHT}/>;
  }
}
