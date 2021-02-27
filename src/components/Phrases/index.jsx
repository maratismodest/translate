import useSound from "use-sound";
import sound from "../../sounds/sound.mp3";
import wrong from "../../sounds/wrong.mp3";
import {Button} from "antd";
import Title from "antd/es/typography/Title";
import Icon, {PlayCircleOutlined} from "@ant-design/icons";
import {StyledPhrase} from "../Game";
import {useHistory} from "react-router-dom";

const Phrases = ({state, setState}) => {
    const history = useHistory();
    const {
        currentQuestionIndex,
        result,
        questions,
        phrases,
        finished,
        currentAudio,
        gameState,
        language,
        translate,
        chosenGame
    } = state;

    const question = phrases[currentQuestionIndex];
    const {options, questionText, correct, id: questionId, audio} = question
    const [tell] = useSound(audio)
    // const shuffledOptions = _.shuffle(options)
    const shuffledOptions = options;
    const [yes] = useSound(sound);
    const [no] = useSound(wrong);


    // useEffect(()=>{
    //     console.log("tell")
    //     tell()
    // },[tell])

    //Проверяем: если это не последний вопрос, то показываем следующий, если последний - то отображаем результаты
    function checkGameState(chosenGame, questionResult) {
        if (currentQuestionIndex + 1 < phrases.length) {
            setState({...state, currentQuestionIndex: currentQuestionIndex + 1, result: [...result, questionResult]})
        } else {
            history.push("/result");
            setState({
                ...state,
                currentQuestionIndex: 0,
                result: [...result, questionResult],
                finished: true,
                gameState: 'result',
                chosenGame: chosenGame
            })
        }
    }
    const handleClick = (id) => {
        const timeout = window.setTimeout(() => {
            id === correct ? yes() : no()
            const questionResult = id === correct ? {
                correct: true,
                id: questionId,
                questionText: questionText
            } : {correct: false, id: questionId, questionText: questionText}
            checkGameState(chosenGame, questionResult)

            window.clearTimeout(timeout)
        }, 300)


    }
    const optionsList = shuffledOptions.map((option, index) => {
        const {id, text} = option;
        return <li key={id}>
            <Button size={"large"} onClick={() => {
                handleClick(id);

            }} block>{text}</Button>

        </li>
    })




    return (
        <StyledPhrase>

            <Title level={5}>{translate.question} {currentQuestionIndex + 1} / {phrases.length}</Title>

            <Title level={2} onClick={()=>{tell()}}><Icon onClick={tell} component={PlayCircleOutlined} style={{color: '#12a4d9'}}/> {questionText}</Title>
            <ul style={{minWidth: '200px', maxWidth: '350px'}}>
                {optionsList}
            </ul>
        </StyledPhrase>
    )
}

export default Phrases;