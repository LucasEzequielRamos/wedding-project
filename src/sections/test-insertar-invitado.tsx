import { useState } from "react";
import { supabase } from "../utils/supabaseClient";

const TestInsertGuest = () => {
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [result, setResult] = useState<any>(null);

  const handleInsert = async () => {
    setLoading(true);
    const firstName = "Lucas";
    const lastName = "Ramos";
    const fullName = `${firstName} ${lastName}`;
    const familyGroup = 1;

    const { data, error } = await supabase.from("Guest").insert([
      {
        firstName,
        lastName,
        fullName,
        familyGroup,
      },
    ]);

    if (error) {
      console.error("❌ Error al insertar:", error);
      setResult(error.message);
    } else {
      console.log("✅ Invitado agregado:", data);
      setResult("Invitado agregado correctamente ✅");
    }

    setLoading(false);
  };

  return (
    <div className="p-4">
      <button
        onClick={handleInsert}
        disabled={loading}
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        {loading ? "Agregando..." : "Probar Insertar Invitado"}
      </button>
      {result && <p className="mt-4">{result}</p>}
    </div>
  );
};

export default TestInsertGuest;
