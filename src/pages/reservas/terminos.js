import React from 'react';
import './terminos.css';
import { useTranslation } from 'react-i18next';

const Terminos = () => {
  const { t } = useTranslation();

  return (
    <div className="terminos-container">
      <h3>{t('terminos.cancelacionTitulo')}</h3>
      <p>{t('terminos.p1')}</p>
      <p>{t('terminos.p2')}</p>
      <p>{t('terminos.p3')}</p>
      <p>{t('terminos.p4')}</p>
      <p>{t('terminos.p5')}</p>
      <p>{t('terminos.p6')}</p>
      <p>{t('terminos.leEsperamos')}</p>

      <hr />

      <h3>{t('terminos.avisoLegalTitulo')}</h3>
      <p>{t('terminos.legal1')}</p>
      <p>{t('terminos.legal2')}</p>
    </div>
  );
};

export default Terminos;
