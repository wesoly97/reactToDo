import React, { useState } from "react";
import styles from "./Input.module.css";
import Navbar from "./Navbar";
export default function Input({ addTask }) {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [priority, setPriority] = useState(false);

  return (
    <div>
      <Navbar />
      <h1 class={styles.size}>
        <span className={styles.eLetter}>E-</span>
        <span className={styles.restLetter}>TASK</span>
      </h1>
      <h2>19.04.2021</h2>
      <h5 className="brown-text size">Proszę, Dodaj zadanie do zrobienia</h5>
      <div className={styles.container}>
        <div class="row">
          <div class="input-field col s12">
            <i class="material-icons prefix">mode_edit</i>
            <textarea
              type="text"
              id="task"
              class="autocomplete materialize-textarea"
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <label for="task">ZADANIE</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <i class="material-icons prefix">date_range</i>
            <input
              type="date"
              id="date1"
              className="datepicker"
              value={date}
              format="dd-MM-yyyy"
              min={new Date().toISOString().slice(0, 10)}
              onChange={(e) => setDate(e.target.value)}
            />
            <label for="date1">TERMIN WYKONANIA:</label>
          </div>
        </div>

        <label>
          <input
            type="checkbox"
            value={priority}
            checked={priority}
            onChange={(e) => setPriority(e.target.checked)}
          />
          <span className={styles.priority}>Piorytet</span>
        </label>

        <button
          className="btn waves-effect waves-light brown darken-1"
          type="submit"
          onClick={() => {
            addTask(task, priority, date);
            setTask("");
            setDate("");
            setPriority(false);
          }}
        >
          <i className="material-icons right">send</i> dodaj
        </button>
      </div>
    </div>
  );
}
