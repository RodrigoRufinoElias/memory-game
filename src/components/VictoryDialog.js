import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

const VictoryDialog = ({ isOpen, onClose, onGameRestart }) => (
  <Dialog open={isOpen} onClose={onClose}>
    <DialogTitle>Parabéns!</DialogTitle>
    <DialogContent>
      <DialogContentText>Você venceu o jogo.</DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button color="primary" onClick={onGameRestart}>
        Reiniciar
      </Button>
      <Button color="primary" onClick={onClose} autoFocus>
        Ok
      </Button>
    </DialogActions>
  </Dialog>
);

export default VictoryDialog;
