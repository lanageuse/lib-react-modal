# @liron-0654/react-lib-modal

## À propos de ce projet

Ce composant Modal React a été conçu pour faciliter l'intégration de modales.

-----------------------------------------------------------------------------------------------------------------------

#### Pour installer ce package  
```bash
npm install @liron-0654/react-lib-modal
```
### 🎨 Import du style (obligatoire)

```js
import '@liron-0654/react-lib-modal/style.css';
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

### `useModal()`
Le hook retourne :
```js
{
  isOpen: boolean;
  options: ModalOptions;
  openModal: (options?: Partial<ModalOptions>) => void;
  closeModal: () => void;
  toggleModal: (options?: Partial<ModalOptions>) => void;
  updateOptions: (options: Partial<ModalOptions>) => void;
}
```

### `<Modal />`
Les Props du composnat Modal :
```js
{
  isOpen: boolean;
  onClose: () => void;
  options?: ModalOptions;
}
```

### ModalOptions

```js
{
  position?: 'center' | 'top' | 'bottom' | 'left' | 'right' | 'custom';
  size?: 'small' | 'medium' | 'large' | 'fullscreen' | 'auto';
  content?: string
  overlay?: boolean;
  overlayClosable?: boolean;
  escapeClosable?: boolean;
  className?: string;
}
```
