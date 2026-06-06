'use client';
import React from 'react'
import styles from './style.module.scss';

export default function index({index, title, category, description, manageModal}) {

    return (
        <div onMouseEnter={(e) => {manageModal(true, index, e.clientX, e.clientY)}} onMouseLeave={(e) => {manageModal(false, index, e.clientX, e.clientY)}} className={styles.project}>
            <div>
                <span>{category}</span>
                <h2>{title}</h2>
            </div>
            <p>{description}</p>
        </div>
    )
}
