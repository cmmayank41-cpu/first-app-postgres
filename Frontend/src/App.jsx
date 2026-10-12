
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [designers, setDesigners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [city, setCity] = useState("");

  
useEffect(() => {
  async function fetchDesigners() {
    setLoading(true);
    setError("");

    try {
      const url = new URL("http://localhost:3000/api/designers");

      if (city) {
        url.searchParams.set("city", city);
      }

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Failed to load designers");
      }

      const result = await response.json();
      setDesigners(result.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  fetchDesigners();
}, [city]);


  if (loading) {
    return <p>Loading designers...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="app">
      <header>
        <h1>Find Your Interior Designer</h1>
        <p>Discover designers for your next project.</p>
      </header>
 <div className="city-filter">
      <label htmlFor="city">Filter by city: </label>

<select
  id="city"
  value={city}
  onChange={(event) => setCity(event.target.value)}
>
        <option value="">All Cities</option>
        <option value="Bengaluru">Bengaluru</option>
        <option value="Delhi">Delhi</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Pune">Pune</option>
      </select>
    </div>
     
<main className="designer-list">
  {designers.length === 0 ? (
    <p className="empty-state">
      No designers found
      {city ? ` in ${city}` : ""}.
      Try selecting another city.
    </p>
  ) : (
    designers.map((designer) => (
      <article className="designer-card" key={designer.id}>
        <h2>{designer.name}</h2>
        <p>City: {designer.city}</p>
        <p>Specialization: {designer.specialization}</p>
      </article>
    ))
  )}
</main>

    </div>
  );
}

export default App;
