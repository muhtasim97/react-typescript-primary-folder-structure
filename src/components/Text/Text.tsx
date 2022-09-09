export interface ITextProps {
  color: string;
}
export default function text(props: ITextProps) {
  const { color } = props;
  return <h1 style={{ color }}>Here is the text</h1>;
};
