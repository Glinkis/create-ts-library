import * as React from "react";

const DEMO_WIDTH = 200;
const DEMO_HEIGHT = 200;
const LINE_WIDTH = 2;
const LINE_SUBDIVISION = 64;

interface IEasingDemoProps {
  method: (...args: any[]) => any;
  params: ICommentTag[];
}

export class EasingDemo extends React.Component<IEasingDemoProps, {}> {
  public refs: { canvas: HTMLCanvasElement };
  public ctx: CanvasRenderingContext2D;

  public componentDidMount() {
    this.ctx = this.refs.canvas.getContext("2d") as CanvasRenderingContext2D;
    this.ctx.strokeStyle = "#999";
    this.ctx.lineWidth = LINE_WIDTH;
    this.drawCurve();
  }

  public render() {
    const style = { border: "1px solid #eee" };
    return (
      <canvas
        ref="canvas"
        style={style}
        width={DEMO_WIDTH}
        height={DEMO_HEIGHT}
      />
    );
  }

  private getPointOnCurve(t: number): { x: number; y: number } {
    return {
      x: t,
      y: 1 - this.props.method(t)
    };
  }

  private drawCurve() {
    const startPoint = this.getPointOnCurve(0);

    this.ctx.beginPath();
    this.ctx.moveTo(startPoint.x * DEMO_WIDTH, startPoint.y * DEMO_HEIGHT);

    for (let i = 0; i <= LINE_SUBDIVISION; i++) {
      const point = this.getPointOnCurve(1 / LINE_SUBDIVISION * i);
      this.ctx.lineTo(point.x * DEMO_WIDTH, point.y * DEMO_HEIGHT);
    }

    this.ctx.stroke();
  }
}
