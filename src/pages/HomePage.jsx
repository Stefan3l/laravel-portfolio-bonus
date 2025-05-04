import Card from "../components/Card";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Home Page</h1>
      <p className="text-lg mb-8">This is a simple home page layout.</p>
      <div className="">
        <Card title="Card 1" content="This is the content of card 1." />
      </div>
    </div>
  );
}
