import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Card({ title, content }) {
  const [project, setProject] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BE_URL}`)
      .then((res) => {
        setProject(res.data.data);
      })
      .catch((err) => {
        return err;
      });
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-wrap -mx-2">
      {project.map((item) => (
        <div key={item.id} className="w-full md:w-1/3 px-2 mb-4">
          <div className="border-2 border-gray-300 p-4 rounded-lg h-full shadow-lg flex flex-col min-h-[400px]">
            <div className="flex-grow">
              <h2 className="text-xl font-bold mb-2">{item.name}</h2>
              <h3 className="text-lg font-semibold mb-2">
                {item.nome_cliente}
              </h3>
              <hr></hr>
              <div className="my-4">
                <p className="text-gray-700 font-semibold mt-1.5">
                  Data del progetto:
                </p>
                <span className="text-gray-600 font-bold">{item.periodo}</span>
              </div>
              <hr></hr>
              <div className="my-4">
                <p className="text-gray-700 font-semibold mt-1.5 ">Tipo:</p>
                <h5 className="font-bold">{item.type.nome}</h5>
              </div>
            </div>
            <div className="mt-auto flex justify-center">
              <Link
                to={`/projects/${item.id}`}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Visualizza
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
