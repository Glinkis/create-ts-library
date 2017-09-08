import * as React from "react";
import { getElementAbsolutePosition } from "../../../../src/dom/getElementAbsolutePosition.js";

const PSIZE = 6;
const WIDTH = 200;
const HEIGHT = 200;

interface SplinesDemoProps {
  method: Function;
  params: Array<CommentTag>;
}

interface SplinesDemoState {
  points: { x: number[]; y: number[] };
  collisionPoint: number;
}

export class SplinesDemo extends React.Component<
  SplinesDemoProps,
  SplinesDemoState
> {
  refs: { canvas: HTMLCanvasElement };

  constructor(props: SplinesDemoProps) {
    super(props);
    this.state = {
      points: {
        x: [0.1, 0.5, 0.5, 0.9],
        y: [0.1, 0.1, 0.9, 0.9]
      },
      collisionPoint: -1
    };
  }

  componentDidMount() {
    this.updateCanvas();
  }

  private getSplinePoint(t: number) {
    return {
      x: this.props.method(this.state.points.x, t),
      y: this.props.method(this.state.points.y, t)
    };
  }

  private updateCanvas() {
    const ctx = this.refs.canvas.getContext("2d") as CanvasRenderingContext2D;
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    this.drawSpline(ctx);
    this.drawPoints(ctx);
  }

  private drawPoints(ctx: CanvasRenderingContext2D) {
    const { points } = this.state;
    for (let i = 0; i < points.x.length; i++) {
      ctx.beginPath();
      ctx.arc(points.x[i] * WIDTH, points.y[i] * HEIGHT, PSIZE, 0, 2 * Math.PI, false);
      if (this.state.collisionPoint === i) {
        ctx.fillStyle = "#222";
      } else {
        ctx.fillStyle = "#999";
      }
      ctx.fill();
    }
  }

  private drawSpline(ctx: CanvasRenderingContext2D) {
    const SUBD = 128;
    ctx.beginPath();

    const startPoint = this.getSplinePoint(0);
    ctx.moveTo(startPoint.x * WIDTH, startPoint.y * HEIGHT);

    for (let i = 0; i < SUBD + 1; i++) {
      const point = this.getSplinePoint(1 / SUBD * i);
      ctx.lineTo(point.x * WIDTH, point.y * HEIGHT);
    }

    ctx.strokeStyle = "#999";
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  private onMouseMove = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const eventPosition = this.getMouseEventPosition(event);
    let collisionPoint = -1;
    for (let i = 0; i < this.state.points.x.length; i++) {
      if (this.getEventPointCollision(eventPosition, i)) {
        collisionPoint = i;
      }
    }
    this.setState({ collisionPoint });
    this.updateCanvas();
  };

  private getMouseEventPosition(event: React.MouseEvent<HTMLCanvasElement>) {
    const canvasPos = getElementAbsolutePosition(this.refs.canvas);
    return {
      x: event.pageX - canvasPos.left,
      y: event.pageY - canvasPos.top
    };
  }

  private getEventPointCollision(eventPosition: any, point: number): boolean {
    const pos = {
      x: this.state.points.x[point] * WIDTH,
      y: this.state.points.y[point] * HEIGHT
    };
    return (
      eventPosition.x > (pos.x - PSIZE) &&
      eventPosition.x < (pos.x + PSIZE) &&
      eventPosition.y > (pos.y - PSIZE) &&
      eventPosition.y < (pos.y + PSIZE)
    );
  }

  public render() {
    const style = {
      border: "1px solid #eee"
    };
    return (
      <canvas
        ref="canvas"
        style={style}
        width={WIDTH}
        height={HEIGHT}
        onMouseMove={this.onMouseMove}
      />
    );
  }
}
