import { Progress } from "antd";
import { ClassicPreset } from "rete";

export class ProgressControl extends ClassicPreset.Control {
  constructor(public percent: number) {
    super();
  }
}

export function CustomProgress(props: { data: ProgressControl }) {
  return <Progress type="circle" percent={props.data.percent} />;
}
