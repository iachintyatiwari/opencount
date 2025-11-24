export interface WidgetStyle {
  id: string;
  name: string;
  description: string;
  cssContent: string;
  className: string; // For the internal preview wrapper
}

export interface WidgetProps {
  styleConfig: WidgetStyle;
  count?: number;
}