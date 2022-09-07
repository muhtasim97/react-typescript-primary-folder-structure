export interface ITextProps {
  color: string;
}
export default function text(props: ITextProps) {
  const { color } = props;
  console.log(color);
  return <h1 style={{ color }}>Here is the text</h1>;
};
