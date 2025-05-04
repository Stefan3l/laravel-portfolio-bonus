import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ProjectPage() {
  const [project, setProject] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BE_URL}/${id}`)
      .then((res) => {
        setProject(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        return err;
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <button className="mb-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        <Link to="/">Torna alla lista</Link>
      </button>
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl w-full">
        {project && (
          <div className="space-y-6">
            <div className="border-b pb-4">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                {project.name}
              </h1>
              <h2 className="text-xl text-gray-600">{project.nome_cliente}</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-center text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>{project.periodo}</span>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  {project.riasunto}
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">
                  Tipo di progetto
                </h3>
                <p className="text-gray-700 mb-1">{project.type.nome}</p>
                <p className="text-gray-600 text-sm">
                  {project.type.descrizione}
                </p>
              </div>

              {project.technologies && project.technologies.length > 0 && (
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">
                    Tecnologie utilizzate
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((item) => (
                      <span
                        key={item.id}
                        className="px-3 py-1 rounded-full text-sm font-medium"
                        style={{ backgroundColor: item.colore, color: "#fff" }}
                      >
                        {item.nome}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
