import Bottom1Img from "Assets/images/backgrounds/bottom-1.png";
import Bottom2Img from "Assets/images/backgrounds/bottom-2.png";
import Bottom3Img from "Assets/images/backgrounds/bottom-3.png";
import Bottom4Img from "Assets/images/backgrounds/bottom-4.png";

import "./BottomContent.scss";

const BottomContent = () => {
    return <section className="bottom-content">
        <div className="bottom-content__images">
            <img src={Bottom1Img} alt="bottom-1" />
            <img src={Bottom2Img} alt="bottom-2" />
        </div>
        <form className="bottom-content__form">
            <h3>
                Не нашли то, что искали?
            </h3>
            <p>
                Заполните форму и мы перезвоним вам в течение 30 минут!
            </p>
            <input type="text"
                placeholder="Ваше имя"
            />
            <input type="text"
                placeholder="Номер телефона"
            />
            <textarea type="text"
                placeholder="Ваш вопрос  (необязательно)"
            />
            <button>
                Отправить
            </button>
        </form>

        <img className="bottom-content__img-3" src={Bottom3Img} alt="bottom-3" />
        <img className="bottom-content__img-4" src={Bottom4Img} alt="bottom-4" />
    </section>
}

export default BottomContent;