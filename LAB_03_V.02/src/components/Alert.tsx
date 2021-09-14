import React, { FC } from 'react';

interface AlertProps {
  message: string;
  onClose: () => void
}

const Alert: FC<AlertProps> = ({ message, onClose }) => {
  return(
    <div className="modal is-active has-text-centered">
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-card">
        <header className="modal-card-head has-background-danger">
          <p className="modal-card-title has-text-white">Miasto nieznalezione!</p>                    
        </header>
        <div className="modal-body">
        <p className="modal-card-text has-background-info has-text-white">Błąd: {message}</p>
        </div>               
        <footer className="modal-card-foot" style={{justifyContent: 'center'}}>       
          <button className="button has-background-danger has-text-white" onClick={onClose}>Zamknij</button>
        </footer>
      </div>
    </div>
  );
}

export default Alert;