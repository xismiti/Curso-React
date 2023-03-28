import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {
  const [tarefas, setTarefas] = useState([]);

  const [input, setInput] = useState('');

  useEffect(() => {
    const tarefasStorage = localStorage.getItem('tarefas');
    if (tarefasStorage) {
      setTarefas(JSON.parse(tarefasStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }, [tarefas]);

  const handleAdd = useCallback(() => {
    setTarefas([...tarefas, input]);
    setInput('');
  }, [input, tarefas]);

  function handleRemove() {
    const arrayTarefas = [...tarefas];
    if (arrayTarefas.length == ' ') {
      alert('Não há mais tarefas para remover!');
    } else {
      arrayTarefas.pop();
      setTarefas(arrayTarefas);
    }
  }

  const totalTarefas = useMemo(() => tarefas.length, [tarefas]);

  return (
    <div>
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
      <br />
      <strong>Você tem {totalTarefas} para fazer!</strong> <br />
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <br />
      <button onClick={handleAdd}>Adicionar tarefa</button>
      <button onClick={handleRemove}>Remover tarefas</button>
    </div>
  );
}

export default App;
