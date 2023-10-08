import React from 'react';
import PersonalInfo from '../PersonalInfo/PInfo';
import styles from './DashboardComp.module.css';

const DashboardComp = () => {
  return (
    <div className={styles.DashboardContainer}>
      <PersonalInfo />
    </div>
  );
};

export default DashboardComp;
