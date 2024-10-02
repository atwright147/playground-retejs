import { Button } from "antd";
import { ClassicPreset } from "rete";

export class ButtonControl extends ClassicPreset.Control {
  constructor(public label: string, public onClick: () => void) {
    super();
  }
}

export function CustomButton(props: { data: ButtonControl }) {
  return (
    <Button
      onPointerDown={(e) => e.stopPropagation()}
      onDoubleClick={(e) => e.stopPropagation()}
      onClick={props.data.onClick}
    >
      {props.data.label}
    </Button>
  );
}
