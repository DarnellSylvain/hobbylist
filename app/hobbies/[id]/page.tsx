import { useParams } from "next/navigation";

export default function HobbyPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>{params.id} Page</h1>
    </div>
  );
}
