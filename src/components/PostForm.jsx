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
    .then((data) => {console.log(data)})
    .catch((error) => {
      console.log(error)
    })
//limpiar textboxs
    e.target.elements.nombre.value = ''
    e.target.elements.descripcion.value=''
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nombre" />
        <input type="text" name="descripcion" />
        <button >Crear</button>
      </form>
    </div>
  );
};

export default PostForm;
