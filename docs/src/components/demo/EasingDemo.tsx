import * as React from "react";
import { getElementAbsolutePosition } from "../../../../src/dom/getElementAbsolutePosition";

const LWIDTH = 2;
const LSUBD = 64;
const WIDTH = 200;
const HEIGHT = 200;

interface EasingDemoProps {
  method: Function;
  params: Array<CommentTag>;
}

export class EasingDemo extends React.Component<EasingDemoProps, {}> {
  refs: { canvas: HTMLCanvasElement };
  ctx: CanvasRenderingContext2D;

  componentDidMount() {
    this.ctx = this.refs.canvas.getContext("2d") as CanvasRenderingContext2D;
    this.ctx.strokeStyle = "#999";
    this.ctx.lineWidth = LWIDTH;
    this.drawCurve();
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
    this.ctx.moveTo(startPoint.x * WIDTH, startPoint.y * HEIGHT);

    for (let i = 0; i <= LSUBD; i++) {
      const point = this.getPointOnCurve(1 / LSUBD * i);
      this.ctx.lineTo(point.x * WIDTH, point.y * HEIGHT);
    }

    this.ctx.stroke();
  }

  public render() {
    const style = { border: "1px solid #eee" };
    return <canvas ref="canvas" style={style} width={WIDTH} height={HEIGHT} />;
  }
}
