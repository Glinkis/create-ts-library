import * as React from "react";
import { getElementAbsolutePosition } from "../../../../src/dom/getElementAbsolutePosition";
import { vector2PointIntersection } from "../../../../src/vector2";

const DEMO_WIDTH = 400;
const DEMO_HEIGHT = 200;
const LINE_WIDTH = 2;
const LINE_SUBDIVISION = 32;
const POINT_SIZE = 8;

interface ISplinesDemoProps {
  method: (...args: any[]) => any;
  params: ICommentTag[];
}

interface ISplinesDemoState {
  points: { x: number[]; y: number[] };
  active: number;
  dragging: boolean;
}

export class SplinesDemo extends React.Component<
  ISplinesDemoProps,
  ISplinesDemoState
> {
  public refs: { canvas: HTMLCanvasElement };
  private ctx: CanvasRenderingContext2D;

  constructor(props: ISplinesDemoProps) {
    super(props);
    this.state = {
      active: -1,
      dragging: false,
      points: {
        x: [0.1, 0.5, 0.5, 0.9],
        y: [0.1, 0.1, 0.9, 0.9]
      }
    };
  }

  public componentDidMount() {
    this.ctx = this.refs.canvas.getContext("2d") as CanvasRenderingContext2D;
    this.ctx.strokeStyle = "#999";
    this.ctx.lineWidth = LINE_WIDTH;
    this.updateCanvas();
  }

  public render() {
    const style = { border: "1px solid #eee" };
    return (
      <canvas
        ref="canvas"
        style={style}
        width={DEMO_WIDTH}
        height={DEMO_HEIGHT}
        onMouseMove={this.onMouseMove}
        onMouseDown={this.onMouseDown}
      />
    );
  }

  private getSplinePoint(t: number): { x: number; y: number } {
    return {
      x: this.props.method(this.state.points.x, t),
      y: this.props.method(this.state.points.y, t)
    };
  }

  private updateCanvas() {
    this.ctx.clearRect(0, 0, DEMO_WIDTH, DEMO_HEIGHT);
    this.drawSpline();
    this.drawPath();
    this.drawPoints();
  }

  private drawPoints() {
    const { points } = this.state;
    for (let i = 0; i < points.x.length; i++) {
      this.ctx.beginPath();
      this.ctx.arc(
        points.x[i] * DEMO_WIDTH,
        points.y[i] * DEMO_HEIGHT,
        POINT_SIZE,
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
    this.ctx.moveTo(points.x[0] * DEMO_WIDTH, points.y[0] * DEMO_HEIGHT);
    for (let i = 0; i < points.x.length; i++) {
      this.ctx.lineTo(points.x[i] * DEMO_WIDTH, points.y[i] * DEMO_HEIGHT);
    }
    this.ctx.stroke();
  }

  private drawSpline() {
    const startPoint = this.getSplinePoint(0);
    this.ctx.beginPath();
    this.ctx.setLineDash([0, 0]);
    this.ctx.moveTo(startPoint.x * DEMO_WIDTH, startPoint.y * DEMO_HEIGHT);
    for (let i = 0; i <= LINE_SUBDIVISION; i++) {
      const point = this.getSplinePoint(1 / LINE_SUBDIVISION * i);
      this.ctx.lineTo(point.x * DEMO_WIDTH, point.y * DEMO_HEIGHT);
    }
    this.ctx.stroke();
  }

  private onMouseMove = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const eventPosition = this.getMouseEventPosition(event);

    if (this.state.dragging) {
      this.state.points.x[this.state.active] = eventPosition.x / DEMO_WIDTH;
      this.state.points.y[this.state.active] = eventPosition.y / DEMO_HEIGHT;
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
      x: this.state.points.x[point] * DEMO_WIDTH,
      y: this.state.points.y[point] * DEMO_HEIGHT
    };
    return vector2PointIntersection(evtPos, 0, pos, POINT_SIZE);
  }
}
