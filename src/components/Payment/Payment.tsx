import React, { FC } from 'react';
import styles from './Payment.module.css';

interface PaymentProps {}

const Payment: FC<PaymentProps> = () => (
  <div className={styles.Payment} data-testid="Payment">
    Payment Component
  </div>
);

export default Payment;
