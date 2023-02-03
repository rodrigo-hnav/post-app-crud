import React, { useEffect, useState } from "react";
import { useGetPostsQuery } from "../api/apiSlice";
import PostsList from "./PostsList";

const PostSearch = () => {
  //lista completa de posts una sola vez por cada vez que se carga la vista
  const { data, isLoading, isError, error, isSuccess } = useGetPostsQuery();
  const [posts, setPosts] = useState([]);

  //obtener data para manejo local
  useEffect(() => {
    if (isSuccess) setPosts(data);
  }, [isSuccess, data]);

  //Manejo del estado de la peticion
  if (isLoading) return <div>Cargando...</div>;
  else if (isError) return <div>Error en la cominicación con el servidor</div>;

  //Filtrar posts por nombre localmente
  const handleSubmit = (e) => {
    e.preventDefault();
    const nombre = e.target.elements.nombre.value.trim();
    if (nombre.length > 0) {
      setPosts(data.filter((post) => post.nombre == nombre));
    } else {
      setPosts(data);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-inline">
        <div className="form-group ">
          <input className="form-control" type="text" name="nombre" placeholder="Nombre a buscar" />
        </div>
        <button className=" btn btn-primary">Buscar</button>
      </form>
      <PostsList posts={posts} />
    </div>
  );
};

export default PostSearch;
