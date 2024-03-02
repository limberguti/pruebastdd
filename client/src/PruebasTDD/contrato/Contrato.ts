// useAddCargo.ts
import { useState, useEffect } from "react";
import axios from "axios";

// Interfaces para los tipos de datos
interface Docente {
  id: number;
  nombre: string;
}

interface Requerimiento {
  id: number;
  descripcion: string;
}

interface Contrato {
  IDDOCENTE: string;
  IDREQUERIMIENTO: string;
  FECHAINICIO: string;
  FECHAFIN: string;
  FUENTE: string;
  FECHA: string;
  CERTIFICACION_PRESUPUESTARIA: string;
  IDMEMO: string;
  ANALISTADELPROCESO: string;
  ARCHIVOMEMO: string;
}

// Hook personalizado para manejar el estado y la lógica de AddCargo
export const useAddCargo = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [docentes, setDocentes] = useState<Docente[]>([]);
  const [selectedDocente, setSelectedDocente] = useState("");
  const [reqs, setReqs] = useState<Requerimiento[]>([]);
  const [selectedReq, setSelectedReq] = useState("");

  useEffect(() => {
    const fetchDocentes = async () => {
      const response = await axios.get<Docente[]>("http://localhost:8800/api/docentes");
      setDocentes(response.data);
    };

    const fetchRequerimientos = async () => {
      const response = await axios.get<Requerimiento[]>("http://localhost:8800/api/requerimientos");
      setReqs(response.data);
    };

    fetchDocentes();
    fetchRequerimientos();
  }, []);

  const [newContrato, setNewContrato] = useState<Contrato>({
    IDDOCENTE: selectedDocente,
    IDREQUERIMIENTO: selectedReq,
    FECHAINICIO: "",
    FECHAFIN: "",
    FUENTE: "",
    FECHA: "",
    CERTIFICACION_PRESUPUESTARIA: "",
    IDMEMO: "",
    ANALISTADELPROCESO: "",
    ARCHIVOMEMO: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewContrato({
      ...newContrato,
      [name]: value,
    });
  };

  const handleAddContrato = async () => {
    if (
      !selectedDocente ||
      !selectedReq ||
      !newContrato.FECHAINICIO ||
      !newContrato.FECHAFIN ||
      !newContrato.FECHA ||
      !newContrato.CERTIFICACION_PRESUPUESTARIA ||
      !newContrato.ANALISTADELPROCESO
    ) {
      alert("Por favor, llene todos los campos obligatorios.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8800/api/contrato", newContrato);
      console.log(response.data);
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 5000);
    } catch (error) {
      console.error("Error al agregar contrato:", error);
    }
  };

  return {
    showMessage,
    docentes,
    selectedDocente,
    setSelectedDocente,
    reqs,
    selectedReq,
    setSelectedReq,
    newContrato,
    setNewContrato,
    handleInputChange,
    handleAddContrato,
  };
};
