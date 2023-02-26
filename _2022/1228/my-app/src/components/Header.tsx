type HeaderProps = {
    title: string,
    page: string
}


const Header = (props: HeaderProps) => {
    return(
        <div>
            <header>
                {props.title} : {props.page}
            </header>
        </div>
    )
}

export default Header;