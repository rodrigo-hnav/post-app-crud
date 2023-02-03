import { useCreatePostMutation } from "../api/apiSlice";

const PostForm = () => {
  const [createPost] = useCreatePostMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    //obtener datos nombre y descripcion
    const nombre = e.target.elements.nombre.value.trim();
    const descripcion = e.target.elements.descripcion.value.trim();
    //Crear posts: retorna el post creado
    createPost({ nombre, descripcion })
      .unwrap()
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
    //limpiar textboxs
    e.target.elements.nombre.value = "";
    e.target.elements.descripcion.value = "";
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form-inline">
        <div className="form-group ">
          <input
            className="form-control"
            type="text"
            name="nombre"
            placeholder="Nombre del post"
          />
        </div>

        <div className="form-group ">
          <input
            className="form-control"
            type="text"
            name="descripcion"
            placeholder="Descripcion del post"
          />
        </div>

        <button  className=" btn btn-primary" >Crear</button>
      </form>
    </>
  );
};

export default PostForm;
