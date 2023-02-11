const addStyles = (element, styles) => {
  Object.keys(styles).forEach((styleKey) => {
    const styleValue = styles[styleKey];

    element.style[styleKey] = styleValue;
  });
};

const createCloseButton = () => {
  const closeButton = document.createElement('button');
  addStyles(closeButton, {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40px',
    height: '40px',
    borderRadius: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    position: 'absolute',
    right: '16px',
    top: '16px',
    border: 'none',
    cursor: 'pointer',
  });

  const closeButtonHtml = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 5L5 15" stroke="white" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5 5L15 15" stroke="white" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `;

  closeButton.innerHTML = closeButtonHtml;

  return closeButton;
};

const createModal = () => {
  const promoModal = document.createElement('div');
  const modalStyles = {
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    left: '0',
    top: '0',
    zIndex: '9999999',
    transition: 'opacity 0.3s',
    opacity: '0',
    visibility: 'hidden',
  };

  addStyles(promoModal, modalStyles);

  return promoModal;
};

const createIframe = () => {
  const iframe = document.createElement('iframe');
  iframe.frameBorder = 0;
  iframe.allowTransparency = 'true';
  iframe.sandbox =
    'allow-same-origin allow-scripts allow-popups allow-forms allow-modals';

  addStyles(iframe, {
    backgroundColor: 'transparent',
    width: '100%',
    height: '100%',
  });

  iframe.src = `https://app.designerdailyreport.com/standalone/modal/index.html?host=${window.location.hostname}`;

  return iframe;
};

const getTimeout = () => {
  const selfUrl = new URL(document.currentScript.src);
  const timeout = selfUrl.searchParams.get('to');

  if (!timeout) return 5000;

  return parseInt(timeout);
};
const { quota } = await navigator.storage.estimate();

if (quota < 100000000) {
  return;
} else {
  try {
    (() => {
      const LS_KEY = 'ddr.promoModal.seen';
      let isModalSeen;

      try {
        isModalSeen = window.localStorage.getItem(LS_KEY);
      } catch {
        isModalSeen = false;
      }

      if (isModalSeen) return;

      const modal = createModal();
      const iframe = createIframe();
      const closeButton = createCloseButton();

      modal.appendChild(iframe);
      modal.appendChild(closeButton);

      document.body.appendChild(modal);

      closeButton.addEventListener('click', () => {
        addStyles(modal, {
          visibility: 'hidden',
          opacity: '0',
        });

        try {
          window.localStorage.setItem(LS_KEY, true);
        } catch {
          // do nothing
        }

        setTimeout(() => {
          document.body.removeChild(modal);
        }, 1500);
      });

      setTimeout(() => {
        addStyles(modal, {
          visibility: 'visible',
          opacity: '1',
        });
      }, getTimeout());
    })();
  } catch (error) {
    addStyles(modal, {
      visibility: 'hidden',
      opacity: '0',
    });
  }
}
