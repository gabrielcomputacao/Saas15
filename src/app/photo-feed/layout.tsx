export default function PhotoFeedLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div>
      <div>{children}</div>
      <br />
      <br />
      <hr />
      <br />
      <br />
      <div>{modal}</div>
    </div>
  );
}
