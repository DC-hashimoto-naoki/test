import styled from "styled-components"

export function InputFiles({className}){
    return(
        <div>
            <div className={className}>
                input files
            </div>
        </div>
    )
}

export const StyledInput = styled(InputFiles)`
    width: 200px;
    background-color: #ddd;
`