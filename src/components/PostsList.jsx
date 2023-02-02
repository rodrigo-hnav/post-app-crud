import { useDeletePostMutation } from "../api/apiSlice";
//Listar posts
const PostsList = ({ posts }) => {
  const [deletePost] = useDeletePostMutation();

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Accion</th>
          </tr>
        </thead>

        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.nombre}</td>
              <td>{post.descripcion}</td>
              <td>
                <button
                  onClick={() => {
//Eliminar posts: retorna el post eliminado
                    deletePost(post.id)
                      .unwrap()
                      .then((data) => {
                        console.log(data);
                      })
                      .catch((error) => {
                        console.log(error);
                      });
                  }}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostsList;
