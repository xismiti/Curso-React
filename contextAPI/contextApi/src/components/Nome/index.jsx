import { useContext } from "react";
import { UserContext } from "../../contexts/user";
function Nome() {
  const { alunos, setAlunos } = useContext(UserContext);

  return (
    <>
      <span>Ola sou o: {alunos} </span>
      <button
        onClick={() => {
          setAlunos("Vagner Love");
        }}
      >
        Mudar nome
      </button>
    </>
  );
}
export default Nome;
