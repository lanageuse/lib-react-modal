# @liron-0654/react-lib-modal

## À propos de ce projet

Ce composant Modal React a été conçu pour faciliter l'intégration de modales.

-----------------------------------------------------------------------------------------------------------------------

#### Pour installer ce package  
```bash
npm install @liron-0654/react-lib-modal
```
### 🚀 Utilisation rapide
```bash
import React from 'react';
import { Modal, useModal } from '@liron-0654/react-lib-modal';

function App() {
  const modal = useModal();

  return (
    <div>
      <button onClick={() => modal.openModal({
        content: "Votre contenu ici !",
        size: "medium"
      })}>
        Ouvrir la modal
      </button>

      <Modal
        isOpen={modal.isOpen}
        onClose={modal.closeModal}
        options={modal.options}
      />
    </div>
  );
}
```
