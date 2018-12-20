export default interface Node {
    borderWidth?: number;
    borderWidthSelected?: number;
    brokenImage?: string;
    chosen?: boolean | {
        node: Function | string;
        label: Function | string;
    };
    color?: Color | string;
    fixed?: boolean | {
        x: boolean;
        y: boolean;
    };
    font?: object | string;
    heightConstraint?: number;
    hidden?: boolean;
    icon?: string;
    id: string;
    image?: string;
    label?: string;
    labelHighlightBold?: boolean;
    level?: number;
    margin?: object | number;
    mass?: number;
    physics?: boolean;
    scaling?: object;
    shadow?: object | boolean;
    shape?: string;
    shapeProperties?: object;
    title?: string | Element;
    value?: number;
    widthConstraint?: number;
    x?: number;
    y?: number;
    _customData?: any;
    _graphCanvas?: CanvasProps;
}
interface CanvasProps {
    html?: string;
    nodeType?: string;
    clusterTypes?: string[];
    imageSize?: {
        width: number;
        height: number;
    };
}
interface Color {
    border?: string;
    background?: string;
    highlight?: string | {
        border: string;
        background: string;
    };
    hover?: string | {
        border: string;
        background: string;
    };
}
export {};
