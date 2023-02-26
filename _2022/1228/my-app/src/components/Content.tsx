type ContentProps = {
    title: string,
    text: string,
    age: number
}

const Content = (props: ContentProps):JSX.Element => {
    const {title, text, age} = props;
    return(
        <div>
            <h1>
                {title}
            </h1>
            <p>
                {text} : {age}
            </p>
        </div>
    )
}

export default Content;