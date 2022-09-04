import { Container } from "solid-bootstrap";
import { Component } from "solid-js";
import styles from '../App.module.css';

const LectureWater: Component = () => {
    return (
        <Container class={styles.Lecture}>
            <div>
                <h2>Наводнување и прихрана</h2>
                <p>
                    Орхидеите не сакаат да седат во влага и заради тоа тие се полеваат со вода еднаш неделно, откако корењата и
                    почвата ќе се исуши. Лесен начин да се забележи кога е време за полевање е саксијата е забележливо полесна, кората е сува
                    и корените на орхидеата се сребренасто зелени.
                </p>
                <p>
                    Количински се полеваат да може барем водата слободно да тече низ саксијата, осигурувајќи дека целиот медиум и корењата се соодветно
                    наводенати. Попознат и препорачлив начин е орхидеата со пластичната саксија да седи во вода 15 минути до 2 часа и потоа да се остави
                    да се исцеди убаво. Вака орхидеата и медиумот ќе примат колку што им треба.
                    Иако често давано како совет на етиката за брз и лесен начин на полевање при купување на орхидеа, никако не треба да се полева
                    орхидеа со 2-3 коцки лед. Не само што нема да добие вода колку што му треба ниту еднакво да е распределена водата, ледот може да ги
                    шокира корењата и да почнат да гнијат.
                </p>
                <p>
                    Орхидеите треба да се прихрануваат редовно особено во перидот на растење. Најидеално е со 1/4 разредена прихрана еднаш неделно,
                    но и еднаш месечно е исто така во ред. Се препорачува да се користи „балансирана прихрана“ т.е. 20-20-20
                    (еднаков процент на нитроген, фосфор и калиум) се додека има низок или воопшто нема уреа во составот. Важно да се напомене:
                    Прихрана се дава само на веќе полеани орхидеи бидејќи ако се стави прихрана на суви корења може да ги изгори иако е веќе доволно разредена.

                </p>
            </div>
        </Container>
    );
}
export default LectureWater;