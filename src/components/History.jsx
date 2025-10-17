export default function HistoryModal({ history, onClose }) {

 const safeHistory = Array.isArray(history) ? history : [];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>History</h3>
          <button className="close-btn" onClick={onClose}>✖</button>
        </div>
        <div className="modal-body">
          {safeHistory.length === 0 ? (
            <p className="empty">No calculations yet.</p>
          ) : (
            <ul>
              {history.map((item, index) => (
                <li key={index}>
                  <span className="expression">{item.expression}</span>
                  <span className="result">= {item.result}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}