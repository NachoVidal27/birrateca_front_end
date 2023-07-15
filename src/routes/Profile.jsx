import { useSelector } from "react-redux/es/hooks/useSelector";

function Profile() {
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <div className="mt-20 h-[90vh]">
      <h1 className="text-3xl font-bold ">Bienvenido {user.name}</h1>
      <h3 className="text-xl font-semibold mt-1">
        Aqui podrás editar la información de tu cuenta
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-12 mx-6 gap-4">
        <div className="h-80 w-[70%] mx-auto">
          <h2 className="text-2xl font-semibold mb-8">
            Información de usuario
          </h2>
          <form action="">
            <div className="grid grid-cols-2 my-3 mx-4">
              <label
                htmlFor="name"
                className="text-start text-lg font-semibold"
              >
                Nombre
              </label>
              <input
                type="text"
                className="border border-black rounded px-2"
                value={user.name}
              />
            </div>
            <hr />
            <div className="grid grid-cols-2 my-3 mx-4">
              <label
                htmlFor="memberId"
                className="text-start text-lg font-semibold"
              >
                Número de socio
              </label>
              <input
                type="text"
                className="border border-black rounded px-2"
                value={user.memberId}
              />
            </div>
            <hr />
            <div className="grid grid-cols-2 my-3 mx-4">
              <label
                htmlFor="phone"
                className="text-start text-lg font-semibold "
              >
                Teléfono
              </label>
              <input
                type="text"
                className="border border-black rounded px-2"
                value={user.phone}
              />
            </div>
            <hr />
            <div className="grid grid-cols-2 my-3 mx-4">
              <label
                htmlFor="email"
                className="text-start text-lg font-semibold"
              >
                Email
              </label>
              <input
                type="text"
                className="border border-black rounded px-2 "
                value={user.email}
              />
            </div>
            <hr />
            <button className="bg-black px-3 py-2 w-fit mx-auto my-3 mt-4 rounded text-md text-white">
              Confirmar cambios
            </button>
          </form>
        </div>
        <div className="bg-blue-200 h-60">
          <h2 className="text-lg font-semibold">Tus birras</h2>
        </div>
      </div>
    </div>
  );
}

export default Profile;
