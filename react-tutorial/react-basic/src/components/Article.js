import { Content, Title, Button, Input, Counter, Github } from "./index";

const Article = (props) => {
    return (
        <div>
            <Title title={props.title} />
            <Content content={props.content} />
            <Button button={'ボタン'} /><br />
            <Input />
            <Counter />
            <Github/>
        </div>
    )
}

export default Article;