import "./Header.css";
export default function HeaderComponent({ title = "default title" }) {
  return (
    <div className="HeaderStyle">
      <p>{title}</p>
    </div>
  );
}
