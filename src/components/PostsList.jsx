import { useDeletePostMutation } from "../api/apiSlice";
//Listar posts
const PostsList = ({ posts }) => {
  const [deletePost] = useDeletePostMutation();

  return (
    <div className="d-flex justify-content-center mb-4 mt-3">
      <table  className="table table-bordered table-striped mb-0">
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
                <button className=" btn btn-secondary"
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
