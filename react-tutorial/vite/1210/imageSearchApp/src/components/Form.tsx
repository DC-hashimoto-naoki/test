type Props = {
    setWord: any;
    getPhotoData: any;
}

const Form: React.FC<Props> = ({ setWord, getPhotoData }) => {
    return (
        <form>
            <input
                type="text"
                name="keyword"
                placeholder="write here keywords"
                onChange={e => setWord(e.target.value)}
            ></input>
            <button type="submit" onClick={getPhotoData}>検索</button>
        </form>
    );
}

export default Form;