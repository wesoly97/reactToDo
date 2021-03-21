import React from "react";
import styles from "./Input.module.css";
import { useState } from "react";

export default function List({ list, doneHandler, setList }) {
  const [listDone, setListDone] = useState([]);

  const DoneCounter = (id, task) => {
    const date_done = new Date().toLocaleString() + "";
    const tablicaWykonany = [
      ...listDone,
      "Zadanie: " + task + " | Wykonane: " + date_done,
    ];
    setListDone(tablicaWykonany);
    doneHandler(id);
  };
  const DeleteALlTask = () => {
    setList([]);
  };

  const htmlList = list.map(({ id, priority, task, date }) => {
    return (
      <div>
        <span key={id} style={{ color: priority ? "red" : "black" }}>
          {" "}
          {task} |Termin: {date} |{" "}
        </span>
        <a
          class="btn-floating  deep-orange pulse btn-small"
          onClick={() => DoneCounter(id, task)}
        >
          <i class="material-icons">done</i>
        </a>{" "}
        <a
          class="btn-floating brown pulse btn-small"
          onClick={() => doneHandler(id)}
        >
          <i class="material-icons">delete</i>
        </a>
      </div>
    );
  });

  const DoneHtmlList = listDone.map((task) => {
    return (
      <div>
        <span> {task} </span>
      </div>
    );
  });
  if (!list.length) {
    return (
      <div>
        <h4>Zadania do zrobienia:</h4>
        <div class={styles.container}>
          <h5>Brak zadań do wyświetlenia! Jesteś na bieżąco</h5>
        </div>
        <h4>Zadania zrobione:</h4>
        <div class={styles.containerDone}>
          <h5>({listDone.length})</h5>
          <div>{DoneHtmlList}</div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h4>Lista zadań do zrobienia:</h4>
        <div class={styles.container}>
          <h5>
            <a
              class="btn-floating btn-small waves-effect waves-light red"
              onClick={() => DeleteALlTask()}
            >
              <i class="material-icons">delete_sweep</i>
            </a>

            {htmlList}
          </h5>
        </div>
        <h4>Zadania zrobione:</h4>
        <div class={styles.containerDone}>
          <h5>({listDone.length})</h5>
          <div>{DoneHtmlList}</div>
        </div>
      </div>
    );
  }
}
