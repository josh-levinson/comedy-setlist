import Setlist from "./Setlist";

export default function Setlists({ setlists }) {
  return (
    <div>
      {setlists.map((jokes) => (
        <Setlist jokes={jokes} />
      ))}
    </div>
  );
}
