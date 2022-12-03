import './index.scss'

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
    const completeAnimation = (e) => {
        e.target.classList.add('completeAnimation');
        setTimeout(() => {
            e.target.classList.remove('completeAnimation')
        }, 1000)
    }

    return (
       <span>
        {
            strArray.map((char, i) => {
                return (
                    <span onMouseOver={completeAnimation} key={char + i} className={`${letterClass} _${i + idx}`}>
                        {char}
                    </span>
                )
            })
        }
       </span>
    );
}

export default AnimatedLetters;