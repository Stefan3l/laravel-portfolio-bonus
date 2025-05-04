export default function Card({ title, content, className = "" }) {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      {title && <h3 className="text-xl font-semibold mb-3">{title}</h3>}
      <div className="card-content">{content}</div>
    </div>
  );
}
