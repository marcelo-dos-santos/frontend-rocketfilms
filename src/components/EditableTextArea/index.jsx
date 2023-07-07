import { Container } from "./styles";

export function EditableTextArea({ value, ...rest }) {
  return (
    <Container {...rest}>
      <div
        contentEditable="true"
        dangerouslySetInnerHTML={{ __html: value }}
        onInput={(e) => {
          const updatedValue = e.target.innerHTML;
          rest.onChange({ target: { value: updatedValue } });
        }}
      ></div>
    </Container>
  );
}