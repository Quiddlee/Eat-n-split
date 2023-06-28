export default function LabelInput({ isDisabled, children }) {
  return (
    <>
      <label>{children}</label>
      <input disabled={isDisabled} type="text" />
    </>
  );
}
