import { Container } from "solid-bootstrap";
import { Component } from "solid-js";
import styles from '../../App.module.css';

interface LecturePageProps {
    children: any;
    title: string;
}

const LecturePage: Component<LecturePageProps> = (props) => {
    const { title, children } = props;
    return (
        <Container class={styles.Lecture}>
            <div style={{ 'padding-left': '1rem' }}>
                <h2 style={{ 'padding': '0.5rem' }}>{title}</h2>
                <div style={{ "text-align": "left" }}>
                    {children}
                </div>
            </div>
        </Container>
    );
}

export default LecturePage;