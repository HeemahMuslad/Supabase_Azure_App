import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://zuqkfaixhqdoqekbiodd.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp1cWtmYWl4aHFkb3Fla2Jpb2RkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM0NzA4NjAsImV4cCI6MjA0OTA0Njg2MH0.v0k2svr68H88n6slGWkYxocYWtxyCNliVYFBwhapXGU");

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    const { data } = await supabase.from("countries").select();
    setCountries(data);
  }

  return (
    <ul  >
      {countries.map((country) => (
        <li key={country.name}>{country.name}</li>
      ))}
    </ul>
  );
}

export default App;