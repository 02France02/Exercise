import "./AlertClock.css"

export function AlertClock({ hour }) {
  return (
    <>
    <div className="container-button">
        <button
        className="time-set-button"
        type="button"
        onClick={() => alert(hour)}
      >
        Time
      </button>
    </div>
      
    </>
  );
}
