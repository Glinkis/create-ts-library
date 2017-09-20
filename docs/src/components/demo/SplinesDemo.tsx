import * as React from "react";
import { getElementAbsolutePosition } from "../../../../src/dom/getElementAbsolutePosition.js";
import { circularCollision } from "../../../../src/math.js";

const PSIZE = 8;
const LWIDTH = 2;
const LSUBD = 32;
const WIDTH = 400;
const HEIGHT = 200;

interface SplinesDemoProps {
  method: Function;
  params: Array<CommentTag>;
}

interface SplinesDemoState {
  points: { x: number[]; y: number[] };
  active: number;
  dragging: boolean;
}

export class SplinesDemo extends React.Component<
  SplinesDemoProps,
  SplinesDemoState
> {
  refs: { canvas: HTMLCanvasElement };
  ctx: CanvasRenderingContext2D;

  constructor(props: SplinesDemoProps) {
    super(props);
    this.state = {
      points: {
        x: [0.1, 0.5, 0.5, 0.9],
        y: [0.1, 0.1, 0.9, 0.9]
      },
      active: -1,
      dragging: false
    };
  }

  componentDidMount() {
    this.ctx = this.refs.canvas.getContext("2d") as CanvasRenderingContext2D;
    this.ctx.strokeStyle = "#999";
    this.ctx.lineWidth = LWIDTH;
    this.updateCanvas();
  }

  private getSplinePoint(t: number): { x: number; y: number } {
    return {
      x: this.props.method(this.state.points.x, t),
      y: this.props.method(this.state.points.y, t)
    };
  }

  private updateCanvas() {
    this.ctx.clearRect(0, 0, WIDTH, HEIGHT);
    this.drawSpline();
    this.drawPath();
    this.drawPoints();
  }

  private drawPoints() {
    const { points } = this.state;
    for (let i = 0; i < points.x.length; i++) {
      this.ctx.beginPath();
      this.ctx.arc(
        points.x[i] * WIDTH,
        points.y[i] * HEIGHT,
        PSIZE,
        0,
        2 * Math.PI,
        false
      );
      if (this.state.active === i) {
        this.ctx.fillStyle = "#222";
      } else {
        this.ctx.fillStyle = "#999";
      }
      this.ctx.fill();
    }
  }

  private drawPath() {
    const { points } = this.state;
    this.ctx.beginPath();
    this.ctx.setLineDash([4, 4]);
    this.ctx.moveTo(points.x[0] * WIDTH, points.y[0] * HEIGHT);
    for (let i = 0; i < points.x.length; i++) {
      this.ctx.lineTo(points.x[i] * WIDTH, points.y[i] * HEIGHT);
    }
    this.ctx.stroke();
  }

  private drawSpline() {
    const startPoint = this.getSplinePoint(0);
    this.ctx.beginPath();
    this.ctx.setLineDash([0, 0]);
    this.ctx.moveTo(startPoint.x * WIDTH, startPoint.y * HEIGHT);
    for (let i = 0; i <= LSUBD; i++) {
      const point = this.getSplinePoint(1 / LSUBD * i);
      this.ctx.lineTo(point.x * WIDTH, point.y * HEIGHT);
    }
    this.ctx.stroke();
  }

  private onMouseMove = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const eventPosition = this.getMouseEventPosition(event);

    if (this.state.dragging) {
      this.state.points.x[this.state.active] = eventPosition.x / WIDTH;
      this.state.points.y[this.state.active] = eventPosition.y / HEIGHT;
    } else {
      let active = -1;
      for (let i = 0; i < this.state.points.x.length; i++) {
        if (this.getEventPointCollision(eventPosition, i)) {
          active = i;
        }
      }
      this.setState({ active });
    }
    this.updateCanvas();
  };

  private onMouseDown = () => {
    if (this.state.active === -1) {
      return;
    }
    this.setState({ dragging: true });
    document.addEventListener("mouseup", this.onMouseUp);
  };

  private onMouseUp = () => {
    this.setState({ dragging: false });
    document.removeEventListener("mouseup", this.onMouseUp);
  };

  private getMouseEventPosition(event: React.MouseEvent<HTMLCanvasElement>) {
    const canvasPos = getElementAbsolutePosition(this.refs.canvas);
    return {
      x: event.pageX - canvasPos.left,
      y: event.pageY - canvasPos.top
    };
  }

  private getEventPointCollision(evtPos: any, point: number): boolean {
    const pos = {
      x: this.state.points.x[point] * WIDTH,
      y: this.state.points.y[point] * HEIGHT
    };
    return circularCollision(evtPos.x, evtPos.y, 0, pos.x, pos.y, PSIZE);
  }

  public render() {
    const style = { border: "1px solid #eee" };
    return (
      <canvas
        ref="canvas"
        style={style}
        width={WIDTH}
        height={HEIGHT}
        onMouseMove={this.onMouseMove}
        onMouseDown={this.onMouseDown}
      />
    );
  }
}
